import {React, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  ImageBackground,
  Dimensions,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DropDownPicker from "react-native-dropdown-picker";


const ProductInfo = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(1);


  const [item, setItem] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
  ])

  return (
    <ScrollView style={styles.container}>
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

      <View style={{ marginTop: 20, marginHorizontal: 12 }}>
        <Text style={{ color: "gray", fontSize: 15, textAlign: "left" }}>
          {route.params?.title}
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{ width, height, marginTop: 25, resizeMode: "contain" }}
            source={{ uri: item }}
            key={index}
          >
            <View
              style={{
                padding: 20,
                // flexDirection: "row",
                alignItems: "flex-start",
                // justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#c60c30",
                  justifyContent: "center",
                  alignItems: "center",
                  //   flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  20% off
                </Text>
              </View>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View
        style={{
          padding: 20,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          //   marginTop: 270,
          marginBottom: 0,
          gap: 10,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <AntDesign name="hearto" size={26} color="black" />
        </View>

        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <EvilIcons name="share-google" size={36} color="black" />
        </View>
      </View>
      <Text
        style={{
          height: 1,
          borderColor: "#d0d0d0",
          borderWidth: 2,
          marginTop: 0,
        }}
      />
      <View
        style={{
          marginTop: 0,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          width: 150,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "300" }}>Colour: </Text>
        <Text style={{ fontSize: 17, fontWeight: "600" }}>
          {route.params?.color}
        </Text>
      </View>
      <View
        style={{
          marginTop: 0,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "300" }}>Size: </Text>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          {route.params?.size}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text style={{ color: "black", fontSize: 35, fontWeight: "100" }}>
          {route.params?.offer}
        </Text>
        <Text style={{ fontSize: 17, textAlign: "center" }}>₹ </Text>
        <Text style={{ color: "black", fontSize: 35, fontWeight: "100" }}>
          {route.params?.price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          margin: 0,
        }}
      >
        <Text style={{ color: "gray", fontSize: 17 }}>M.R.P: ₹</Text>
        <Text
          style={{
            color: "gray",
            fontSize: 17,
            textDecorationLine: "line-through",
          }}
        >
          {route.params?.oldPrice}
        </Text>
      </View>

      <Text
        style={{
          height: 1,
          borderColor: "#d0d0d0",
          borderWidth: 0.6,
          marginTop: 0,
        }}
      />
      <View
        style={{ marginTop: 10, padding: 15, flexDirection: "row", gap: 10, alignItems: "center" }}
      >
        <Feather
          name="percent"
          size={18}
          color="#ff8c00"
          style={{
            borderWidth: 1,
            padding: 3,
            alignSelf: "center",
            justifyContent: "center",
            borderRadius: 20
          }}
        />
        <Text style={{ fontSize: 18, textAlign: "center", marginLeft: 10 }}>
          All offers & discount
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" style={{marginLeft: 150}}/>
      </View>

      <Text
        style={{
          height: 1,
          borderColor: "#d0d0d0",
          borderWidth: 1.5,
          marginTop: 0,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 12,
          marginTop: 10,
          width: 300,
        }}
      >
        <Text
          style={{
            color: "#00CED1",
            fontSize: 16,
            // padding: 0,
            fontWeight: "bold",
            justifyContent: "space-around",
            // marginLeft:12,
            // flex:1,
            marginTop: 5,
          }}
        >
          FREE Delivery
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            padding: 0,
            fontWeight: "bold",
            justifyContent: "center",
            marginLeft: 5,
            // flex: 1,
            marginTop: 5,
          }}
        >
          by Tomorow 3PM. Order within
        </Text>
      </View>
      <Text
        style={{
          color: "black",
          fontSize: 16,
          padding: 0,
          fontWeight: "200",
          justifyContent: "center",
          marginLeft: 15,
          // flex: 1,
          marginTop: 5,
        }}
      >
        10hrs 15mins. Details
      </Text>

      <View
        style={{
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 10,
          marginHorizontal: 12,
        }}
      >
        <SimpleLineIcons name="location-pin" size={24} color="black" />
        <Text
          style={{
            color: "#00CEf8",
            textAlign: "center",
            padding: 5,
            fontSize: 15,
          }}
        >
          Deliver to Sumera
        </Text>
      </View>
      <Text
        style={{
          color: "green",
          fontSize: 22,
          marginTop: 10,
          marginHorizontal: 12,
        }}
      >
        In stock
      </Text>
      <View style={{ marginHorizontal: 12, flexDirection: "row" }}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            backgroundColor: "#7cfc00",
            width: 160,
          }}
        >
          Upto ₹60 cashback
        </Text>
        <Text style={{ marginTop: 10, fontSize: 18 }}>
          {" "}
          ₹20 per unit on buying 2+
        </Text>
      </View>

      <View
            style={{
              marginHorizontal: 10,
              marginTop: 20,
              width: "25%",
              marginBottom: open ? 50 : 15,
            }}
          >
            <DropDownPicker
              style={{
                borderColor: "#B7B7B7",
                height: 30,
                backgroundColor: "#f5f5f5",
                marginBottom: open ? 120 : 15,
              }}
              open={open}
              value={category} //genderValue
              items={item}
              setOpen={setOpen}
              setValue={setCategory}
              setItems={setItem}
              placeholder="Qty: 1"
              placeholderStyle={styles.placeholderStyles}
              // onOpen={onGenderOpen}
              // onChangeValue={onChange}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>

      <View style={{ alignItems: "center", gap: 18, marginTop: 20 }}>
        <Pressable
          style={{
            backgroundColor: "#ffd700",
            width: 370,
            height: 60,
            borderRadius: 35,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20 }}>Add to Cart</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#ff8c00",
            width: 370,
            height: 60,
            borderRadius: 35,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20 }}>Buy Now</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 45,
  },
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

export default ProductInfo;
