import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { ImageBackground } from "react-native-web";

const SingleNews = ({ item, index }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
        backgroundColor: "black",
      }}
    >
      <Image
        source={{ url: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />
      <View style={{ ...styles.description, backgroundColor: "black" }}>
        <Text style={{ ...styles.title, color: "white" }}>{item.title}</Text>
        <Text style={{ ...styles.content, color: "white" }}>
          {item.description}
        </Text>
        <Text style={{ color: white }}>
          News by
          <Text>{item.author ?? "unknown"}</Text>
        </Text>
        <ImageBackground
          blurRadius={30}
          style={styles.footer}
          source={{ url: item.urlToImage }}
        >
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Text style={{ fontSize: 15, color: "white" }}>
              '{item?.content?.slice(0, 45)}...'
            </Text>
            <Text style={{ fontSize: 17, fontweight: "bold", color: "white" }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontweight: "bold",
    paddingBottom: 10,
    color: "white",
  },
  content: {
    fontSize: 18,
    paddingBottom: 10,
  },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be68",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  description: {
    padding: 15,
    flex: 1,
  },
});

export default SingleNews;
