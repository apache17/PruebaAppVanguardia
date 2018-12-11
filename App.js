import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', list:[]};
  }

  click = (e) => {
    let temp = [];
    for (let index = 0; index < this.state.list.length; index += 1) 
    {
      temp.push(this.state.list[index]);
    }
    temp.push(this.state.text);
    this.setState({list: temp});
    this.setState({text: ''});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <TextInput
            autoCorrect={false}
            clearButtonMode="always"
            placeholder="Write a Todo"
            style={styles.textInput}
            onChangeText={(e) => this.setState({text: e})}
            value={this.state.text}
          />
          <Button
            style={styles.button}
            onPress={this.click}
            title="+"
            color="#1C2833"
          />
        </View>
        {this.state.list.map(text=> (<Text style={styles.text}>{text}</Text>))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    alignItems: 'center',

  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  textInput: {
    backgroundColor: '#EBEDEF',
    color: '#212F3D',
    height: 40,
    width: 300,

    paddingHorizontal: 10,
    alignSelf: 'center'
  },
  button:{
    height: 40,
    width: 30,
  },
  text:{
    color: '#212F3D',
  }
});
