import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

const CartIcon = ({ itemQuantity }: { itemQuantity: number }) => {
  const badgeSize = 18;
  return (
    <View
      style={{
        borderRadius: 50,
        padding: 5,
      }}
    >
      <MaterialIcons name="shopping-cart" color={"white"} size={24} />
      <View
        style={{
          position: "absolute",
          top: -5,
          right: 1,
          backgroundColor: "green",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          width: badgeSize,
          height: badgeSize,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontFamily: "PilcrowRoundedBold",
          }}
        >
          {itemQuantity}
        </Text>
      </View>
    </View>
  );
};
const HomeHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <Animated.View
      entering={FadeInUp.duration(300)}
      style={{
        backgroundColor: Colors.red,
        paddingTop: insets.top,
        flexDirection: "column",
        paddingHorizontal: 10,
        paddingBottom: 10,
        gap: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <Animated.Text
          entering={FadeInUp.duration(600)}
          style={{
            fontSize: 21,
            fontFamily: "PilcrowRoundedBold",
            color: "white",
          }}
        >
          Tienda
        </Animated.Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CartIcon itemQuantity={5} />
          {/* <Ionicons name="person-circle-outline" size={33} /> */}
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "white",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingLeft: 15,
            height: 45,
          }}
        >
          <TextInput
            placeholder="Buscar producto"
            style={{
              flex: 1,
              fontSize: 19,
              color: "black",
              fontFamily: "PilcrowRoundedMedium",
              backgroundColor: "transparent",
              textDecorationLine: "none",
              height: "100%",
              padding: 0,
              margin: 0,
            }}
            cursorColor={Colors.red}
            //   onChangeText={handleSearchText}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            submitBehavior="blurAndSubmit"
            //   onSubmitEditing={searchProducts}
          />
          <Pressable
            //   disabled={!searchText.length}
            style={{
              borderRadius: 50,
              padding: 5,
            }}
            //   onPress={searchProducts}
          >
            <MaterialIcons name="search" size={30} color={"black"} />
          </Pressable>
        </View>

        <Pressable>
          <MaterialIcons name="tune" size={30} color={"white"} />
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
