import React from "react"
import { Dimensions, Image } from "react-native"
import { Surface} from "gl-react-expo";

import {
  Sierra,
  Hudson,
  Valencia,
  F1977,
  Amaro,
  Brannan,
  Earlybird,
  Hefe,
  Inkwell,
  Lokofi,
  LordKelvin,
  Nashville,
  Normal,
  Rise,
  Sutro,
  Toaster,
  Walden,
  XproII
} from "../filters"

import Saturate from "./Saturate"

const filter = {
  contrast: 1,
  saturation: 1,
  brightness: 1
}


export default class FilterTest extends React.Component {
  render() {
    const {height, width} = this.props.width ? this.props : Dimensions.get("window")
    switch(this.props.filter) {
      case "Hudson":
        return (
          <Surface style={{ width, height }}>
            <Hudson>
              {{uri: this.props.photo.uri}}
            </Hudson>
          </Surface>
        )
      case "F1977":
        return (
          <Surface style={{ height, width }}>
            <F1977>
              {{uri: this.props.photo.uri}}
            </F1977>
          </Surface>
        )
      case "Amaro":
        return (
          <Surface style={{ height, width }}>
            <Amaro>
              {{uri: this.props.photo.uri}}
            </Amaro>
          </Surface>
        )
      case "Brannan":
        return (
          <Surface style={{ height, width }}>
            <Brannan>
              {{uri: this.props.photo.uri}}
            </Brannan>
          </Surface>
        )
      case "Earlybird":
        return (
          <Surface style={{ height, width }}>
            <Earlybird>
              {{uri: this.props.photo.uri}}
            </Earlybird>
          </Surface>
        )
      case "Hefe":
        return (
          <Surface style={{ height, width }}>
            <Hefe>
              {{uri: this.props.photo.uri}}
            </Hefe>
          </Surface>
        )
      case "Inkwell":
        return (
          <Surface style={{ height, width }}>
            <Inkwell>
              {{uri: this.props.photo.uri}}
            </Inkwell>
          </Surface>
        )
      case "Lokofi":
        return (
          <Surface style={{ height, width }}>
            <Lokofi>
              {{uri: this.props.photo.uri}}
            </Lokofi>
          </Surface>
        )
      case "LordKelvin":
        return (
          <Surface style={{ height, width }}>
            <LordKelvin>
              {{uri: this.props.photo.uri}}
            </LordKelvin>
          </Surface>
        )
      case "Nashville":
        return (
          <Surface style={{ height, width }}>
            <Nashville>
              {{uri: this.props.photo.uri}}
            </Nashville>
          </Surface>
        )
      case "Rise":
        return (
          <Surface style={{ height, width }}>
            <Rise>
              {{uri: this.props.photo.uri}}
            </Rise>
          </Surface>
        )
      case "Sutro":
        return (
          <Surface style={{ height, width }}>
            <Sutro>
              {{uri: this.props.photo.uri}}
            </Sutro>
          </Surface>
        )
      case "Toaster":
        return (
          <Surface style={{ height, width }}>
            <Toaster>
              {{uri: this.props.photo.uri}}
            </Toaster>
          </Surface>
        )
      case "Walden":
        return (
          <Surface style={{ height, width }}>
            <Walden>
              {{uri: this.props.photo.uri}}
            </Walden>
          </Surface>
        )
      case "XproII":
        return (
          <Surface style={{ height, width }}>
            <XproII>
              {{uri: this.props.photo.uri}}
            </XproII>
          </Surface>
        )
      case "Valencia":
        return (
          <Surface style={{ height, width }}>
            <Valencia>
              {{uri: this.props.photo.uri}}
            </Valencia>
          </Surface>
        )
      case "Sierra":
        return (
          <Surface style={{ height, width }}>
            <Sierra>
              {{uri: this.props.photo.uri}}
            </Sierra>
          </Surface>
        )
      case "Normal":
        return (
          <Surface style={{ height, width }}>
            <Normal>
              {{uri: this.props.photo.uri}}
            </Normal>
          </Surface>
        )
      default:
        return (
          <Surface style={{ height, width }}>
            <Normal>
              {{uri: this.props.photo.uri}}
            </Normal>
          </Surface>
        )
    }
  }
}