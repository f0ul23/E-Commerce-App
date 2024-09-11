import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import StackNavigator from "../navigation/StackNavigator";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();


  useEffect(() => {
    const checkLoginStatus = async()=>{
      try{
        const token = await AsyncStorage.getItem('authtoken');
        if(token){
          navigation.navigate('Main');
        }
      }catch(err){
        console.log(err)
      }
    }
    checkLoginStatus();
  }, []);

  const handleLogin = ()=>{
    const user = {
      email: email,
      password: password
    }

    axios
    .post("http://192.168.29.226:8000/login", user)
    .then((response) => {
      console.log(response)
      const token = response.data.token;
      AsyncStorage.setItem("authToken", token)
      navigation.navigate("Main")
    }).catch((err)=>{
      Alert.alert("Error", "Invalid email or password")
      console.log(err)
    })
  }

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: "https://www.deangraziosi.com/wp-content/uploads/2021/07/Amazon-Logo.png",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View>
          <Text style={styles.hdl}>Login In to your Account</Text>

          <View style={styles.txtinpt}>
            <MaterialIcons
              name="email"
              style={{ marginLeft: 8 }}
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your Email"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
            />
          </View>
          <View style={styles.txtinpt2}>
            <AntDesign
              name="lock"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="enter your Password"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
            />
          </View>
        </View>
        <View style={styles.ftl}>
          <Text>Keep me logged In</Text>
          <Text style={{ color: "#007fff", fontWeight: 500 }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 90 }} />
        <Pressable style={styles.btn}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 18,
              fontWeight: 500,
            }}
            onPress={handleLogin}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Don't have an Account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  img: {
    width: 160,
    height: 80,
    top: 80,
  },
  hdl: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 112,
    color: "#041E42",
    textAlign: "center",
  },
  txtinpt: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#d0d0d0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 100,
  },
  txtinpt2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#d0d0d0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 32,
  },
  ftl: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    justifyContent: "space-between",
  },
  btn: {
    width: 200,
    backgroundColor: "#febe10",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 6,
    padding: 15,
  },
});

export default Login;
