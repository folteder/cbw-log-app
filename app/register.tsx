import {
  Platform,
  // SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  LogBox,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";
import { Text, View } from "@/components/Themed";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Center } from "@/components/ui/center";
import { ButtonText } from "@/components/ui/button";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import PhoneInput from "react-native-phone-number-input";
import { Link, router } from "expo-router";
import { CheckIcon, Icon, PhoneIcon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import { Input, InputField } from "@/components/ui/input";
import {
  ChromeIcon,
  Facebook,
  Twitch,
  MessageSquareMore,
} from "lucide-react-native";
import {
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { VStack } from "@/components/ui/vstack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { color } from "native-base/lib/typescript/theme/styled-system";

LogBox.ignoreLogs([
  "CountryPicker: Support for defaultProps will be removed", // Mensaje exacto de la advertencia
]);

LogBox.ignoreLogs([
  "Support for defaultProps will be removed from function components", // Mensaje exacto de la advertencia
]);

LogBox.ignoreLogs([
  "Flag: Support for defaultProps will be removed from function components", // Mensaje exacto de la advertencia
]);

export default function registerScreen() {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const [currentView, setCurrentView] = useState("phone"); // State to track the active view
  const [values, setValues] = React.useState(["Eng"]);

  const renderView = () => {
    switch (currentView) {
      case "phone":
        return (
          <View style={styles.container}>
            <Card
              size="lg"
              variant="outline"
              className="m-1"
              style={styles.card}
            >
              <Box style={styles.boxWe}>
                <Text
                  style={{ color: "#FFFFFF" }}
                  className="text-typography-0"
                >
                  1
                </Text>
              </Box>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon as={PhoneIcon} style={styles.largeIcon} />
              </View>

              <View style={styles.textPhoneContainer}>
                <Text style={{ color: "#787878", fontSize: 15 }}>
                  {" "}
                  Ingresa tu número de celular
                </Text>
                <Text style={{ color: "#787878", fontSize: 15 }}>
                  {" "}
                  Para continuar
                </Text>
              </View>
              <SafeAreaView style={styles.wrapper}>
                {showMessage && (
                  <View style={styles.message}>
                    <Text>Value : {value}</Text>
                    <Text>Formatted Value : {formattedValue}</Text>
                    <Text>Valid : {valid ? "true" : "false"}</Text>
                  </View>
                )}
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={value}
                  defaultCode="DM"
                  layout="first"
                  onChangeText={(text) => {
                    setValue(text);
                  }}
                  onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                  }}
                  withDarkTheme
                  withShadow
                  autoFocus
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    const checkValid = phoneInput.current?.isValidNumber(value);
                    setShowMessage(true);
                    setValid(checkValid ? checkValid : false);
                  }}
                ></TouchableOpacity>
              </SafeAreaView>
              <View style={styles.textPhoneContainer}>
                <Text style={{ color: "#787878", fontSize: 15 }}>
                  {" "}
                  Ya tienes cuenta?
                </Text>
                <Link href="/login">
                  <Text style={{ color: "#8100c7", fontSize: 15 }}>
                    Inicia sesión con usuario y contraseña
                  </Text>
                </Link>
              </View>
              <View style={styles.largeButtonContainer}>
                <Button
                  title="CONTINUAR"
                  onPress={() => setCurrentView("profile")}
                  color="#8100c7" // Cambia el color si es necesario
                />
              </View>
            </Card>
          </View>
        );
      case "profile":
        return (
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              <Card
                size="lg"
                variant="outline"
                className="m-1"
                style={styles.card}
              >
                <Box style={styles.boxWe}>
                  <Text
                    style={{ color: "#FFFFFF" }}
                    className="text-typography-0"
                  >
                    2
                  </Text>
                </Box>
                <Input
                  style={styles.inputMargin}
                  variant="outline"
                  size="xl"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                >
                  <InputField placeholder="Usuario" />
                </Input>
                <Input
                  style={styles.inputMargin}
                  variant="outline"
                  size="xl"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                >
                  <InputField placeholder="Telefono" />
                </Input>
                <Input
                  style={styles.inputMargin}
                  variant="outline"
                  size="xl"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                >
                  <InputField placeholder="Contraseña" />
                </Input>
                <Input
                  style={styles.inputMargin}
                  variant="outline"
                  size="xl"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                >
                  <InputField placeholder="Repetir contraseña" />
                </Input>

                <Text style={styles.separator}>
                  -----------------O ingreso con ----------------
                </Text>

                <TouchableOpacity
                  style={styles.buttonSocial}
                  onPress={() => setCurrentView("created")}
                >
                  <Icon as={ChromeIcon} style={styles.icon} />
                  <Text style={styles.buttonText}>
                    Iniciar sesion con Google
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonSocial}
                  onPress={() => setCurrentView("created")}
                >
                  <Icon as={Facebook} style={styles.icon} />
                  <Text style={styles.buttonText}>
                    Iniciar sesion con Facebook
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonSocial}
                  onPress={() => setCurrentView("created")}
                >
                  <Icon as={Twitch} style={styles.icon} />
                  <Text style={styles.buttonText}>
                    Iniciar sesion con Twitch
                  </Text>
                </TouchableOpacity>
                <CheckboxGroup
                  value={values}
                  onChange={(keys) => {
                    setValues(keys);
                  }}
                >
                  <VStack space="xl">
                    <Checkbox value="Eng">
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel style={{ width: "80%" }}>
                        Acepto las condiciones de uso y politicas de privacidad
                      </CheckboxLabel>
                    </Checkbox>
                    <Checkbox value="invison">
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>
                        Acepto el envio de notificaciones
                      </CheckboxLabel>
                    </Checkbox>
                  </VStack>
                </CheckboxGroup>
                <View style={styles.largeButtonContainer}>
                  <Button
                    title="CONTINUAR"
                    onPress={() => setCurrentView("created")}
                    color="#8100c7" // Cambia el color si es necesario
                  />
                </View>
              </Card>
            </ScrollView>
          </View>
        );
      case "created":
        return (
          <View style={{ ...styles.container, width: "100%" }}>
            <Card
              size="lg"
              variant="outline"
              className="m-1"
              style={styles.card}
            >
              <Box style={styles.boxWe}>
                <Text
                  style={{ color: "#FFFFFF" }}
                  className="text-typography-0"
                >
                  3
                </Text>
              </Box>
              <Heading size="md" className="mt-3" style={{ color: "#2d0046" }}>
                    Tu cuenta ha sido creada!
                  </Heading>
              <Avatar size="2xl" style={styles.avatarContent}>
                <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                />
                <AvatarBadge />
              </Avatar>
              <View style={styles.buttonLogin}>
                <Button
                  title="COMPLETA PERFIL"
                  onPress={() => setCurrentView("code")}
                  color="#8100c7" // Optional: Set button color if needed
                />
              </View>
            </Card>
          </View>
        );
      case "code":
        return (
          <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={["left", "right"]}>
              <Card
                size="md"
                variant="outline"
                className="m-3"
                style={styles.card}
              >
                <Box style={styles.boxWe}>
                  <Text
                    style={{ color: "#FFFFFF" }}
                    className="text-typography-0"
                  >
                    4
                  </Text>
                </Box>
                <Icon as={ChromeIcon} style={styles.icon} />
                <View>
                  <Text> campo para recibir el codigo telefonico</Text>
                </View>
                <View>
                  <Text>No recibió el código?</Text>
                  <Button
                    title="Reenviar"
                    onPress={() => setCurrentView("code")}
                    color="#8100c7" // Optional: Set button color if needed
                  />
                </View>
                <View style={styles.buttonLogin}>
                  <Button
                    title="Verificar"
                    onPress={() => router.push("/users_pool")}
                    color="#8100c7" // Optional: Set button color if needed
                  />
                </View>
              </Card>
            </SafeAreaView>
          </SafeAreaProvider>
        );
      default:
        return (
          <View style={styles.view}>
            <Text style={styles.title}>Error: Unknown View</Text>
          </View>
        );
    }
  };

  return <View style={styles.container}>{renderView()}</View>;
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: "95%", // Aumenta el ancho al 95% del contenedor
    height: "95%", // Aumenta la altura al 85% del contenedor
    padding: 20, // Agrega un poco de espacio interno
    borderRadius: 15, // Opcional: redondea las esquinas
    backgroundColor: "#ffffff", // Color de fondo blanco
  },
  textPhoneContainer: {
    alignItems: "center",
    marginBottom: "5%",
  },
  largeIcon: {
    width: "80%", // Ancho del ícono
    height: "80%", // Alto del ícono
    color: "#8100c7", // Color del ícono
    padding: "15%",
  },
  boxWe: {
    backgroundColor: "#8100c7", // Example background color
    color: "#fefefe", // Example text color
    borderRadius: 10, // Example border radius
    marginBottom: "15%",
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 15,
    paddingLeft: 20,
    fontSize: 40,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  largeButtonContainer: {
    width: "100%", // Ajusta el ancho del botón
    height: 60, // Ajusta la altura del botón
    justifyContent: "center",
    alignItems: "center",
  },
  inputMargin: {
    marginBottom: "5%",
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 8, // Espaciado entre el ícono y el texto
    width: 20,
    height: 20,
    color: "#fff", // Color del ícono
  },
  buttonText: {
    color: "#fff", // Color del texto
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonLogin: {
    justifyContent: "center",
    marginTop: "60%",
    backgroundColor: "#8100c7",
    color: "#000",
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left', // Alinea el texto a la derecha
    color: '#fcc857',
    backgroundColor: 'transparent'
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  message: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContent: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  buttonSocial: {
    flexDirection: "row", // Alinea el ícono y el texto horizontalmente
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#8100c7", // Color de fondo del botón
    padding: 10,
    borderRadius: 8,
    marginBottom: "5%",
  },
  buttonRegister: {
    marginTop: 10,
    width: "70%",
    backgroundColor: "#FFFFFF",
    color: "#2d0046",
  },
  separator: {
    marginVertical: 30,
    // height: 1,
    width: "80%",
  },
});
