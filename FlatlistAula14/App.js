/*import { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render(){
  return (
    <View style={styles.container}>

  <ScrollView>
      <View style = {styles.box1}></View>
      <View style = {styles.box2}></View>
      <View style = {styles.box3}></View>
      <View style = {styles.box4}></View>
  </ScrollView>
    </View>
   
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  box1: {
    backgroundColor:'red',
    height:250,
    width:150,
    flex:1
  },
  box2: {
    backgroundColor:'green',
    height:250,
    width:150,
    flex:2
  },
  box3: {
    backgroundColor:'yellow',
    height:250,
    width:150,
    flex:3
  },
  box4: {
    backgroundColor:'blue',
    height:250,
    width:150,
    flex:4
  }
});

export default App; */
import { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:'1', nome:'John', idade:32, email:'John@gmail.com'},
        {id:'2', nome:'Joao', idade:14, email:'joao@gmail.com'},
        {id:'3', nome:'Joaquim', idade:28, email:'joaquim@gmail.com'},
        {id:'4', nome:'Paulo', idade:18, email:'paulo@gmail.com'},
        {id:'5', nome:'Matheus', idade:37, email:'Matheus@gmail.com'},
        {id:'6', nome:'Marcos', idade:40, email:'Marcos@gmail.com'},
        {id:'7', nome:'Luiz', idade:33, email:'Luiz@gmail.com'},
        {id:'8', nome:'Gustavo', idade:25, email:'Gustavo@gmail.com'},
        {id:'9', nome:'Yan', idade:18, email:'Yan@gmail.com'},
        {id:'10', nome:'Victor', idade:37, email:'Victor@gmail.com'},
      ]
    }
  }
  render(){
  return (
    <View style={styles.container}>
      <FlatList
      data={this.state.feed}
      keyExtractor={(item)=> item.id}
      renderItem={({item})=> <Pessoas data={item}></Pessoas>}
      >
      </FlatList>     
    </View>
   
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'   
  },

});

export default App;