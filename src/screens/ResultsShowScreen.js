import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView  } from 'react-native';
import yelp from '../api/yelp';
import { set } from 'react-native-reanimated';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult ] = useState(null);
    const id = navigation.getParam('id');

    console.log(result)

    const getResult = async (id) => {
       const respponse = await yelp.get(`/${id}`) 
       setResult(response.data);
    };
       useEffect(() => {
        getResult(id);
    }, []); 

    return (
        <View>
            <Text>Results Show Screen</Text>
        </View>
    );   
}

const styles = StyleSheet.create({

});

export default ResultsShowScreen;

