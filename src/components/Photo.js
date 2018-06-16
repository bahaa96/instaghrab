import React from "react"
import { View, ScrollView, TouchableOpacity, Text, Dimensions } from "react-native"
import FilterTest from "./FilterTest";

const { height } = Dimensions.get("window")

const filterButton = {
  width: 100,
  height: 100
}

const filters = ["Normal", "F1977","Amaro","Brannan","Earlybird","Hefe","Hudson","Inkwell","Lokofi","LordKelvin","Nashville", "Rise","Sierra","Sutro","Toaster","Valencia","Walden","XproII"]

export default class Photo extends React.Component {
  state = {
    currentFilter: "Normal",
    photo: ""
  }
  setCurrentFilter = (filter) => {
    this.setState({
      currentFilter: filter
    })
  }
  render() {
    const Filter = ({ filter }) => (
      <TouchableOpacity style={styles.filterButton} onPress={() => this.setCurrentFilter(filter)}>
        <FilterTest filter={filter} photo={{uri: this.props.photo.uri}} {...filterButton}/>
        <Text style={styles.filterText}>{ filter }</Text>
      </TouchableOpacity>
    )
    return (
      <View style={styles.container}>
        <FilterTest filter={this.state.currentFilter} photo={this.props.photo}/>

        <ScrollView style={styles.overlay} contentContainerStyle={styles.filtersContent} showsHorizontalScrollIndicator alwaysBounceHorizontal horizontal >
          {
            filters.map((filter, i) => (
              <Filter filter={filter} key={i}/>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "crimson"
  },
  image: {
    width: null,
    flex: 1
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 150,
  },
  filtersContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  filterButton: {
    width: filterButton.width,
    height: filterButton.height,
    overflow: "hidden",
    marginHorizontal: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#fff",
    borderRightColor: "#fff",
    borderLeftColor: "#fff",
    borderTopColor: "#fff",
  },
  filterText: {
    color: "white",
    fontWeight: "bold",
    zIndex: 5,
    position: "absolute",
    bottom: 5,
    textAlign: "center",
    width: filterButton.width
  }
}


