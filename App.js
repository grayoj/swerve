import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Context from '../api/context';
import shortTabs from '../components/shortTabs';

function App() {

  const {darkTheme} = useContext(NewsContext);

  return (
    <View style={{...styles.container, backgroundColor: darkTheme ?
    "#282c35": "white",}}>
      <shortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
 return (
 <Context>
   <App />
 </Context> 
 );
}