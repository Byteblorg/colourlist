import React from "react";
import { View, Text, Pressable } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { red, green, blue } = route.params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          padding: 30,
          width: "80%",
        }}
      >
        {/* <Text style={{ color: "white", fontSize: 18 }}>
          RGB: ({red}, {green}, {blue})
        </Text> */}
        <Text style={{ color: "white",fontSize: 20, padding: 10 }}>Red: {red}</Text>
<Text style={{ color: "white",fontSize: 20, padding: 10 }}>Green: {green}</Text>
<Text style={{ color: "white",fontSize: 20, padding: 10 }}>Blue: {blue}</Text>

   
      </View>
    </View>
  );
}
