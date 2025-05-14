import { StyleSheet, Text, View, Image, ImageSourcePropType } from "react-native";

export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <View style={styles.back}>
            <Text>header exemplo</Text>
            <Image source={image}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    back: {
        backgroundColor: '#090909',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})