import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OrientationSelectionScreen = ({ navigation }) => {
  const totalSteps = 8;
  const currentStep = 4;
  const [selectedOrientations, setSelectedOrientations] = useState([]);
  const [showOnProfile, setShowOnProfile] = useState(false);

  const orientationOptions = [
    { label: 'Dị tính', value: 'straight' },
    { label: 'Đồng tính', value: 'gay' },
    { label: 'Đồng tính nữ', value: 'lesbian' },
    { label: 'Song tính', value: 'bisexual' },
    { label: 'Vô tính', value: 'asexual' },
    { label: 'Á tính', value: 'aromantic' },
    { label: 'Toàn tính', value: 'pansexual' },
    { label: 'Queer', value: 'queer' },
    { label: 'Chưa xác định rõ khuynh hướng', value: 'questioning' },
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

  const handleNext = () => {
    if (selectedOrientations.length > 0) {
      navigation.navigate('ShowMeScreen');
    }
  };

  const handleSkip = () => {
    navigation.navigate('ShowMeScreen');
  };

  const toggleOrientation = (value) => {
    if (selectedOrientations.includes(value)) {
      setSelectedOrientations(selectedOrientations.filter(item => item !== value));
    } else if (selectedOrientations.length < 3) {
      setSelectedOrientations([...selectedOrientations, value]);
    }
  };

  const OrientationOption = ({ label, value }) => (
    <TouchableOpacity
      style={[
        styles.orientationOption,
        selectedOrientations.includes(value) && styles.orientationOptionSelected,
      ]}
      onPress={() => toggleOrientation(value)}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.orientationOptionText,
          selectedOrientations.includes(value) && styles.orientationOptionTextSelected,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

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
            onPress={handleSkip}
          >
            <Text style={styles.skipText}>Bỏ qua</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Khuynh hướng tính dục của bạn?</Text>
        <Text style={styles.subtitle}>Chọn tối đa 3</Text>

        <ScrollView style={styles.optionsContainer}>
          {orientationOptions.map((option) => (
            <OrientationOption
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setShowOnProfile(!showOnProfile)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.checkbox, showOnProfile && styles.checkboxChecked]}
            >
              {showOnProfile && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.checkboxLabel}>
              Hiển thị khuynh hướng của tôi trên hồ sơ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButton,
              !selectedOrientations.length && styles.nextButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={!selectedOrientations.length}
          >
            <Text
              style={[
                styles.nextButtonText,
                !selectedOrientations.length && styles.nextButtonTextDisabled,
              ]}
            >
              Tiếp theo
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
    marginRight: -10,
  },
  skipText: {
    color: '#E91E63',
    fontSize: 16,
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
  optionsContainer: {
    flex: 1,
  },
  orientationOption: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 100,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  orientationOptionSelected: {
    borderColor: '#E91E63',
    backgroundColor: '#FFF',
  },
  orientationOptionText: {
    fontSize: 16,
    color: '#666',
  },
  orientationOptionTextSelected: {
    color: '#E91E63',
  },
  footer: {
    paddingBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#E91E63',
    borderColor: '#E91E63',
  },
  checkmark: {
    color: '#FFF',
    fontSize: 14,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#666',
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

export default OrientationSelectionScreen;
