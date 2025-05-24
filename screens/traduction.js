import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import dictionnary from "./locales/dico";

const traduction = () => {
    const [input, setInput] = useState('');
    const [translate, setTranslate] = useState('');

    const handleTranslate = () => {
        const resultat = dictionnary[input.trim().toLowerCase()];
        setTranslate(resultat ? resultat : "Traduction introuvable");
    };
    return (
        <View style={style.contenair}>
            <TextInput 
            placeholder="Entrer le mot en francais" 
            onChangeText={setInput} 
            value={input}
            style={style.input}/>
            <Button title="traduire" onPress={handleTranslate} style={{marginBottom:50}}/>
            {translate !== '' && (<Text style={style.texttraduit}>Traduction: {translate}</Text>)}
        </View>
    );
}

const style= StyleSheet.create({
    contenair: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderWidth: 2,
        marginBottom: 50,
        width: 300,
        height: 100,
        textAlign: "center"
    },
    texttraduit: {
        marginTop: 50
    }
}
)

export default traduction