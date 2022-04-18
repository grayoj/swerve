import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { sceneMap, TabView } from "react-native-tab-view";
import ExploreScreen from ".../pages/ExploreScreen";
import NewsScreen from "./pages/NewsScreen";
import { useContext } from "react/cjs/react.production.min";

const shortTabs = () => {
  const layout = useWindowDimensions();

  const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: "first", title: "explore" },
    { key: "second", title: "news" },
    { key: "third", title: "feed" },
  ]);

  const renderScene = sceneMap({
    first: ExploreScreen,
    second: NewsScreen,
    third: FeedScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default shortTabs;
