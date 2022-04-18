import React, { useContext } from "react";
import { View } from "react-native-web";
import { NewsContext } from "../api/Context";
import { categories, sources } from "../api/Context";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Search from "../components/Search";

function ExploreSceen() {
  const { setCategory, setSource } = useContext(NewsContext);

  const windowWidth = Dimensions.get("window").width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

  return (
    <View style={styles.explore}>
      {/* search */}
      <Seacrh />

      {/* categories */}
      <Text style={{ ...styles.subtitle, color: "white" }}>Categories</Text>
      <Carousel
        layout={"default"}
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCategory(item.name)}
          >
            <Image source={{ url: item.pic }} style={styles.categoryImage} />
            <Text style={{ ...styles.name, color: "white" }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        itemWidth={SLIDE_WIDTH}
        sliderWidth={windowWidth}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />

      {/* sources */}
      <Text style={{ ...styles.subTitle, color: "white" }}>Sources</Text>
      <View style={styles.sources}>
        {sources.map((s) => {
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            style={styles.sourceContainer}
          >
            <Image source={{ url: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  explore: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontweight: "bold",
    paddingBottom: 8,
    marginHorizontal: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  categoryImage: {
    height: "61%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  sources: {
    flexDirection: "row",
    flexwrap: "wrap",
    paddingVertical: 15,
    justifyContent: "space-around",
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d",
  },
});

export default ExploreSceen;
