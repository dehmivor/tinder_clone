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
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

const PinInputScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { phoneNumber, countryCode } = route.params;


    const [pin, setPin] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const maxLength = 6;
    const correctPin = '111111';

    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    const handleBackPress = () => {
        navigation.navigate('InputNum');
    };

    const handlePinChange = (value) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        if (numericValue.length <= maxLength) {
            setPin(numericValue);
            setErrorMessage('');
        }
    };

    const handleNextPress = () => {
        if (pin === correctPin) {
          if (route.params.isLoggingIn) {
            navigation.navigate('Home');
          } else {
            navigation.navigate('NameScreen');
          }
        } else {
          setErrorMessage('Mã PIN không chính xác. Vui lòng kiểm tra lại.');
        }
      };

    const isButtonDisabled = pin.length < maxLength;

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.content}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={0}
            >
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                        <Icon name="arrow-left" size={24} color="#666" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Nhập mã của bạn</Text>
                <Text style={styles.subtitle}>{`(${countryCode}) ${formattedPhoneNumber}`}</Text>

                <TextInput
                    style={styles.pinInput}
                    value={pin}
                    onChangeText={handlePinChange}
                    keyboardType="numeric"
                    maxLength={maxLength}
                    placeholder="Nhập mã PIN"
                />

                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={[styles.nextButton, isButtonDisabled && styles.nextButtonDisabled]}
                        onPress={isButtonDisabled ? null : handleNextPress}
                        disabled={isButtonDisabled}
                    >
                        <Text style={[styles.nextButtonText, isButtonDisabled && styles.nextButtonTextDisabled]}>
                            Tiếp theo
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const formatPhoneNumber = (number) => {
    const cleaned = ('' + number).replace(/[^0-9]/g, '');
    if (cleaned.length <= 3) {
        return cleaned;
    } else if (cleaned.length <= 6) {
        return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
    } else {
        return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 10)}`;
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        padding: 10,
    },
    backButton: {
        marginLeft: -10,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30,
        color: '#000',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 32,
    },
    pinInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        fontSize: 16,
        paddingVertical: 8,
        color: '#000',
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 16,
        textAlign: 'center',
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

export default PinInputScreen;