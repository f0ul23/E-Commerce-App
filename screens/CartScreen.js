import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { decreamentQuantity, increamentQuantity, removeFromCart } from "../redux/CartReducer";
import { useNavigation } from "@react-navigation/native";


const CartScreen = () => {
 const navigation = useNavigation()

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

const dispatch = useDispatch()
const increaseQuantity = (item)=>{
    dispatch(increamentQuantity(item))
}

const decreaseQuantity = (item)=>{
    dispatch(decreamentQuantity(item))
}

const discardItem = (item)=>{
    dispatch(removeFromCart(item))
}

  const total = cart
    ?.map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(total);
  return (
    <ScrollView style={{ marginTop: 35, flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          backgroundColor: "#00CED1",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable style={styles.srchbar}>
          <AntDesign name="search1" size={22} color="black" />
          <TextInput placeholder="Search Amazon.in" />
        </Pressable>
        <Feather name="mic" size={24} color="black" />
      </View>
      <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "400" }}>SubTotal: </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>₹{total}</Text>
      </View>
      <Text style={{ marginHorizontal: 10 }}>EMI details Available</Text>

      <Pressable
      onPress={()=>navigation.navigate("confirm")}
        style={{
          backgroundColor: "#ffc72c",
          padding: 15,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Text>Proceed to Buy ({cart.length} items)</Text>
      </Pressable>
      <Text
        style={{
          height: 1,
          borderColor: "#d0d0d0",
          borderWidth: 2,
          marginTop: 16,
        }}
      />

      <View style={{ marginHorizontal: 10 }}>
        {cart?.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "white",
              marginVertical: 10,
              borderBottomColor: "#F0F0F0",
              borderWidth: 2,
              borderLeftWidth: 0,
              borderTopWidth: 0,
              borderRightWidth: 0,
            }}
          >
            <Pressable
              style={{
                marginVertical: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{ width: 140, height: 140, resizeMode: "contain" }}
                source={{ uri: item?.image }}
              />
              <View>
                <Text numberOfLines={3} style={{ width: 150, marginTop: 10 }}>
                  {item.title}
                </Text>
                <Image
                  style={{ width: 30, height: 30, resizeMode: "contain" }}
                  source={{
                    uri: "https://assets.stickpng.com/thumbs/5f4924cc68ecc70004ae7065.png",
                  }}
                />
                <Text style={{ color: "green" }}>In Stock</Text>
                {/* <Text style={{ fontWeight: "500", marginTop: 6 }}>
                  {item?.rating?.rate} ratings
                </Text> */}
                <Text
                  style={{ fontSize: 20, fontWeight: "bolds", marginTop: 4 }}
                >
                  ₹{item.price}
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={{
                marginTop: 15,
                marginBottom: 20,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 15
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 7,
                }}
              >{
                item?.quantity<=1?
                <Pressable
                onPress={()=>discardItem(item)}
                  style={{
                    backgroundColor: "#d8d8d8",
                    padding: 7,
                    borderTopLeftRadius: 6,
                    borderBottomLefttRadius: 6,
                  }}
                >
                  <AntDesign name="delete" size={24} color="black" />
                </Pressable>
                :
                <Pressable
                onPress={()=>decreaseQuantity(item)}
                  style={{
                    backgroundColor: "#d8d8d8",
                    padding: 7,
                    borderTopLeftRadius: 6,
                    borderBottomLefttRadius: 6,
                  }}
                >
                  <Feather name="minus" size={24} color="black" />
                </Pressable>

              }

                <Pressable
                  style={{
                    backgroundColor: "white",
                    paddingHorizontal: 18,
                    paddingVertical: 6,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {item.quantity}
                  </Text>
                </Pressable>

                <Pressable
                onPress={()=>increaseQuantity(item)}
                  style={{
                    backgroundColor: "#d8d8d8",
                    padding: 7,
                    borderTopLeftRadius: 6,
                    borderBottomLefttRadius: 6,
                  }}
                >
                  <Feather name="plus" size={24} color="black" />
                </Pressable>
              </View>
              <Pressable
              onPress={()=>discardItem(item)}
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 8,
                  paddingVertical: 10,
                  borderRadius: 5,
                  borderColor: "#C0C0C0",
                  borderWidth: 0.6,
                }}
              >
                <Text>Delete</Text>
              </Pressable>
            </Pressable>

            <Pressable style={{flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 15}}>
              <Pressable
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 8,
                  paddingVertical: 10,
                  borderRadius: 5,
                  borderColor: "#C0C0C0",
                  borderWidth: 0.6,
                }}
              >
                <Text>Save for later</Text>
              </Pressable>

              <Pressable
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 8,
                  paddingVertical: 10,
                  borderRadius: 5,
                  borderColor: "#C0C0C0",
                  borderWidth: 0.6,
                }}
              >
                <Text>See more Like this</Text>
              </Pressable>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  srchbar: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
    // borderWidth: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 5,
    height: 38,
    padding: 5,
    gap: 10,
  },
});

export default CartScreen;
