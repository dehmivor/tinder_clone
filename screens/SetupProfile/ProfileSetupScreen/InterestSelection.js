import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InterestSelectionScreen = ({ navigation }) => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const totalSteps = 8;
    const currentStep = 6;

    const interests = [
        ["Thế Hệ 9x", "Harry Potter", "SoundCloud"],
        ["Spa", "Chăm sóc bản thân", "Heavy Metal"],
        ["Tiệc gia đình", "Gin Tonic", "Thể dục dụng cụ"],
        ["Hot Yoga", "Thiền", "Sushi", "Spotify"],
        ["Hockey", "Bóng rổ", "Đấu thờ"],
        ["Tập luyện tại nhà", "Nhà hát"],
        ["Trải nghiệm các quán cà phê", "Thủy cung"],
        ["Giày Sneaker", "Instagram", "Suối nước nóng"],
        ["Đi dao", "Chạy bộ", "Du lịch"],
        ["Giao lưu ngôn ngữ", "Phim ảnh", "Chơi guitar"],
        ["Phát triển xã hội", "Tập gym", "Mạng Xã hội"],
        ["Hip Hop", "Chăm sóc da", "J-Pop", "Shisha"],
        ["Cricket", "Phim truyền hình Hàn Quốc"],
        ["Làm việc tự do", "K-Pop", "Trượt ván", "Gospel"],
        ["Group X", "Potterhead", "Thử những thứ mới"]
    ];

    const renderProgressBar = () => {
        const segments = [];
        const segmentWidth = 100 / totalSteps;

        for (let i = 0; i < totalSteps; i++) {
            segments.push(
                <View
                    key={i}
                    style={[
                        styles.progressSegment,
                        {
                            width: `${segmentWidth}%`,
                            backgroundColor: i < currentStep ? '#E91E63' : '#E0E0E0',
                        },
                    ]}
                />
            );
        }

        return <View style={styles.progressBar}>{segments}</View>;
    };

    const toggleInterest = (interest) => {
        setSelectedInterests(prev => {
            if (prev.includes(interest)) {
                return prev.filter(i => i !== interest);
            }
            if (prev.length < 5) {
                return [...prev, interest];
            }
            return prev;
        });
    };

    const handleNext = () => {
        if (selectedInterests.length > 0) {
            navigation.navigate('PhotoUploadScreen');
        }
    };

    const renderInterestTag = (interest) => {
        const isSelected = selectedInterests.includes(interest);
        return (
            <TouchableOpacity
                key={interest}
                onPress={() => toggleInterest(interest)}
                style={[
                    styles.interestTag,
                    isSelected && styles.interestTagSelected
                ]}
                activeOpacity={0.7}
            >
                <Text style={[
                    styles.interestText,
                    isSelected && styles.interestTextSelected
                ]}>
                    {interest}
                </Text>
            </TouchableOpacity>
        );
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

                    <TouchableOpacity
                        style={styles.skipButton}
                        onPress={() => navigation.navigate('PhotoUploadScreen')}
                    >
                        <Text style={styles.skipText}>Bỏ qua</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Bạn thích điều gì?</Text>
                <Text style={styles.subtitle}>
                    Chọn tối đa 5 sở thích của bạn
                </Text>

                <View style={styles.borderContainer} />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.tagsContainer}>
                        {interests.flat().map(interest => renderInterestTag(interest))}
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={[
                            styles.nextButton,
                            !selectedInterests.length && styles.nextButtonDisabled
                        ]}
                        onPress={handleNext}
                        disabled={!selectedInterests.length}
                    >
                        <Text style={[
                            styles.nextButtonText,
                            !selectedInterests.length && styles.nextButtonTextDisabled
                        ]}>
                            Tiếp theo ({selectedInterests.length}/5)
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backButton: {
        padding: 10,
        marginLeft: -10,
    },
    skipButton: {
        padding: 10,
    },
    skipText: {
        fontSize: 16,
        color: '#E91E63',
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
    scrollView: {
        flex: 1,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    borderContainer: {
        borderTopWidth: 2,
        borderTopColor: '#E0E0E0',
        marginBottom: 16,
    },
    interestTag: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: '#ffffff',
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    interestText: {
        color: '#666',
        fontSize: 14,
    },
    interestTextSelected: {
        color: '#E91E63',
    },
    footer: {
        paddingVertical: 20,
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
});

export default InterestSelectionScreen;
