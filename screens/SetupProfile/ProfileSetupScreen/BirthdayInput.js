import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BirthdayScreen = ({ navigation }) => {
    const totalSteps = 8;
    const currentStep = 2;

    const [birthday, setBirthday] = useState({
        day: '',
        month: '',
        year: '',
    });

    const monthInput = useRef(null);
    const yearInput = useRef(null);

    const formatInput = (text, maxLength) => {
        return text.replace(/[^0-9]/g, '').slice(0, maxLength);
    };

    const handleInputChange = (field, value) => {
        const formattedValue = formatInput(value, field === 'year' ? 4 : 2);
        setBirthday(prev => ({ ...prev, [field]: formattedValue }));

        if (field === 'day' && formattedValue.length === 2) {
            monthInput.current?.focus();
        } else if (field === 'month' && formattedValue.length === 2) {
            yearInput.current?.focus();
        }
    };

    const isValidDate = () => {
        const { day, month, year } = birthday;
        return day.length === 2 && month.length === 2 && year.length === 4;
    };

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
                keyboardVerticalOffset={20} // Điều chỉnh giá trị này để hạ thấp nút thêm
            >
                <View style={styles.content}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={24} color="#666" />
                    </TouchableOpacity>

                    <Text style={styles.title}>Ngày sinh của bạn?</Text>

                    <View style={styles.inputContainer}>
                        <View style={styles.dateInputGroup}>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    value={birthday.day}
                                    onChangeText={(text) => handleInputChange('day', text)}
                                    keyboardType="numeric"
                                    maxLength={2}
                                    placeholder="DD"
                                    placeholderTextColor="#999"
                                />
                            </View>
                            <Text style={styles.separator}>/</Text>

                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    value={birthday.month}
                                    onChangeText={(text) => handleInputChange('month', text)}
                                    keyboardType="numeric"
                                    maxLength={2}
                                    placeholder="MM"
                                    placeholderTextColor="#999"
                                    ref={monthInput}
                                />
                            </View>

                            <Text style={styles.separator}>/</Text>

                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={[styles.input, styles.yearInput]}
                                    value={birthday.year}
                                    onChangeText={(text) => handleInputChange('year', text)}
                                    keyboardType="numeric"
                                    maxLength={4}
                                    placeholder="YYYY"
                                    placeholderTextColor="#999"
                                    ref={yearInput}
                                />
                            </View>
                        </View>
                    </View>

                    <Text style={styles.hint}>
                        Hồ sơ của bạn hiển thị thông tin tuổi, không phải ngày sinh.
                    </Text>

                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={[styles.nextButton, !isValidDate() && styles.nextButtonDisabled]}
                            onPress={() => isValidDate() && navigation.navigate('GenderScreen')}
                            disabled={!isValidDate()}
                        >
                            <Text style={[styles.nextButtonText, !isValidDate() && styles.nextButtonTextDisabled]}>
                                Tiếp theo
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    dateInputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    inputWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        marginHorizontal: 4,
        flex: 1,
    },
    input: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 4,
        textAlign: 'center',
        color: '#000',
    },
    yearInput: {
        minWidth: 60,
    },
    separator: {
        fontSize: 16,
        color: '#999',
        marginHorizontal: 4,
    },
    hint: {
        marginTop: 8,
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
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

export default BirthdayScreen;
