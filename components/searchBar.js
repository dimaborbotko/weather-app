import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput, 
  ScrollView,
} from "react-native";
import { Entypo, EvilIcons, AntDesign } from "@expo/vector-icons";

const API_KEY = "526d4889d65b48cabba160455213011";

export default function SearchBar({ weatherData, getWeather }) {
  const [modaLActive, setModalActive] = useState(false);
  const [cityName, setCityName] = useState("");

  const [locationData, setLocationData] = useState([]);

  async function locationDataSearch() {
    const API = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${cityName}`;
    try {
      const response = await fetch(API);
      if (response.status === 200) {
        const data = await response.json();
        setLocationData(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    locationDataSearch();
  }, [cityName]);

  const showResults = () => {
    if (locationData.length !== 0) {
      return locationData.map((el) => {
        return (
          <TouchableOpacity activeOpacity={0.7} onPress={() => [setModalActive(false), getWeather(cityName)]}>
             <Text style={styles.itemDrop}>{el.name}</Text>
          </TouchableOpacity>
       
        );
      });
    }
  };
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modaLActive}
        onRequestClose={() => setModalActive(false)}
      >
        <View style={styles.boxModal}>
          <View style={styles.modalSerach}>
            <View style={styles.searchAlign}>
              <View style={styles.inputArea}>
                <TextInput
                  value={cityName}
                  onChangeText={(text) => setCityName(text)}
                  style={styles.input}
                  placeholder="City"
                />
                <EvilIcons
                  onPress={() => [setModalActive(false), getWeather(cityName)]}
                  style={styles.search}
                  name="search"
                  size={24}
                  color="black"
                />
              </View>
              <AntDesign
                name="close"
                size={24}
                color="black"
                onPress={() => setModalActive(false)}
              />
            </View>
          </View>

          <View style={styles.dropList}>
            <ScrollView>{showResults()}</ScrollView>
          </View>
        </View>
      </Modal>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.locationSerach}
          activeOpacity={0.7}
          onPress={() => setModalActive(true)}
        >
          <Text style={styles.navText}>{weatherData.location.name}</Text>
          <EvilIcons
            style={styles.search}
            name="search"
            size={24}
            color="white"
          />
        </TouchableOpacity>

        <Entypo name="dots-three-vertical" size={17} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 35,
    marginRight: 30,
    alignItems: "center",
  },
  locationSerach: {
    flexDirection: "row",
  },
  navText: {
    color: "white",
    fontFamily: "pnsb",
    fontSize: 16,
  },
  search: {
    marginRight: 5,
  },
  boxModal: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  modalSerach: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",

    paddingTop: 30,
  },
  searchAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputArea: {
    marginTop: 10,
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "white",
    opacity: 0.9,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
    marginRight: 10,
  },
  input: {
    fontSize: 15,
    width: 100,
    color: "black",
    fontFamily: "pnsb",
    paddingVertical: 10,
    paddingLeft: 10,
  },
  dropList: {
    flex: 2,
    marginHorizontal: 10,
    alignItems: "center",
  },
  itemDrop: {
    color: "black",
    fontFamily: "pnsb",
    fontSize: 16,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.7)",
    marginVertical: 10,
    borderRadius: 10,
  },
});
