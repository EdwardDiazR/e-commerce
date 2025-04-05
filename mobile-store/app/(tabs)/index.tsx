import { View, Text, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList, Pressable, TextInput } from "react-native-gesture-handler";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFeedCard } from "@/models/Product";
import { Stack } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Animated, {
  BounceIn,
  BounceInDown,
  BounceInLeft,
  BounceInUp,
  FadeInDown,
  FadeInUp,
  SlideInDown,
  SlideInUp,
} from "react-native-reanimated";
import { Colors } from "@/constants/Colors";
import HomeHeader from "@/shared/HomeHeader";
import ForgotCartModal from "@/components/modals/ForgotCartModal";

export default function index() {
  const insets = useSafeAreaInsets();
  const products: ProductFeedCard[] = [
    {
      product: {
        title: "Iphone 16 Pro Max",
        price: 525.99,
        portraitImageUrl:
          "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg",
      },
      liked: true,
    },
    {
      product: {
        title:
          "Beats Solo 4 - Auriculares inalámbricos Bluetooth en la oreja, compatibles con Apple y Android, hasta 50 horas de duración de la batería, color rosa nube",
        price: 129.95,
        portraitImageUrl:
          "https://m.media-amazon.com/images/I/51JNqP2C4rL.__AC_SY445_SX342_QL70_FMwebp_.jpg",
      },
      liked: false,
    },
    {
      product: {
        title:
          "SAMSUNG 990 PRO SSD 4TB PCIe 4.0 M.2 2280 Disco duro interno de estado sólido, velocidades de lectura secuenciales de hasta 7,450 MB/s para estaciones de trabajo de alta gama, computación y juegos",
        price: 279.99,
        portraitImageUrl:
          "https://m.media-amazon.com/images/I/81WuG6lQuDL._AC_SX425_.jpg",
      },
      liked: false,
    },
    {
      product: {
        title: "Iphone 16 Pro Max",
        price: 525.99,
        portraitImageUrl:
          "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg",
      },
      liked: false,
    },
  ];

  const [searchText, setSearchText] = useState<string>("");
  //TODO: OPTIMIZE USE MEMO
  const [productList, setProductList] = useState<ProductFeedCard[]>(products);

  const searchProducts = () => {
    setProductList((prev) =>
      products.filter((product) =>
        product.product.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  const handleSearchText = (text: string) => {
    setSearchText(text);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      // searchProducts();
    }, 500); // 1 segundo después de dejar de escribir

    return () => clearTimeout(handler); // Limpia el timeout en cada cambio
  }, [searchText]);

  const [isForgotCartModalVisible, setIsForgotCartModalVisible] =
    useState<boolean>(false);

  //Toggle for closing Forgotten Cart Modal
  const closeForgotCartModal = () => setIsForgotCartModalVisible(false);

  const lastTimeCartVisited = new Date(new Date().setDate(1));
  useEffect(() => {
    // If lastTimeCartVisited is equal or greater than 2 days -> Show modal
    setIsForgotCartModalVisible(() =>
      checkIfIsCartForgotten(lastTimeCartVisited)
    );
  }, []);

  const checkIfIsCartForgotten = (lastTimeDate: Date): boolean => {
    const now = new Date();
    return now.getDate() - lastTimeCartVisited.getDate() >= 2;
  };
  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <HomeHeader />,
        }}
      />
      <ForgotCartModal
        isVisible={isForgotCartModalVisible}
        closeForgotCartModal={closeForgotCartModal}
      />
      {/* 
      <View
        style={{
          height: 100,
          backgroundColor: "gray",
          borderRadius: 6,
          marginHorizontal: 10,
        }}
      ></View> */}
      <View>
        <Text style={{ fontFamily: "PilcrowRoundedSemiBold", fontSize: 18 }}>
          Ultimos productos vistos:
        </Text>
        <FlatList
          data={productList}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 220, paddingVertical: 5 }}
          renderItem={({ item, index }) => (
            <ProductCard key={index} productInfo={item} />
          )}
        />
      </View>
      <Text>Categorias:</Text>
    </View>
  );
}
