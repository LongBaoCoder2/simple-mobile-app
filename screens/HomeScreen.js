import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

const dummyTree = [
  {
    _id: 1,
    name: "Echeveria",
    price: "25",
    size: "3",
    star: "5.0",
    image: require("../assets/tree1.png"),
  },
  {
    _id: 2,
    name: "Prickypear",
    price: "20",
    size: "5",
    star: "4.8",
    image: require("../assets/tree2.png"),
  },
  {
    _id: 3,
    name: "Sansevieria",
    price: "28",
    size: "8",
    star: "4.8",
    image: require("../assets/tree3.png"),
  },
];

const dummyUserLike = [
  {
    _id: 1,
    isLike: true,
  },
  {
    _id: 2,
    isLike: false,
  },
  {
    _id: 3,
    isLike: true,
  },
];

const HomeScreen = () => {
  const catagory = [
    "All",
    "Cacti",
    "In pots",
    "Dried flowers",
    "Out pots",
    "Wet flowers",
    "Outter pots",
  ];
  const [catagoryActive, setCatagoryActive] = React.useState("All");

  // Item
  const Item = ({ image, name, price, size, star, isLike }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginVertical: 15,
          width: 280,
          height: 115,
        }}
        onPress={() => console.log("Outside")}
      >
        <View style={itemStyle.imageWrapper}>
          <Image source={image} style={itemStyle.image} />
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              width: 30,
              height: 30,
              padding: 5,
              overflow: "hidden",
              backgroundColor: isLike ? "#D14D72" : "#fff",
              borderRadius: 10,
            }}
            onPress={() => console.log("Inside")}
          >
            <Image
              style={{
                overflow: "hidden",
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
              source={require("../assets/icon/heart.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 18, color: "#FFBB56" }}>
              <Image source={require("../assets/icon/star.png")} />
              {star}
            </Text>
          </View>
          <Text style={{ fontSize: 15, opacity: 0.5 }}>From {size} inch</Text>
          <Text style={{ fontSize: 17, fontWeight: 400 }}>{price} $</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCatagory = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.catagoryItem,
        {
          backgroundColor: catagoryActive === item ? "#D3B398" : "#F4F4F4",
        },
      ]}
      onPress={() => setCatagoryActive(item)}
    >
      <Text
        style={{
          fontSize: 17,
          color: catagoryActive === item ? "#FFFFFF" : "#505050",
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Plant </Text>
        <Text style={styles.title}>is for room </Text>
      </View>
      <ScrollView
        style={styles.catagory}
        // keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <FlatList
          data={catagory}
          renderItem={renderCatagory}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>

      <Text
        style={{
          marginVertical: 20,
          marginHorizontal: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {catagoryActive}
      </Text>
      <View style={{ justifyContent: "center", marginLeft: 40 }}>
        {/* Image 1 */}
        <Item
          image={require("../assets/tree1.png")}
          name={"Echeveria"}
          price={"25"}
          star={"5.0"}
          size={"3"}
          isLike={true}
        />
        {/* Image 2 */}
        <Item
          image={require("../assets/tree2.png")}
          name={"Prickypear"}
          price={"20"}
          star={"4.8"}
          isLike={false}
          size={"5"}
        />
        <View
          style={{
            padding: 15,
            backgroundColor: "#E2E9FF",
            marginRight: 34,
            borderRadius: 10,
            marginVertical: 20,
            position: "relative",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Free shipping
            </Text>
            <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
              <Text style={{ opacity: 0.5, fontSize: 16, paddingVertical: 2 }}>
                When ordering
              </Text>
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  borderRadius: 4,
                  backgroundColor: "#FFBB56",
                }}
              >
                <Text style={{ color: "#fff" }}>from 40%</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 100,
              height: 100,
              position: "absolute",
              right: 20,
              top: -30,
              zIndex: -1,
            }}
          >
            <Image source={require("../assets/isllustration.png")} />
          </View>
        </View>
        {/* Image 3 */}
        <Item
          image={require("../assets/tree3.png")}
          name={"Sansevieria"}
          price={"28"}
          star={"4.5"}
          isLike={false}
          size={"8"}
        />
        {/* Image 1 */}
        <Item
          image={require("../assets/tree1.png")}
          name={"Echeveria"}
          price={"25"}
          star={"5.0"}
          isLike={true}
          size={"3"}
        />
        {/* Image 3 */}
        <Item
          image={require("../assets/tree3.png")}
          name={"Sansevieria"}
          price={"28"}
          star={"4.5"}
          isLike={false}
          size={"8"}
        />
        {/* Image 2 */}
        <Item
          image={require("../assets/tree2.png")}
          name={"Prickypear"}
          price={"20"}
          star={"4.8"}
          isLike={false}
          size={"5.0"}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 15,
    marginLeft: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  catagory: {
    marginLeft: 24,
  },
  catagoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 15,
    marginRight: 10,
  },
});

const itemStyle = StyleSheet.create({
  imageWrapper: {
    width: 120,
    height: 120,
    position: "relative",
    backgroundColor: "#EBF4EE",
    borderRadius: 12,
    marginRight: 24,
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    resizeMode: "contain",
  },
});

export default HomeScreen;
