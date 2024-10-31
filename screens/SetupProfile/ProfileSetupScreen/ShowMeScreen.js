import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShowMeScreen = ({ navigation }) => {
  const totalSteps = 8;
  const currentStep = 5;
  const [selectedPreference, setSelectedPreference] = useState(null);

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
    if (selectedPreference) {
      navigation.navigate('InterestSelectionScreen');
    }
  };

  const PreferenceOption = ({ label, value }) => (
    <TouchableOpacity
      style={[
        styles.preferenceOption,
        selectedPreference === value && styles.preferenceOptionSelected,
      ]}
      onPress={() => setSelectedPreference(value)}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.preferenceOptionText,
          selectedPreference === value && styles.preferenceOptionTextSelected,
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
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#666" />
        </TouchableOpacity>

        <Text style={styles.title}>Bạn muốn thấy ai?</Text>

        <View style={styles.optionsContainer}>
          <PreferenceOption label="Nữ" value="women" />
          <PreferenceOption label="Nam" value="men" />
          <PreferenceOption label="Mọi người" value="everyone" />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={[
              styles.nextButton,
              !selectedPreference && styles.nextButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={!selectedPreference}
          >
            <Text
              style={[
                styles.nextButtonText,
                !selectedPreference && styles.nextButtonTextDisabled,
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
  preferenceOption: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 100,
    padding: 16,
    alignItems: 'center',
  },
  preferenceOptionSelected: {
    borderColor: '#E91E63',
    backgroundColor: '#FFF',
  },
  preferenceOptionText: {
    fontSize: 16,
    color: '#666',
  },
  preferenceOptionTextSelected: {
    color: '#E91E63',
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: 20,
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

export default ShowMeScreen;