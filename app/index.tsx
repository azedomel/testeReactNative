import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const onPress = () => {
        router.push("/(tabs)")
    }

    return(
        <SafeAreaView>
            <Text style={styles.text}>Login</Text>
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Digite seu e-mail: " keyboardType="email-address"/>
            <Text style={styles.text}>Senha</Text>
            <TextInput style={styles.input} onChangeText={setSenha} value={senha} placeholder="Digite sua senha: " keyboardType="default"/>

            <View>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
                <View>
                    <Link href={"/#"} >cadastrar novo usuário</Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        backgroundColor: 'black',
        textAlign: 'center',
        
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: 'grey',
        color: 'white'
    },
    btn: {
        backgroundColor: 'pink'
    }
})