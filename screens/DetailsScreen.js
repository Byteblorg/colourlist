import React from "react";
import { View, Text, Pressable } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { red, green, blue } = route.params;

 const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

 const textColor = brightness > 128 ? "black" : "white";

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
   
        <Text style={{ color: textColor,fontSize: 20, padding: 10 }}>Red: {red}</Text>
<Text style={{ color: textColor,fontSize: 20, padding: 10 }}>Green: {green}</Text>
<Text style={{ color: textColor,fontSize: 20, padding: 10 }}>Blue: {blue}</Text>

   
      </View>
    </View>
  );
}
