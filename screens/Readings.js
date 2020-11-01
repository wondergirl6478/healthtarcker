import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react-native';
import {Card,Icon,ListItem} from 'react-native-elements'
import MyHeader from '../components/MyHeader.js'
import firebase from 'firebase';
import db from '../config.js'

export default class ReadingsScreen extends Component {
  static navigationOptions = { header: null };

   constructor(){
     super()
     this.state = {
       userId : firebase.auth().currentUser.email,
       healthReadings : []
     }
     this.requestRef= null
   }


   getAllReadings =()=>{
     this.requestRef = db.collection("health_readings").where("user_id" ,'==', this.state.userId)
     .onSnapshot((snapshot)=>{
       var healthReadings = snapshot.docs.map(document => document.data());
       this.setState({
         healthReadings : healthReadings,
       });
     })
   }

   updateReadings=()=>{
    db.collection('health_readings').add({
        date_of          : this.state.dateOf,
        reading_of : this.state.readingOf
    })
  }
  
   keyExtractor = (item, index) => index.toString()

   renderItem = ( {item, i} ) =>(
     <ListItem
       key={i}
       title={item.date_of}
       subtitle={item.reading_of}
       //leftElement={<Icon name="book" type="font-awesome" color ='#696969'/>}
       titleStyle={{ color: 'black', fontWeight: 'bold' }}
       
       bottomDivider
     />
   )


   componentDidMount(){
     this.getAllReadings()
   }

   componentWillUnmount(){
     this.requestRef();
   }

   render(){
     return(
       <View style={{flex:1}}>
         <MyHeader navigation={this.props.navigation} title="Readings"/>
         <View style={{flex:1}}>
           {
             this.state.healthReadings.length === 0
             ?(
               <View style={styles.subtitle}>
                 <Text style={{ fontSize: 20}}>List of all Your Health Readings</Text>
               </View>
             )
             :(
               <FlatList
                 keyExtractor={this.keyExtractor}
                 data={this.state.healthReadings}
                 renderItem={this.renderItem}
               />
             )
           }
         </View>
       </View>
     )
   }
   }


const styles = StyleSheet.create({
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  },
  subtitle :{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  }
})
