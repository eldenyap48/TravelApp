import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import FlightInfo from './FlightInfo';


function TripInput(props) {
    const [enteredText, setEnteredText] = useState('');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [flightVisibility, setFlightVisibility] = useState(false);

    function destinationInputHandler(text) {
        setEnteredText(text);
    }

    function addDestinationHandler() {
        props.addDestinationHandler(enteredText);
        setEnteredText('');
        setTimeout(() => {
            setFlightVisibility(true);
        }, 1200);
    }

    function addFlight() {
        setFlightVisibility(false);
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <View style={{marginBottom: 40}}>
                    <Text style={{fontFamily: 'Montserrat_Bold', fontSize: 30, color:'#37332c'}}>Create New Trip</Text>
                </View>
                <View style={{backgroundColor: 'black', height: 5, marginTop: 10, marginBottom: 10,}}></View>
                <View style={styles.date}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, fontFamily: 'Montserrat_Regular', color: '#59a725'}}>From:</Text>
                    </View>
                    <DateTimePicker style={{flex: 1}} value={fromDate} mode='date' is24Hour={true} />
                </View>
                <View style={styles.date}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, fontFamily: 'Montserrat_Regular', color: '#59a725'}}>To:</Text>
                    </View>
                    <DateTimePicker value={toDate} mode='date' is24Hour={true} />
                </View>
                <TextInput style={styles.textInput} placeholder = 'Where would you like to travel to?' onChangeText={destinationInputHandler} value={enteredText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Plan this trip!' color='#59a725' onPress={addDestinationHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' color='#59a725' onPress={props.onCancel} fontFamily='Montserrat_Regular'/> 
                    </View> 
                </View>
            </View>
            <Modal visible={flightVisibility}>
                <View style={styles.flightModal}>
                    <View>
                        <Text style={{fontSize: 30, fontFamily: 'Montserrat_Bold'}}>Flight Schedules</Text>
                    </View>
                    <View style={{backgroundColor: 'black', height: 1, marginTop: 10, marginBottom: 10,}}></View>
                    <FlightInfo addFlight={addFlight} time={'8:51PM - 8:65AM'} airlines={'frontier'} timeTaken={'12h 6m (1 stop)'} transitTime={'7h 25m in Denver(DEN)'} price={'$140'}/>
                    <FlightInfo addFlight={addFlight} time={'8:27PM - 10.07PM'} airlines={'frontier'} timeTaken={'1h 40m (nonstop)'} transitTime={''} price={'$154'}/>
                    <FlightInfo addFlight={addFlight} time={'9:45PM - 9:00AM'} airlines={'alaska'} timeTaken={'11h 15m (1 stop)'} transitTime={'6h 31m in Seattle(SEA)'} price={'$168'}/>
                </View>
            </Modal>
        </Modal>
    );
};

export default TripInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '8%',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 16,
        fontSize: 15,
        borderRadius: 6,
        marginTop: 20,
        fontFamily: 'Montserrat_Regular',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        margin: 10,
    },
    date: {
        marginBottom: 20,
        flexDirection: 'row',
    },
    flightModal: {
        marginTop: 100,
        marginHorizontal: 30,
    }
});