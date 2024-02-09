import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Pressable } from 'react-native';

const logoImageUrl = 'https://www.chadwellsupply.com/globalassets/skin/logo-cws.png?width=183';

export default function Login() {
    const handleButtonPress = () => {
        alert("Button pressed!");
    };

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={{ uri: logoImageUrl }} style={styles.image} />

            {/* Title */}
            <Text style={styles.title}>CRM Sales Dashboard</Text>

            {/* Input Form */}
            <View style={styles.form}>
                <TextInput style={styles.TextInput} placeholder='Username' />
                <TextInput secureTextEntry={true} style={styles.TextInput} placeholder='Password' />

                {/* Buttons */}
                <Pressable style={styles.button} onPress={handleButtonPress} id='login'>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
                <Pressable style={styles.signbutton} onPress={handleButtonPress}>
                    <Text style={styles.signbuttonText}> No Account? Sign up here</Text>
                </Pressable>
            </View>
        </View>
    );
}

// Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginTop: 300,
        marginBottom: 1,
    },
    title: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        marginTop: 25,
        width: '80%',
        height: '100%'
    },
    TextInput: {
        height: 50,
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 10,
        margin: 15,
        padding: 10,
    },
    button: {
        backgroundColor: '#1d8ac6',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 110,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    signbutton: {
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    signbuttonText: {
        color: '#000000',
        fontSize: 16,
    },
});
