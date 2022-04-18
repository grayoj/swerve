import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React from "react";
import { useState } from "react/cjs/react.production.min";
import { Entypo } from "@expo/vector-icons";

const Search = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);

  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState();

  const handleModal = () => {
    setModalVisible(true);
    setCurrentNews(n);
  };

  const handleSearch = (text) => {
    if (!text) {
      setSearchResults([]);
      return;
    }
    setSearchResults(articles.filter((qquery) => query.title.includes(text)));
  };

  return (
    <View style={{ width: "100%", position: "relative" }}>
      <TextInput
        style={{
          ...styles.search,
          backgroundColor: "black",
          color: "white",
        }}
        onChangeText={(text) => handleSearch(text)}
        placeholder="Search for more news"
        placeholderTextColor={"white"}
      />
      <View style={styles.searchResults}>
        {searchResults.slice(0, 10).map((n) => (
          <TouchableOpacity
            key={n.title}
            activeOpacity={0.7}
            onPress={() => handleModal(n)}
          >
            <Text
              style={{
                ...styles.singleResult,
                backgroundColor: darkTheme ? "black" : "white",
                color: darkTheme ? "white" : "black",
              }}
            >
              {n.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            position: "absolute",
            zindex: 1,
            right: 0,
            margin: 20,
            marginTop: 60,
          }}
        >
          <Entypo nme="circle-with-cross" size={30} color="white" />
        </TouchableOpacity>
        <View style={{ height: "100%", transform: [{ scaleY: -1 }] }}>
          <SingleNews item={currentNews} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  searchResults: {
    position: "absolute",
    zindex: 1,
    top: 50,
  },
  singleResult: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: "black",
    elevation: 5,
  },
});

export default Search;
