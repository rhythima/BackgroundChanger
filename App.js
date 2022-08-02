import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [randomColor,setRandomColor]=useState('rgb(255,192,203)')

  const changeBg=()=>{
    let color=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    setRandomColor(color)
  }

  const restart=()=>{
    let color='rgb(0,0,0)'
    setRandomColor(color)
  }

  return (
    <View style={[styles.container,{backgroundColor:randomColor}]}>
      <TouchableOpacity onPress={()=>changeBg()}>
        <Text style={styles.text}>Tap Me</Text>
      </TouchableOpacity>
      <View style={{marginTop:"10%"}}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={()=>restart()}>
        <Text style={[styles.text,{backgroundColor:'blue'}]}>Restart</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    backgroundColor:'purple',
    color: 'white',
    paddingHorizontal:10,
    paddingVertical:10,
    textTransform:'uppercase',
    fontSize:30,
    borderRadius:50
  }
});
