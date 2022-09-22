import { SafeAreaView, Text, Alert } from 'react-native'
import React, { useState } from 'react'

import Button from '../components/Button'
import Input from '../components/Input'

function MemberSign({ navigation }) {

    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userMail, setUserMail] = useState('');

    function handleSubmit() {
        if (!userName || !userSurname || !userAge || !userMail) {
            Alert.alert('Fitness App', 'Bilgiler boş bırakılamaz');
            return;
        }
        const user = {
            userName,
            userSurname,
            userAge,
            userMail
        };
        navigation.navigate('MemberResultScreen', { user });
    }



    return (
        <SafeAreaView>
            <Input label="Üye Adınız" placeholder={"Üye isminiz"} onChangeText={setUserName} />
            <Input label="Üye Soyadınız" placeholder={"Üye soyisminiz"} onChangeText={setUserSurname} />
            <Input label="Üye Yaşınız" placeholder={"Üye Yaşınız"} onChangeText={setUserAge} />
            <Input label="Üye E-posta" placeholder={"Üye e-postanız"} onChangeText={setUserMail} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit}></Button>

        </SafeAreaView>
    )
}

export default MemberSign