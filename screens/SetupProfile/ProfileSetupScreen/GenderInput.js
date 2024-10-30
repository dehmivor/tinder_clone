import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GenderSelectionScreen = ({ navigation }) => {
  const totalSteps = 8;
  const currentStep = 3;
  const [selectedGender, setSelectedGender] = useState(null);
  const [showOnProfile, setShowOnProfile] = useState(false);

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

  const handleNext = () => {
    if (selectedGender) {
      // Navigate to OrientationSelectionScreen
      navigation.navigate('OrientationScreen');
    }
  };

  const GenderOption = ({ label, value }) => (
    <TouchableOpacity
      style={[styles.genderOption, selectedGender === value && styles.genderOptionSelected]}
      onPress={() => setSelectedGender(value)}
      activeOpacity={0.7}
    >
      <Text style={[styles.genderOptionText, selectedGender === value && styles.genderOptionTextSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderProgressBar()}

      <View style={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#666" />
        </TouchableOpacity>

        <Text style={styles.title}>Giới tính của bạn?</Text>

        <View style={styles.optionsContainer}>
          <GenderOption label="Nữ" value="female" />
          <GenderOption label="Nam" value="male" />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setShowOnProfile(!showOnProfile)}
            activeOpacity={0.7}
          >
            <View style={[styles.checkbox, showOnProfile && styles.checkboxChecked]}>
              {showOnProfile && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.checkboxLabel}>
              Hiển thị giới tính của tôi trên hồ sơ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.nextButton, !selectedGender && styles.nextButtonDisabled]}
            onPress={handleNext}
            disabled={!selectedGender}
          >
            <Text style={[styles.nextButtonText, !selectedGender && styles.nextButtonTextDisabled]}>
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
    height: 3,
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
  optionsContainer: {
    gap: 12,
  },
  genderOption: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 100,
    padding: 16,
    alignItems: 'center',
  },
  genderOptionSelected: {
    borderColor: '#E91E63',
    backgroundColor: '#FFF',
  },
  genderOptionText: {
    fontSize: 16,
    color: '#666',
  },
  genderOptionTextSelected: {
    color: '#E91E63',
  },
  footer: {
    marginTop: 'auto',
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

export default GenderSelectionScreen;
