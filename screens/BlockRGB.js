import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BlockRGB(props) {
  const navigation = useNavigation();

  const showDetails = () => {
    navigation.navigate("Details", {
      red: props.red,
      green: props.green,
      blue: props.blue,
    });
  };

  return (
    <Pressable
      style={{
        backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
        padding: 30,
        width: "100%",
      }}
      onPress={showDetails}
    >
    </Pressable>
  );
}
