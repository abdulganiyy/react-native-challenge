import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import * as Location from "expo-location";

const WIDTH = Dimensions.get("window").width;

export default function Profile({ navigation }) {
  const [activeSlide, setactiveSlide] = React.useState(0);
  const [location, setLocation] = React.useState("Hello");
  const [errorMessage, setErrorMessage] = React.useState("");

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      let slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != activeSlide) {
        setactiveSlide(slide);
      }
    }
  };

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMessage("PERMISSION NOT GRANTED");
    }

    await Location.watchPositionAsync(
      { enableHighAccuracy: true },
      (location) => {
        setLocation(`${location.coords.longitude}`);
      }
    );
  };
  React.useEffect(() => {
    getLocation();
  });

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      // Prevent default behavior
      e.preventDefault();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/45.jpg" }}
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
        <ScrollView
          style={{ height: 160 }}
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          horizontal
        >
          <View style={[styles.atm, { backgroundColor: "#ffea14" }]}>
            <View
              style={[
                styles.flexRow,
                { justifyContent: "space-between", marginBottom: 10 },
              ]}
            >
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 15 },
                  ]}
                >
                  Current Balance
                </Text>
              </View>
              <View
                style={{
                  position: "relative",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    backgroundColor: "yellow",
                    borderRadius: 50,
                    right: 10,
                    top: -10,
                  }}
                ></View>
                <View
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                    right: 20,
                    top: -10,
                    zIndex: -1,
                  }}
                ></View>
              </View>
            </View>
            <View style={[styles.flexRow, { marginBottom: 10 }]}>
              <View
                style={{
                  padding: 5,
                  backgroundColor: "#629cff",
                  marginRight: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={[styles.textWhite, { fontWeight: "bold" }]}>
                  USD
                </Text>
              </View>
              <View>
                <Text style={[styles.textWhite, { fontSize: 20 }]}>248.75</Text>
              </View>
            </View>
            <View
              style={[
                styles.flexRow,
                { justifyContent: "space-between", paddingRight: 100 },
              ]}
            >
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  ****
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  ****
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  ****
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  1234
                </Text>
              </View>
            </View>
            <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
              <View>
                <Text style={[styles.textWhite, { fontSize: 17 }]}>
                  One Achmad
                </Text>
              </View>
              <View>
                <View>
                  <Text style={styles.textWhite}>Exp Date</Text>
                </View>
                <View style={{ paddingLeft: 8 }}>
                  <Text style={styles.textWhite}>10/28</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.atm}>
            <View
              style={[
                styles.flexRow,
                { justifyContent: "space-between", marginBottom: 10 },
              ]}
            >
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 15 },
                  ]}
                >
                  Current Balance
                </Text>
              </View>
              <View
                style={{
                  position: "relative",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    backgroundColor: "yellow",
                    borderRadius: 50,
                    right: 10,
                    top: -10,
                  }}
                ></View>
                <View
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                    right: 20,
                    top: -10,
                    zIndex: -1,
                  }}
                ></View>
              </View>
            </View>
            <View style={[styles.flexRow, { marginBottom: 10 }]}>
              <View
                style={{
                  padding: 5,
                  backgroundColor: "#629cff",
                  marginRight: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={[styles.textWhite, { fontWeight: "bold" }]}>
                  USD
                </Text>
              </View>
              <View>
                <Text style={[styles.textWhite, { fontSize: 20 }]}>248.75</Text>
              </View>
            </View>
            <View
              style={[
                styles.flexRow,
                { justifyContent: "space-between", paddingRight: 100 },
              ]}
            >
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  ****
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  ****
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  ****
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  1234
                </Text>
              </View>
            </View>
            <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
              <View>
                <Text style={[styles.textWhite, { fontSize: 17 }]}>
                  One Achmad
                </Text>
              </View>
              <View>
                <View>
                  <Text style={styles.textWhite}>Exp Date</Text>
                </View>
                <View style={{ paddingLeft: 8 }}>
                  <Text style={styles.textWhite}>10/28</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.atm, { backgroundColor: "#267cde" }]}>
            <View
              style={[
                styles.flexRow,
                { justifyContent: "space-between", marginBottom: 10 },
              ]}
            >
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 15 },
                  ]}
                >
                  Current Balance
                </Text>
              </View>
              <View
                style={{
                  position: "relative",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    backgroundColor: "yellow",
                    borderRadius: 50,
                    right: 10,
                    top: -10,
                  }}
                ></View>
                <View
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    borderRadius: 50,
                    right: 20,
                    top: -10,
                    zIndex: -1,
                  }}
                ></View>
              </View>
            </View>
            <View style={[styles.flexRow, { marginBottom: 10 }]}>
              <View
                style={{
                  padding: 5,
                  backgroundColor: "#629cff",
                  marginRight: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={[styles.textWhite, { fontWeight: "bold" }]}>
                  USD
                </Text>
              </View>
              <View>
                <Text style={[styles.textWhite, { fontSize: 20 }]}>248.75</Text>
              </View>
            </View>
            <View
              style={[
                styles.flexRow,
                { justifyContent: "space-between", paddingRight: 100 },
              ]}
            >
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  ****
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  ****
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  ****
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.textWhite,
                    { fontWeight: "bold", fontSize: 25 },
                  ]}
                >
                  1234
                </Text>
              </View>
            </View>
            <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
              <View>
                <Text style={[styles.textWhite, { fontSize: 17 }]}>
                  One Achmad
                </Text>
              </View>
              <View>
                <View>
                  <Text style={styles.textWhite}>Exp Date</Text>
                </View>
                <View style={{ paddingLeft: 8 }}>
                  <Text style={styles.textWhite}>10/28</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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
    width: WIDTH,
    // marginTop: 20,
    // marginHorizontal: 10,
    // backgroundColor: "#4965FB",
    // height: 150,
    // borderRadius: 5,
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
  atm: {
    backgroundColor: "blue",
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  textWhite: {
    color: "white",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
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
