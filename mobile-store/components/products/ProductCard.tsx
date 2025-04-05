import { ProductFeedCard } from "@/models/Product";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const ProductCard = ({
  productInfo,
}: {
  productInfo: ProductFeedCard;
}) => {
  const [isItemSaved, setIsItemSaved] = useState<boolean>(productInfo.liked);

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  const handleItemSave = () => {
    scale.value = 1.15; // Aumenta el tamaño
    scale.value = withSpring(1, { damping: 3, stiffness: 200 }); // Rebote al tamaño original
    setIsItemSaved(!isItemSaved);
  };

  const goToProductDetails = () => {};
  return (
    <Pressable onPress={goToProductDetails}>
      <View
        style={{
          elevation: 1,
          padding: 5,
          paddingHorizontal: 10,
          backgroundColor: "#fff",
          width: 165,
          height: "100%",
          borderRadius: 8,
          marginHorizontal: 5,
          gap: 15,
        }}
      >
        <Image
          source={{
            uri: productInfo.product.portraitImageUrl,
          }}
          style={{
            overflow: "hidden",
            backgroundColor: "white",
            flex: 1,
          }}
          contentFit="scale-down"
          allowDownscaling
          cachePolicy={"memory-disk"}
        />

        <View style={{ gap: 2, height: 60 }}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              flexWrap: "nowrap",
              fontFamily: "PilcrowRoundedMedium",
              fontSize: 17,
              flex: 1,
            }}
          >
            {productInfo.product.title}
          </Text>
          <Text style={{ fontFamily: "PilcrowRoundedBold", fontSize: 17 }}>
            ${productInfo.product.price}
          </Text>
        </View>

        <Pressable
          onPress={handleItemSave}
          style={{
            position: "absolute",
            top: 10,
            right: 5,
            backgroundColor: "lightgray",
            borderRadius: 100,
            padding: 3,
          }}
        >
          <Animated.View style={[animatedStyle]}>
            <Ionicons
              name={isItemSaved ? "heart" : "heart-outline"}
              size={25}
              color={isItemSaved ? "red" : "white"}
            />
          </Animated.View>
        </Pressable>
      </View>
    </Pressable>
  );
};
