//edited
import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class Enter extends Component{
    constructor(){
      super();
      this.state ={
        userId : firebase.auth().currentUser.email,
        dateOf : "",
        mealType : "",
        beforeOrAfter : "",
        readingOf : ""
      }
    }
  
    createUniqueId(){
      return Math.random().toString(36).substring(7);
    }
  
  
    
    addReading =(dateOf, mealType, beforeOrAfter, readingOf)=>{
      var userId = this.state.userId
      var randomRequestId = this.createUniqueId()
      db.collection('glucose_readings').add({
          "user_id": userId,
          "date_of": dateOf,
          "meal_type": mealType,
          "before_or_after"  : beforeOrAfter,
          "reading_of" : readingOf
      })
  
      this.setState({
        dateOf : "",
        mealType : "",
        beforeOrAfter : "",
        readingOf : ""
      })
  
      return Alert.alert("Data Entered Successfully")
    }
 
  
    render(){
      return(
          <View style={{flex:1}}>
            <MyHeader title="Enter" navigation ={this.props.navigation}/>
              <KeyboardAvoidingView style={styles.keyBoardStyle}>
                <TextInput
                  style ={styles.formTextInput}
                  placeholder={"dd/mm/yyyy"}
                  onChangeText={(text)=>{
                      this.setState({
                          dateOf :text
                      })
                  }}
                  value={this.state.dateOf}
                />
                <TextInput
                  style ={styles.formTextInput}
                  placeholder={"breakfast/lunch/dinner"}
                  onChangeText ={(text)=>{
                      this.setState({
                          mealType :text
                      })
                  }}
                  value ={this.state.mealType}
                />
                <TextInput
                  style ={styles.formTextInput}
                  placeholder={"Before or After Meal"}
                  onChangeText ={(text)=>{
                      this.setState({
                          beforeOrAfter :text
                      })
                  }}
                  value ={this.state.beforeOrAfter}
                />
                <TextInput
                  style ={styles.formTextInput}
                  placeholder={"Glucometer Reading"}
                  onChangeText ={(text)=>{
                      this.setState({
                          readingOf :text
                      })
                  }}
                  value ={this.state.readingOf}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>{this.addReading(this.state.dateOf,this.state.mealType, this.state.beforeOrAfter, this.state.readingOf)}}
                  >
                  <Text>Save</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
          </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
  