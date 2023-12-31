import React, { useState,useEffect } from "react";
import { StyleSheet, View, FlatList, Text, Pressable,Button} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./screens/BlockRGB";
import DetailsScreen from "./screens/DetailsScreen";

function HomeScreen() {

  const [colorArray, setColorArray] = useState([
   
  ]);

  const renderFlatList = (numColumns) => (
    <FlatList
      data={colorArray}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
    />);
 
 // generate random RGB color
 const randomColor = () => {
  const randomValue = () => Math.floor(Math.random() * 255);
  return {
    red: randomValue(),
    green: randomValue(),
    blue: randomValue(),
    id: Date.now().toString(),
  };
};

const addRandomColor = () => {
  setColorArray([...colorArray, randomColor()]);
};

  function renderItem({ item }) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
  }

  function resetColors(){

    setColorArray([])
  }

  return (
    <View style={styles.container}>

    <View style={styles.buttonContainer}>
      
    <Pressable
          style={({ pressed }) => [
            styles.button1,
            pressed && styles.buttonPressed,
          ]}
          onPress={addRandomColor}
        >
           <Text style={styles.buttonText}>Add Random Color</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button2,
            pressed && styles.buttonPressed,
          ]}
          onPress={resetColors}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
    </View>

    <View style={styles.container}>

    {renderFlatList(5)}

</View>
  

  </View>
  );


}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex to arrange items vertically
  },
  buttonContainer: {
    padding: 10,
    width: "50%"

  },
  button: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",

  },
  button1: {
    backgroundColor: "#007AFF",
    color: "#000",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",

  },
  button2: {
    backgroundColor: "#FF3B30",
    color: "#000",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",

  },
  buttonPressed: {
    opacity: 0.7,
    color: "#000",

  },
  buttonText: {
    color: "#fff",
  },
});
