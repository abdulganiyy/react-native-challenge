import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View, Platform } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = React.useState("Hello");
  const [errorMessage, setErrorMessage] = React.useState("");

  const getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      setErrorMessage("PERMISSION NOT GRANTED");
    }

    const location = await Location.getCurrentPositionAsync();
    console.log(location);
    setLocation(
      `latitude:${location.coords.latitude} longitude:${location.coords.longitude}`
    );
  };

  React.useEffect(() => {
    getLocation();
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/46.jpg" }}
            style={styles.headerImage}
          />
        </View>
        <View style={styles.userinfo}>
          <Text>{location}</Text>
          <Text style={{ fontWeight: "bold" }}>One Ahmad</Text>
        </View>
        <View style={styles.search}>
          <FontAwesome5 name="search" size={24} color="blue" />
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Text>Carousel</Text>
      </View>
      <View style={styles.serviceContainer}>
        <View style={styles.serviceHeader}>
          <Text style={styles.headerText}>Service</Text>
        </View>
        <View style={styles.services}>
          <View>
            <View style={styles.lightRed}>
              <Ionicons name="wallet" size={30} color="white" />
            </View>
            <View>
              <Text>Wallet</Text>
            </View>
          </View>
          <View>
            <View style={styles.lightBlue}>
              <Text>
                <FontAwesome5 name="hand-holding-usd" size={30} color="white" />{" "}
              </Text>
            </View>
            <View>
              <Text>Transfer</Text>
            </View>
          </View>
          <View>
            <View style={styles.lightYellow}>
              <Text>
                <Ionicons name="wallet" size={30} color="white" />
              </Text>
            </View>
            <View>
              <Text>Pay</Text>
            </View>
          </View>
          <View>
            <View style={styles.lightGreen}>
              <Text>
                <Ionicons name="wallet" size={30} color="white" />
              </Text>
            </View>
            <View style={styles.textAlignCenter}>
              <Text>TopUp</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.transactionContainer}>
        <View style={styles.transactionHeader}>
          <Text style={styles.headerText}>Recent Transaction</Text>
        </View>
        <View style={styles.transactions}>
          <View style={[styles.transaction, styles.boxShadow]}>
            <View>
              <View style={styles.lightRed}>
                <Text>
                  <Ionicons name="wallet" size={30} color="white" />
                </Text>
              </View>
            </View>
            <View style={styles.transactionText}>
              <View>
                <Text style={styles.textDarkGrey}>Dribble</Text>
              </View>
              <View>
                <Text style={styles.textLightGrey}>Payment Recieved</Text>
              </View>
            </View>
            <View style={styles.autoRight}>
              <Text style={styles.textRed}>$325</Text>
            </View>
          </View>
          <View style={[styles.transaction, styles.boxShadow]}>
            <View>
              <View style={styles.lightGreen}>
                <Text>
                  <Ionicons name="wallet" size={30} color="white" />
                </Text>
              </View>
            </View>
            <View style={styles.transactionText}>
              <View>
                <Text style={styles.textDarkGrey}>Google Wallet</Text>
              </View>
              <View>
                <Text style={styles.textLightGrey}>Payment Recieved</Text>
              </View>
            </View>
            <View style={styles.autoRight}>
              <Text style={styles.textGreen}>$325</Text>
            </View>
          </View>
          <View style={[styles.transaction, styles.boxShadow]}>
            <View>
              <View style={styles.lightBlue}>
                <Text>
                  <Ionicons name="wallet" size={30} color="white" />
                </Text>
              </View>
            </View>
            <View style={styles.transactionText}>
              <View>
                <Text style={styles.textDarkGrey}>Uplabs</Text>
              </View>
              <View>
                <Text style={styles.textLightGrey}>Payment Recieved</Text>
              </View>
            </View>
            <View style={styles.autoRight}>
              <Text style={styles.textBlue}>$123</Text>
            </View>
          </View>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20,
    // borderStyle: "solid",
    // borderColor: "blue",
    // borderWidth: 5,
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userinfo: {
    marginLeft: 15,
  },
  search: {
    marginLeft: "auto",
    backgroundColor: "white",
    padding: 5,
  },
  sliderContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#4965FB",
    height: 150,
    borderRadius: 5,
  },
  serviceContainer: {
    padding: 20,
  },
  serviceHeader: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  services: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  transactionContainer: {
    marginHorizontal: 20,
    backgroundColor: "#F9FBFC",
  },
  transactionHeader: {
    marginBottom: 10,
  },
  transaction: {
    backgroundColor: "#FFFFFF",
    height: 75,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  lightRed: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  lightBlue: {
    backgroundColor: "#629cff",
    padding: 10,
    borderRadius: 5,
  },
  lightYellow: {
    backgroundColor: "#fff752",
    padding: 10,
    borderRadius: 5,
  },
  lightGreen: {
    backgroundColor: "#85ff4b",
    padding: 10,
    borderRadius: 5,
  },
  autoRight: {
    marginLeft: "auto",
  },
  transactionText: {
    marginLeft: 10,
  },
  textRed: {
    color: "red",
    fontWeight: "bold",
  },
  textGreen: {
    color: "#85ff4b",
    fontWeight: "bold",
  },
  textBlue: {
    color: "#629cff",
    fontWeight: "bold",
  },
  textLightGrey: {
    color: "#ccc",
    fontWeight: "bold",
  },
  textDarkGrey: {
    color: "#777",
    fontWeight: "bold",
    fontSize: 15,
  },
});

const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid
) => {
  if (Platform.OS === "ios") {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === "android") {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

generateBoxShadowStyle(-2, 4, "#171717", 0.2, 3, 4, "#171717");
