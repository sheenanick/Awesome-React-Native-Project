import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class Greeting extends Component {
  render() {
    const name = this.props.name;
    if (this.props.language === true) {
      return <Text>Hello {name}!</Text>;
    }
    return <Text>Konichiwa {name}!</Text>;
  }
}

function Subtitle(props) {
  const isEnglish = props.language;
  if (isEnglish) {
    return <Text>This is an AWESOME APP!</Text>;
  }
  return <Text>Kono apuri wa SUBARASHII!</Text>;
}

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {isEnglish: true}

    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  toggleLanguage() {
    this.setState(prevState => (
      {isEnglish: !prevState.isEnglish}
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          <Greeting name='Sheena' language={this.state.isEnglish}/>
          {'\n'}
          <Subtitle language={this.state.isEnglish}/>
        </Text>
        <Button title={this.state.isEnglish ? 'Japanese' : 'English'} onPress={this.toggleLanguage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
