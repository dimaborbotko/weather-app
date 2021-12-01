import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { Entypo, EvilIcons, AntDesign } from "@expo/vector-icons";

export default function SearchBar({ weatherData, getWeather }) {
  const [modaLActive, setModalActive] = useState(false);
  const [cityName, setCityName] = useState("");

  return (
    <KeyboardAvoidingView enabled={true} keyboardVerticalOffset={0}>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modaLActive}
          onRequestClose={() => setModalActive(false)}
        >
          <View style={styles.modalSerach}>
            <AntDesign name="close" size={24} color="black" onPress={() => setModalActive(false)}/>
            <View style={styles.inputArea}>
              <TextInput
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
    marginHorizontal: 10,
  },

  modalSerach: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
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
  },
  input: {
    fontSize: 15,
    color: "black",
    fontFamily: "pnsb",
    paddingVertical: 10,
    paddingLeft: 10,
    width: "30%",
  },
});
