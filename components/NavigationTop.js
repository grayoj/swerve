import { View, Text } from "react-native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-web";

export default function NavigationTop() {
  const { fetchNews, darkTheme, setDarkTheme } = useContext(NewsContext);

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomColor: "black",
      padding: 10,
      alignItems: "center",
      borderBottomColor: "gray",
      borderBottomWidth: 0.5,
    },
    text: {
      fontSize: 17,
    },
    left: {
      flexDirection: "row",
      alignItems: "center",
      width: 79,
      justifyContent: "space-between",
    },
    right: {
      width: 79,
      alignItems: "flex-end",
    },
    center: {
      paddingBottom: 0,
      borderBottomColor: "black",
      borderBottomWidth: 5,
      borderRadius: 10,
      fontSize: 17,
      fontweight: "700",
    },
  });
  return (
    <View style={{ ...StyleSheet.container, backgroundColor: "black" }}>
      {index === 0 ? (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setDarkTheme(!darkTheme)}
        >
          <Text style={{ ...styles.text, color: "lightgray" }}>
            <MaterialCommunityIcons
              size={26}
              name="theme-light-dark"
              color="black"
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="gray" />
          <Text>Explore</Text>
        </TouchableOpacity>
      )}
      <Text style={{ ...styles.center, color: "white" }}>
        {index ? "All News" : "Explore"}
      </Text>
      {index ? (
        <TouchableOpacity
          style={styles.right}
          //onPress={() =>fetchFeed("general")}
        >
          <Text style={styles.text}>
            <AntDesign name="reload1" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="gray" />
          <Text>Explore</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
