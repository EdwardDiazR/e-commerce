import { View, Text, Pressable, Modal, Alert } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const ForgotCartModal = ({
  isVisible,
  closeForgotCartModal,
}: {
  isVisible: boolean;
  closeForgotCartModal: () => void;
}) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
      onDismiss={() => {}}
      onRequestClose={closeForgotCartModal}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: 320,
            gap: 10,
            backgroundColor: Colors.red,
            borderRadius: 20,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 1,
          }}
        >
          <Pressable
            style={{ position: "absolute", top: 15, right: 15 }}
            onPress={closeForgotCartModal}
          >
            <MaterialIcons name="close" color={"white"} size={30} />
          </Pressable>
          <MaterialIcons
            name="production-quantity-limits"
            size={55}
            color={"white"}
          />
          <View
            style={{ justifyContent: "center", alignItems: "center", gap: 5 }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "PilcrowRoundedBold",
                fontSize: 22,
              }}
            >
              ¿Olvidaste tu carrito?
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "PilcrowRoundedMedium",
                fontSize: 18,
              }}
            >
              Parece que dejaste algo interesante en tu carrito. No te
              preocupes.
            </Text>
            <Text
              style={{
                fontFamily: "PilcrowRoundedBold",
                fontSize: 18,
                color: "white",
              }}
            >
              ¡todavía está esperando por ti!
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              width: "100%",
              gap: 6,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "PilcrowRoundedBold",
                }}
              >
                Ir al carrito
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "green",
                borderRadius: 10,
                padding: 10,
              }}
              onPress={closeForgotCartModal}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "PilcrowRoundedBold",
                  color: "white",
                }}
              >
                Seguir comprando
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ForgotCartModal;
