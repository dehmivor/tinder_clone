import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const StatisticModal = ({ visible, onClose, selectedCard }) => {
  if (!selectedCard) return null; // Ensure selectedCard is not null

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={styles.modalContent}>
          <ImageBackground
            source={{ uri: selectedCard.imageUrl }}
            style={styles.modalImage}
            imageStyle={styles.cardImage}
          >
            <Text style={styles.modalName}>{selectedCard.name}</Text>
            <Text style={styles.modalAge}>{selectedCard.age} tuổi</Text>
          </ImageBackground>
          <Text style={styles.modalSectionTitle}>Đang tìm kiếm gì:</Text>
          <Text style={styles.modalText}>{selectedCard.intro}</Text>
          <Text style={styles.modalSectionTitle}>Thông tin chính:</Text>
          <Text style={styles.modalText}>{selectedCard.mainInfo}</Text>
          <Text style={styles.modalSectionTitle}>Sở thích:</Text>
          <Text style={styles.modalText}>{selectedCard.hobbies}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Đã chặn!")}
            >
              <Text style={styles.buttonText}>Chặn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Đã báo cáo!")}
            >
              <Text style={styles.buttonText}>Báo cáo</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)", // Dark background for modal
    padding: 20,
  },
  modalContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  modalImage: {
    width: "100%",
    height: 250,
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  modalName: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalAge: {
    fontSize: 18,
    color: "yellow",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalSectionTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },
  modalText: {
    fontSize: 16,
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default StatisticModal;
