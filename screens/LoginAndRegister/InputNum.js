import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ChevronDown } from 'react-native-feather';
import Icon from 'react-native-vector-icons/FontAwesome';

const countryCodes = [
  { label: 'VN +84', value: '+84' },
  { label: 'US +1', value: '+1' },
  { label: 'UK +44', value: '+44' },
  // Add more country codes as needed
];

const InputNum = ({ navigation, route }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].value);
  const [showDropdown, setShowDropdown] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isLoggingIn = route?.params?.isLoggingIn ?? false;

  const handleBackPress = () => {
    navigation.navigate("FirstPage");
  };

  const handleCountryCodeSelect = (code) => {
    setSelectedCode(code);
    setShowDropdown(false);
  };

  const handleSubmit = () => {
    if (phoneNumber.trim().length < 8 || phoneNumber.length > 10) {
      setErrorMessage('Số điện thoại phải có từ 8 đến 10 chữ số.');
      return;
    }
  
    setErrorMessage('');
    navigation.navigate('PinInput', {
      phoneNumber: phoneNumber,
      countryCode: selectedCode,
      isLoggingIn: isLoggingIn
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Icon name="arrow-left" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            Bạn có thể chia sẻ số điện thoại không?
          </Text>

          <View style={styles.inputRow}>
            <TouchableOpacity style={styles.countryCode} onPress={() => setShowDropdown(!showDropdown)}>
              <Text style={styles.codeText}>{countryCodes.find(code => code.value === selectedCode).label}</Text>
              <ChevronDown width={20} height={20} color="#666" />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              placeholder="Nhập số điện thoại"
              maxLength={10}
            />
          </View>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}

          {showDropdown && (
            <View style={styles.dropdown}>
              {countryCodes.map((code) => (
                <TouchableOpacity
                  key={code.value}
                  style={styles.dropdownItem}
                  onPress={() => handleCountryCodeSelect(code.value)}
                >
                  <Text style={styles.dropdownText}>{code.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <Text style={styles.description}>
            Chúng tôi sẽ nhắn tin cho bạn một mã xác thực để xác nhận. Bạn có thể phải trả phí tin nhắn và dữ liệu.
          </Text>

          <TouchableOpacity>
            <Text style={styles.link}>
              Sẽ thế nào nếu số điện thoại của bạn thay đổi?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: phoneNumber.length >= 8 && phoneNumber.length <= 10 ? '#E91E63' : '#f2f2f2' }]}
            onPress={handleSubmit}
            disabled={phoneNumber.length < 8 || phoneNumber.length > 10}
          >
            <Text style={[styles.buttonText, { color: phoneNumber.length >= 8 && phoneNumber.length <= 10 ? '#fff' : '#666' }]}>Tiếp theo</Text>
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
    padding: 20,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  codeText: {
    fontSize: 16,
    marginRight: 4,
    color: '#666',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 4,
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#666',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  link: {
    color: '#0066CC',
    fontSize: 14,
    marginBottom: 24,
  },
  buttonContainer: {
    padding: 16,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E91E63',
    borderRadius: 100,
    padding: 16,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
});

export default InputNum;