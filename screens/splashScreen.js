import { StyleSheet, Image, View } from "react-native";
import hiteny from "../assets/hiteny.png";

export default function SplashScreen(){
    return(
        <View style={style.container}>
            <Image source={hiteny} style={style.image}/>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "beige"
    },
    image: {
        width: 435,
        height: 810,
        resizeMode: "contain",
    }
});