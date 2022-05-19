import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {TouchableOpacity} from "react-native";

const Task =(props)=>{
    return(
    <View style={styles.item}>
        <View style = {styles.itemLeft}>
            <TouchableOpacity style={styles.square} ></TouchableOpacity>
            <Text style = {styles.itemText}>{props.text}</Text>
        </View>
        <View style = {styles.circular}></View>


    </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#ffffff",
        borderRadius: 15,
        padding:15,
        marginBottom:20,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    itemLeft:{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
    },
    itemText:{
        maxWidth:'80%',
        marginStart:10
    },
    circular:{
        height:10,
        width:10,
        backgroundColor:'#eeafaf',
        borderRadius:60,
        alignItems: "flex-end",
        alignContent:"center"
    },
    square:{
        height:24,
        width:24,
        backgroundColor:'#7F96FFA0',
        borderRadius:5,
    },
})

export default Task;
