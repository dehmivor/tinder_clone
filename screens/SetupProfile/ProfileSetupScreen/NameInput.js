import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NameScreen = ({ navigation }) => {
    const totalSteps = 8;
    const currentStep = 1;
    const [name, setName] = useState('');

    const isValidName = name.trim().length > 0;

    const renderProgressBar = () => {
        const segments = [];
        const segmentWidth = 100 / totalSteps;

        for (let i = 0; i < totalSteps; i++) {
            segments.push(
                <View
                    key={i}
                    style={[styles.progressSegment, {
                        width: `${segmentWidth}%`,
                        backgroundColor: i < currentStep ? '#E91E63' : '#E0E0E0',
                    }]}
                />
            );
        }

        return <View style={styles.progressBar}>{segments}</View>;
    };

    return (
        <SafeAreaView style={styles.container}>
            {renderProgressBar()}

            <KeyboardAvoidingView
                style={styles.content}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={0} // Điều chỉnh giá trị này để hạ thấp nút thêm
            >
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={24} color="#666" />
                </TouchableOpacity>

                <Text style={styles.title}>Tên của bạn là gì?</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nhập tên"
                    placeholderTextColor="#999"
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.hint}>
                    Đây là cách nội dung sẽ hiển thị trên hồ sơ.{'\n'}
                    <Text style={styles.boldText}>Bạn sẽ không thể thay đổi về sau.</Text>
                </Text>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={[styles.nextButton, !isValidName && styles.nextButtonDisabled]}
                        onPress={() => isValidName && navigation.navigate('BirthdayScreen')}
                        disabled={!isValidName}
                    >
                        <Text style={[styles.nextButtonText, !isValidName && styles.nextButtonTextDisabled]}>
                            Tiếp theo
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    progressBar: {
        flexDirection: 'row',
        height: 5,
        width: '100%',
    },
    progressSegment: {
        height: '100%',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    backButton: {
        padding: 10,
        marginLeft: -10,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30,
        color: '#000',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        fontSize: 16,
        paddingVertical: 8,
        color: '#000',
    },
    hint: {
        marginTop: 8,
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    boldText: {
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 'auto',
        paddingBottom: 20,
        width: '100%',
    },
    nextButton: {
        backgroundColor: '#E91E63',
        borderRadius: 100,
        padding: 16,
        alignItems: 'center',
        width: '100%',
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
});

export default NameScreen;
