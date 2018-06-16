import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Camera, Permissions } from 'expo';
import { Actions } from "react-native-router-flux"

const {height, width} = Dimensions.get("window")

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    photo: {}
  };
  handleFlip = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({
        quality: 1,
      })
      Actions.photo({photo})
    }
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => {this.camera = ref;}} ratio={"16:9"}>
            <View style={styles.fab}>
              <TouchableOpacity style={styles.flip} onPress={this.handleFlip}>
                <Ionicons name="ios-reverse-camera-outline" size={40} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.capture} onPress={this.snap}>
                <View style={{height: 90, width: 90, borderRadius: 50, backgroundColor: "#dcdcdc", opacity: 0.75}} />
              </TouchableOpacity>
              {/*<TouchableOpacity style={styles.filtersButton} onPress={this.snap}>*/}
                {/*<Text>Gallery</Text>*/}
              {/*</TouchableOpacity>*/}

            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  fab: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: width * 0.35,
    flexDirection: "row",
    zIndex: 100
  },
  button: {
    borderRadius: 50,
    backgroundColor: "cyan",
    padding: 16
  },
  flip: {
    position: "absolute",
    left: 25,
    bottom: 25,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#fff",
    borderRightColor: "#fff",
    borderLeftColor: "#fff",
    borderTopColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  capture: {
    position: "absolute",
    left: width * 0.35,
    bottom: 25,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#fff",
    borderRightColor: "#fff",
    borderLeftColor: "#fff",
    borderTopColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  filtersButton: {
    position: "absolute",
    right: 15,
    bottom: 25,
    width: 50,
    height: 50,
  }
});
