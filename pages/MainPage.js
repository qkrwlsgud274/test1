import React,{useState,useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import data from '../data.json';
import Loading from '../components/Loading';

export default function MainPage({navigation}) {

  const [state,setState] = useState([])
  const [cateState,setCateState] = useState([])
  const [ready,setReady] = useState(true)


	   

    setTimeout(()=>{
        navigation.setOptions({
            title:'voice Translator'
        })
  
        let tip = data.tip;
        setState(tip)
        setCateState(tip)
        setReady(false)
    },1000)


  return ready ? <Loading/> :  (
    
    <ScrollView style={styles.container}>
      <ImageBackground 
         style={styles.image}
    >
        <TouchableOpacity style={styles.aboutButton2} onPress={()=>{navigation.navigate('AboutPage2')}}>
          <Text style={styles.aboutButtonText2}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aboutButton3} onPress={()=>{navigation.navigate('AboutPage3')}}>
          <Text style={styles.aboutButtonText2}>Sign Up</Text>
        </TouchableOpacity>
    
        </ImageBackground>
    
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
},
image: {
    flex: 1,
    justifyContent: "center",
    paddingBottom:300
  },
  aboutButton2: {
    backgroundColor:"black",
    width:300,
    height:80,
    borderRadius:10,
    alignSelf:"flex-end",
    marginRight:50,
    marginTop:250
  },
  aboutButtonText2: {
    color:"#fff",
    textAlign:"center",
    marginTop:15,
    fontSize:35
  },
  aboutButton3: {
    backgroundColor:"black",
    width:300,
    height:80,
    borderRadius:10,
    alignSelf:"flex-end",
    marginRight:50,
    marginTop:10
  },
  aboutButtonText3: {
    color:"#fff",
    textAlign:"center",
    marginTop:15,
    fontSize:35
  }
  



});