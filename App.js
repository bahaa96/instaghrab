import React from 'react';
import { Router, Scene, Stack } from "react-native-router-flux"

import Camera from "./src/components/CameraScreen"
import Photo from "./src/components/Photo"

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="camera" component={Camera} title="Camera"/>
          <Scene key="photo" component={Photo} title="Photo"/>
        </Stack>
      </Router>
    )
  }
}

