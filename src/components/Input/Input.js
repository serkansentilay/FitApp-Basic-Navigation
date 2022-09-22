import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style';



function Input({ label, placeholder, onChangeText }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
                <TextInput placeholderTextColor="#000" placeholder={placeholder} onChangeText={onChangeText} />
            </View>
        </View>
    )
}

export default Input