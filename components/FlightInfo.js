import { StyleSheet, View, Text, Pressable } from 'react-native';

function FlightInfo(props) {

    function addNewFlight() {
        props.addFlight();
    }

    return (
        <Pressable onPress={addNewFlight}>
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <Text style={{fontFamily: 'Montserrat_Regular'}}>{props.time}</Text>
                    <Text style={{marginTop: 10, fontFamily: 'Montserrat_Regular'}}>SFO - LAS</Text>
                    <Text style={{marginTop: 10, fontFamily: 'Montserrat_Regular'}}>{props.airlines}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Montserrat_Regular'}}>{props.timeTaken}</Text>
                    <Text style={{marginTop: 10, fontFamily: 'Montserrat_Regular'}}>{props.transitTime}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Montserrat_Regular'}}>{props.price}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default FlightInfo;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row', 
        marginTop: 20, 
        backgroundColor: '#a8bb5c', 
        padding: 10, 
        borderRadius: 10,
    }

});