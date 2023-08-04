import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { useFonts } from 'expo-font';

function TripItem(props) {
    const [loaded] = useFonts({
        Montserrat_Regular: require('../assets/fonts/Montserrat-Regular.ttf'),
        Montserrat_Bold: require('../assets/fonts/Montserrat-Bold.ttf'),
    })

    return (
            <View style={styles.TripContainer}>
                <View style={{flex: 3, justifyContent: 'center', paddingLeft: 5}}>
                    <Text style={styles.TripText}>{props.text}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.PressedItem}>
                        <Image source={require('../assets/images/bin.png')} />
                    </Pressable>
                </View>
            </View>
    );
}

export default TripItem;

const styles = StyleSheet.create({

    TripContainer: {
        margin: 5,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#37332c',
        flexDirection: 'row',
    },
    TripText: {
        color: 'white',
        fontFamily: 'Montserrat_Regular'
    },
    PressedItem: {
        opacity: 0.5,
    },

});