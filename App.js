import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import TripItem from './components/TripItem';
import TripInput from './components/TripInput';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading'

import useFonts from './hooks/useFonts';

export default function App() {

  const [modalIsVisible, setVisibility] = useState(false);
  const [destList, createList] = useState([]);
  const [IsReady, SetIsReady] = useState(false);


  const LoadFonts = async () => {
    await useFonts();
  }

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  function startDestinationHandler() {
    setVisibility(true);
  }

  function endDestinationHandler() { 
    setVisibility(false);
  }

  function addDestinationHandler(dest) {
    createList((currentDests) => [
      ...currentDests,
      {text: dest, key: Math.random().toString()},
    ]);
  }

  function deleteTrip(key) {
    createList((currentDests) => {
      return currentDests.filter((dest) => dest.key !== key);
    });
  }

  //   const getToken = async () => {
  //   let response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body: JSON.stringify({
  //       'grant_type': 'client_credentials',
  //       'client_id': 'xEzaR1SiG7Nop42ONwgBOAokWNrw6Bei',
  //       'client_secret': 'BWpS454FTgo4TYRI',
  //     })
  //   });
  //   let json = await response.json();
  //   console.log(json);
  // };

  return (
    <>
      <StatusBar style='dark'/>
      <View style={styles.appContainer}>
        
        <View style={styles.upperThird}>
          <View style={{alignItems:'center', margin: 30}}>
            <Image style={styles.image} source={require('./assets/images/world.png')} />
            <Text style={styles.title}>TravelSmart</Text>
          </View>
        </View>

        <View style={styles.middleThird}>
          <Pressable onPress={startDestinationHandler}>
            <View style={styles.newTrip}>
                <Text style={styles.newTripText}>Add New Trip</Text>
            </View>
          </Pressable>
        </View>

        <TripInput visible={modalIsVisible} addDestinationHandler={addDestinationHandler} onCancel={endDestinationHandler}/>

        <View style={styles.bottomThird}>
          <View style>  
            <Text style={styles.currentTrips}>My Current Trips</Text>
          </View>
          <View style={{backgroundColor: 'black', height: 1, marginTop: 10, marginBottom: 10,}}></View>
          <FlatList
            data={destList}
            renderItem={(destData) => {
              return <TripItem text={destData.item.text} id={destData.item.key} onDeleteItem={deleteTrip}/>;
            }}
          />
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fff',
    alignItems: 'stretch', //Not needed, is the default
    justifyContent: 'center',
    padding: 50,
    flex: 1,
  },
  newTrip: {
    margin: 5,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#a8bb5c',
    alignItems: 'center',
  },
  newTripText: {
    fontSize: 20,
    padding: 10,
    fontFamily: 'Montserrat_Regular',
    color: '#37332c',
  },
  upperThird: {
    flex: 2,
  },
  middleThird: {
    flex: 1,
    marginTop: '20%',
    flexDirection: 'column', //Not needed, is the default. Main axis is from top to bottom by default, cross axis is stretch
  },
  bottomThird: {
    flex: 2,
  },
  title: {
    fontSize: 30,
    marginTop: 30,
    fontFamily: 'Montserrat_Bold',
    color: '#7ead1d',
  },
  image: {
    width: 100, 
    height: 100,
    marginTop: 70
  },
  currentTrips: {
    fontSize: 20,
    fontFamily: 'Montserrat_Regular',
    color: '#37332c',
  }
});
