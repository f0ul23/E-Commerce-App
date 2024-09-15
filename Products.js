import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

const Products = ({ item }) => {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />

      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.rating}>{item.rating.rate}</Text>
      </View>

      <Pressable
        style={{
          backgroundColor: "#ffc72c",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        <Text>Add to Cart</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 25,
  },
  title: {
    fontSize: 15,
    width: 150,
    marginTop: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 15,
    fontWeight: "500",
    color: "#ffc72c",
  },
});

export default Products;
