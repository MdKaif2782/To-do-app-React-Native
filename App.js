/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import type {Node} from 'react';
import {
  KeyboardAvoidingView, ScrollView,
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  View,
} from "react-native";

import * as keyboard from "react-native/Libraries/LogBox/Data/LogBoxData";
import platform from "react-native/Libraries/Utilities/Platform";
import Task from "./components/tasks/task";




const App: () => Node = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);



  const logthis=()=>{
    setTaskItems([...taskItems,task])
    console.log(task)
    setTask(null)
    keyboard.dismiss();
    console.log('your mom added a task to fuck me')
  }

  const deleteTask=(index)=>{
    let taskArrayNew = [...taskItems]
    taskArrayNew.splice(index,1)
    setTaskItems(taskArrayNew)
  }

  return (

    <View style={styles.container}>
      <View style = {styles.taskWrapper}>
        <Text style={styles.title}>TO-DO LIST</Text>
        <ScrollView style={styles.scrollView}>
        <View style={styles.task}>

          {taskItems.map((items, index) => {

            return (
              <TouchableOpacity key={index} onPress={()=>deleteTask(index)}>
                <Task text={items}/>
              </TouchableOpacity>
            )
          })}
          <View style={styles.blackItem}></View>


        </View>
        </ScrollView>

      </View>
      <KeyboardAvoidingView behavior={platform.OS==='ios' ? "padding" : "height"}
                            style = {styles.writeTaskWrapper}>
        <TextInput style = {styles.textInput}  placeholder={'write a task'} value ={task} onChangeText={text=>{setTask(text)}} />
        <TouchableOpacity onPress={()=>logthis() }>
          <View style={styles.addTextWrapper} >
            <Text style ={styles.addText}  >
              +
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(222,221,220,0.75)',
  },
  title:{
    fontSize: 29,
    fontWeight: "bold",
    fontStyle: "italic",
    color:'rgba(0,0,0,0.73)',
    borderColor: '#000000',
    borderStyle: "solid",
    marginBottom:10
  },
  taskWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  task : {
    marginTop:20
  },
  writeTaskWrapper:{
    position: "absolute",
    bottom:30,
    width: '98.4%',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal:10
  },
  textInput:{
    width:300,
    paddingHorizontal: 30,
    backgroundColor: '#ffffff',
    borderRadius:60,
    padding:15,

  },
  addTextWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent: "center",
    alignItems: "center",


  },
  addText:{
    fontSize: 24


  },
  scrollView:{
    paddingBottom:50
  },
  blackItem:{
    backgroundColor: 'rgba(222,221,220,0.75)',
    maxWidth:'100%',
    height:150
  }
});

export default App;
