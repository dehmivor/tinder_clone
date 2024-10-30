import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WelcomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.closeButton}>
                        <Icon name="times" size={24} color="#666" />
                    </TouchableOpacity>
                </View>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Chào mừng bạn đến với Tinder.</Text>
                    <Text style={styles.subtitle}>Vui lòng tuân thủ các Quy tắc chung này.</Text>

                    <View style={styles.ruleSection}>
                        <Text style={styles.ruleTitle}>Hãy là chính bạn.</Text>
                        <Text style={styles.ruleText}>
                            Đảm bảo ảnh, độ tuổi và tiểu sử của bạn đều là thật.
                        </Text>
                    </View>

                    <View style={styles.ruleSection}>
                        <Text style={styles.ruleTitle}>Đảm bảo an toàn.</Text>
                        <Text style={styles.ruleText}>
                            Đừng vội vàng chia sẻ thông tin cá nhân.{' '}
                            <Text style={styles.link}>Hẹn hò an toàn</Text>
                        </Text>
                    </View>

                    <View style={styles.ruleSection}>
                        <Text style={styles.ruleTitle}>Cư xử chuẩn mực.</Text>
                        <Text style={styles.ruleText}>
                            Tôn trọng người khác và đối xử với họ như cách bạn muốn mọi người thể hiện với bạn.
                        </Text>
                    </View>

                    <View style={styles.ruleSection}>
                        <Text style={styles.ruleTitle}>Hãy chủ động.</Text>
                        <Text style={styles.ruleText}>
                            Luôn báo cáo hành vi xấu.
                        </Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.agreeButton}>
                    <Text style={styles.agreeButtonText}>Tôi đồng ý</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 5, // Đặt khoảng cách lề trái cho icon
        paddingTop: 20,
    },
    closeButton: {
        padding: 15,
    },
    logoContainer: {
        alignItems: 'flex-start', // Căn logo về bên trái
        paddingHorizontal: 5, // Đặt khoảng cách lề trái cho logo
    },
    logo: {
        width: 80,
        height: 50,
        marginBottom: 0,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 0,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    ruleSection: {
        marginBottom: 20,
    },
    ruleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    ruleText: {
        fontSize: 16,
        color: '#666',
        lineHeight: 22,
    },
    link: {
        color: '#0095F6',
        textDecorationLine: 'underline',
    },
    agreeButton: {
        backgroundColor: '#FF4458',
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 16,
        borderRadius: 30,
        alignItems: 'center',
    },
    agreeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
