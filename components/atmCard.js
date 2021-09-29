import React from "react";
import { View } from "react-native";

const atmCard = () => {
  return (
    <View style={styles.atm}>
      <View
        style={[
          styles.flexRow,
          { justifyContent: "space-between", marginBottom: 10 },
        ]}
      >
        <View>
          <Text
            style={[styles.textWhite, { fontWeight: "bold", fontSize: 15 }]}
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
          <Text style={[styles.textWhite, { fontWeight: "bold" }]}>USD</Text>
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
            style={[styles.textWhite, { fontWeight: "bold", fontSize: 25 }]}
          >
            ****
          </Text>
        </View>
        <View>
          <Text
            style={[styles.textWhite, { fontWeight: "bold", fontSize: 25 }]}
          >
            ****
          </Text>
        </View>
        <View>
          <Text
            style={[styles.textWhite, { fontWeight: "bold", fontSize: 25 }]}
          >
            ****
          </Text>
        </View>
        <View>
          <Text
            style={[styles.textWhite, { fontWeight: "bold", fontSize: 25 }]}
          >
            1234
          </Text>
        </View>
      </View>
      <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
        <View>
          <Text style={[styles.textWhite, { fontSize: 17 }]}>One Achmad</Text>
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
  );
};

export default atmCard;
