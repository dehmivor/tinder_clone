import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


const PhotoUploadScreen = ({ navigation }) => {
    const [photos, setPhotos] = useState(Array(6).fill(null));
    const totalSteps = 8;
    const currentStep = 7;
    const [error, setError] = useState('');

    // Render the progress bar based on current step
    const renderProgressBar = () => {
        const segments = Array.from({ length: totalSteps }, (_, i) => (
            <View
                key={i}
                style={[
                    styles.progressSegment,
                    {
                        width: `${100 / totalSteps}%`,
                        backgroundColor: i < currentStep ? '#E91E63' : '#E0E0E0',
                    },
                ]}
            />
        ));

        return <View style={styles.progressBar}>{segments}</View>;
    };

    // Handle image picking from the device's library
    const pickImage = async (index) => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                const newPhotos = [...photos];
                newPhotos[index] = result.assets[0].uri;
                setPhotos(newPhotos);
                setError(''); // Reset error when a new image is uploaded
            }
        } catch (error) {
            console.log('Error picking image:', error);
        }
    };

    // Render each photo slot
    const renderPhotoSlot = (index) => (
        <TouchableOpacity
            key={index}
            style={styles.photoSlot}
            onPress={() => pickImage(index)}
        >
            {photos[index] ? (
                <Image source={{ uri: photos[index] }} style={styles.photo} />
            ) : (
                <Text style={styles.plusIcon}>+</Text>
            )}
        </TouchableOpacity>
    );

    // Handle navigation to the next screen
    const handleNext = () => {
        const filledPhotos = photos.filter(photo => photo !== null).length;
        if (filledPhotos >= 2) {
            navigation.navigate('LocationPermissionScreen'); // Adjust the route name accordingly
        } else {
            setError('Vui lòng tải lên ít nhất 2 ảnh để tiếp tục.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {renderProgressBar()}

            <View style={styles.content}>

                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon name="arrow-left" size={24} color="#666" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Thêm ảnh gần đây của bạn</Text>
                <Text style={styles.subtitle}>
                    Tải lên 2 ảnh để bắt đầu. Thêm 4 ảnh hoặc nhiều hơn nữa để hồ sơ của bạn thật nổi bật.
                </Text>

                <View style={styles.photoGrid}>
                    {Array.from({ length: 6 }, (_, index) => renderPhotoSlot(index))}
                </View>

                {error && <Text style={styles.errorText}>{error}</Text>}
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={[styles.nextButton, photos.filter(photo => photo !== null).length < 2 && styles.nextButtonDisabled]}
                    onPress={handleNext}
                    disabled={photos.filter(photo => photo !== null).length < 2}
                >
                    <Text style={[styles.nextButtonText, photos.filter(photo => photo !== null).length < 2 && styles.nextButtonTextDisabled]}>
                        Tiếp theo
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backButton: {
        padding: 8,
    },
    backIcon: {
        fontSize: 24,
        color: '#000',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 8,
        color: '#000',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 24,
    },
    photoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 8,
    },
    photoSlot: {
        width: '33.33%',
        aspectRatio: 1,
        padding: 8,
    },
    photo: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'dashed',
    },
    plusIcon: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'dashed',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 24,
        color: '#ff0000',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 10,
    },
    footer: {
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    nextButton: {
        backgroundColor: '#E91E63',
        borderRadius: 100,
        padding: 16,
        alignItems: 'center',
    },
    nextButtonDisabled: {
        backgroundColor: '#F5F5F5',
    },
    nextButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
    nextButtonTextDisabled: {
        color: '#999',
    },
    progressBar: {
        flexDirection: 'row',
        height: 5,
        width: '100%',
    },
    progressSegment: {
        height: '100%',
    },
});

export default PhotoUploadScreen;
