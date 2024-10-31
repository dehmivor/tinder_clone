import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LocationPermission = () => {
  const navigation = useNavigation();

  const handlePermission = () => {
    navigation.navigate('Home'); // Điều hướng đến trang Home
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header Text */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            Bạn có sống ở khu vực này không?
          </Text>
          <Text style={styles.description}>
            Mở cài đặt địa điểm để xem có những ai ở quanh khu vực của bạn. Bạn sẽ không thể tương hợp nếu không chia sẻ thông tin này.
          </Text>
        </View>

        {/* Location Icon Circle */}
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <Icon name="map-marker" size={24} color="#D1D5DB" />
          </View>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          {/* Permission Button */}
          <TouchableOpacity style={styles.button} onPress={handlePermission}>
            <Text style={styles.buttonText}>
              Cho phép
            </Text>
          </TouchableOpacity>

          {/* Info Section */}
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoText}>
              Thông tin địa điểm của tôi sẽ được sử dụng thế nào?
            </Text>
            <Icon name="chevron-down" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 32,
    paddingTop: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#111827',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    paddingBottom: 32,
  },
  button: {
    backgroundColor: '#FF4A6B',
    paddingVertical: 14,
    borderRadius: 100,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  infoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  infoText: {
    fontSize: 15,
    color: '#111827',
  },
});

export default LocationPermission;
