import { ImageBackground, Image,Platform, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Text, View } from "@/components/Themed";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Button, ButtonText } from "@/components/ui/button";
// import {backImage} from '../assets/images/icon.png';

// const image = {uri: '../assets/images/icon.png' };

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ImageBackground
          source={require("../assets/images/purple-gaming.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/logowe.png")} // Ruta del logo
              style={styles.logo} // Estilo del logo
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button style={styles.buttonLogin} variant="solid" >
              <Link href="/login">
                <ButtonText>INICIAR SESION</ButtonText>
              </Link>
            </Button>
            <Button style={styles.buttonRegister} variant="solid" >
              <Link href="/register">
                <ButtonText style={{ color: "#2d0046" }}>REGISTRO</ButtonText>
              </Link>
            </Button>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60%",
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    backgroundColor: "transparent",
    
  },
  logoContainer: {
    alignItems: "center", // Centra el logo horizontalmente
    marginBottom: 20, // Espaciado debajo del logo
    backgroundColor: "transparent",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },

  buttonLogin: {
    justifyContent: "center",
    width: "70%",
    backgroundColor: "#fbac00",
    color: "#000",
  },
  logo: {
    width: 100, // Ancho del logo
    height: 100, // Alto del logo
    resizeMode: "contain", // Ajusta la imagen sin distorsión
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 10,
    width: "70%",
    backgroundColor: "#FFFFFF",
    color: "#2d0046" ,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
