import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { data } from './src/data/data';

const SCREEN_WIDTH = Dimensions.get('window').width - 30;

export default class App extends React.Component {
  state = {
    list: []
  };

  componentWillMount() {
    this.setState({ list: [...data] });
  }

  testResfresh() {
    this.setState({ list: [...data] });
  }

  renderCameras() {
    return this.state.list.map((camera, index) => {
      if (camera.properties.id === 160 || camera.properties.id === 161) {
        return (
          <View style={styles.camera} key={index}>
            {/* <Text style={styles.cameraTitle}>{camera.properties.description}</Text> */}
            <ImageBackground
              Id="image"
              style={styles.cameraImage}
              imageStyle={{ borderRadius: 10 }}
              //source={{ uri: camera.properties.image_url, cache: 'reload' }}
              source={{ uri: camera.properties.image_url + '?time' + (new Date()).getTime(), headers: { Pragma: 'no-cache' } }}
            />
          </View>
        );
      }
      return null;
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Text style={styles.appTitle}>My Drive Home.</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={this.testResfresh.bind(this)} activeOpacity={0.6}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Test Refresh</Text>
              </View>
            </TouchableOpacity>
          </View>
          {this.renderCameras()}
        </ScrollView>
      </View >
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 40,
    textAlign: 'center'
  },
  camera: {
    marginBottom: 20
  },
  cameraTitle: {
    mariginTop: 15,
    marginBottom: 10
  },
  cameraImage: {
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: '#eee',
    flex: 1,
    resizeMode: 'contain',
    elevation: 3,
    borderRadius: 10
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
