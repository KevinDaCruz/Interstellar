import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import Constants from "expo-constants";
import logo from "./assets/logo.png";
import movie from "./assets/film.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo}></Image>
      </View>
      <View style={styles.movie}>
        <Text style={styles.title}>Interstellar</Text>
        <Text style={styles.description}>
          2014, PG-13 2h49min Adventure, Drama, Sci-Fi
        </Text>
        <View style={styles.sectionMain}>
          <Image source={movie} style={styles.movieImg}></Image>
          <View style={styles.sectionDesc}>
            <Text style={styles.resume}>
              A team of explores travel through a wormhole in space in an
              attempt to ensure humanity's survival.
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                alert("Movie added to Watchlist !");
              }}
            >
              <Text style={styles.textButton}>+ ADD TO WATCHLIST</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: Constants.statusBarHeight,
  },

  header: {
    backgroundColor: "#393939",
    height: 70,
    justifyContent: "center",
  },

  logo: {
    height: 40,
    width: 80,
    marginLeft: 20,
  },

  movie: {
    backgroundColor: "#212121",
  },

  title: {
    fontSize: 40,
    marginTop: 20,
    marginLeft: 20,
    color: "white",
  },

  description: {
    color: "#989898",
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
  },

  sectionMain: {
    borderWidth: 2,
    borderColor: "blue",
    flexDirection: "row",
    margin: 20,
  },

  movieImg: {
    height: 180,
    width: "30%",
    marginTop: 25,
  },

  sectionDesc: {
    marginTop: 30,
    marginLeft: 10,
    borderWidth: 2,
    width: "100%",
  },

  resume: {
    color: "white",
    width: "100%",
  },

  button: {
    backgroundColor: "#0277BD",
    height: 40,
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  textButton: {
    color: "white",
  },
});
