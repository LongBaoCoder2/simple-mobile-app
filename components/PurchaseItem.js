import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const PurchaseItem = ({ image, name, price, size, star }) => {
  return (
    <TouchableOpacity>
      <View>
        <Image source={image} />
      </View>
    </TouchableOpacity>
  );
};

export default PurchaseItem;
