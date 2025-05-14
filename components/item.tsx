import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

export const Item = ({name, age, date, image} : {name: string, age: string, date: string, image: string}) => {
    return(
        <View>
            <Image style={styles.imageStyle} source={image}/>
            <Text style={styles.itemList}>{name}</Text>
            <Text style={styles.itemList}>{age}</Text>
            <Text style={styles.itemList}>{date}</Text>
        </View>
    )
}
const styles = StyleSheet.create ({
    itemList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'grey',
        margin: 10,
        height: 80,
        paddingHorizontal: 10
    },
    imageStyle: {
        width: 50,
        height: 50,
        zIndex: 999
    }
})