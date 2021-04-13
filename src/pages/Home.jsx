import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import cardFrente from "../../assets/images/CardFrente.png";
import card from "../../assets/images/CardVerso.png";

export default function Home() {
  const navigator = useNavigation();

  const cards = [
    {
      id: 1,
      name: "Afrodite",
      image: cardFrente,
      description: true,
    },
    {
      id: 2,
      name: "",
      image: card,
    },
    {
      id: 3,
      name: "",
      image: card,
    },
    {
      id: 4,
      name: "",
      image: card,
    },
    {
      id: 5,
      name: "",
      image: card,
    },
    {
      id: 6,
      name: "",
      image: card,
    },
    {
      id: 7,
      name: "",
      image: card,
    },
    {
      id: 8,
      name: "",
      image: card,
    },
    {
      id: 9,
      name: "",
      image: card,
    },
    {
      id: 10,
      name: "",
      image: card,
    },
    {
      id: 11,
      name: "",
      image: card,
    },
    {
      id: 12,
      name: "",
      image: card,
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={cards}
          keyExtractor={(item) => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() =>
                    item.description ? navigator.navigate("Description") : null
                  }
                >
                  <Image style={styles.image} source={item.image} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#303030",
  },
  image: {
    width: 125,
    height: 215,
    // maxWidth: Dimensions.get("window").height * 0.185,
    // height: Dimensions.get("window").height * 0.315,
  },
  item: {
    alignItems: "center",
    flexBasis: 0,
    flexGrow: 1,
    padding: 5,
  },
});
