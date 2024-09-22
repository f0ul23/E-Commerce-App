import React, { useState } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartReducer";

const Products = ({ item }) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };

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
        onPress={() => addItemToCart(item)}
        style={{
          backgroundColor: "#ffc72c",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          width: 120,
          marginHorizontal: 10,
        }}
      >
        {addedToCart ? (
          <View>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Added to Cart
            </Text>
          </View>
        ) : (
          <Text style={{ textAlign: "center", fontSize: 18 }}>Add to Cart</Text>
        )}
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
