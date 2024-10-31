import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FirstPage = ({ navigation }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleBackPress = () => {
    setIsLoggingIn(false);
  };


  const handleCreateAccountPress = () => {
    navigation.navigate('InputNum', { isLoggingIn: false });
  };
  
  const handleLoginPress = () => {
    setIsLoggingIn(true);
  };
  
  const handleLoginWithPhonePress = () => {
    navigation.navigate('InputNum', { isLoggingIn: true });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          {isLoggingIn && (
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={handleBackPress}
            >
              <Icon name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          )}
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Logo Section - Fixed position */}
          <View style={styles.logoSection}>
            <Image
              source={require('../../assets/Wordmark-R-white-RGB-new.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Bottom Content */}
          <View style={styles.bottomContent}>
            <View style={styles.termsContainer}>
              <Text style={styles.termsText}>
                Khi nhấn 'Tạo tài khoản' hoặc 'Đăng nhập',{'\n'}
                bạn đồng ý với các <Text style={styles.linkText}>Điều khoản</Text> của chúng tôi.{'\n'}
                Tìm hiểu về cách chúng tôi xử lý dữ liệu của{'\n'}
                bạn trong <Text style={styles.linkText}>Chính sách Quyền riêng tư</Text> và{'\n'}
                <Text style={styles.linkText}>Chính sách Cookie</Text>.
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              {!isLoggingIn ? (
                <>
                  <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleCreateAccountPress}
                  >
                    <Text style={styles.buttonText}>Tạo tài khoản</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleLoginPress}
                  >
                    <Text style={styles.buttonText}>Đăng Nhập</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Đăng nhập với Facebook</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleLoginWithPhonePress}
                  >
                    <Text style={styles.buttonText}>Đăng nhập với số điện thoại</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>

            <TouchableOpacity style={styles.troubleLogin}>
              <Text style={styles.troubleLoginText}>
                Bạn gặp sự cố khi đăng nhập?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4458',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoSection: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  logo: {
    width: 300,
    height: 120,
  },
  bottomContent: {
    justifyContent: 'flex-end',
  },
  termsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  termsText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    padding: 20,
    gap: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  troubleLogin: {
    alignItems: 'center',
    padding: 20,
  },
  troubleLoginText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default FirstPage;