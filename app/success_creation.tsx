import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Button, ButtonText } from "@/components/ui/button"
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar"
import { textStyle } from '@/components/ui/text/styles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function successScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <Card size="lg" variant="outline" className="m-3" style={styles.card}>
              <Heading size="md" className="mb-1">
                Tu perfil esta hecho!
              </Heading>
              <Avatar size="2xl">
                <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                />
                <AvatarBadge />
              </Avatar>
              <Button style={styles.buttonLogin} size="lg" variant="solid">
                <ButtonText>FINALIZAR</ButtonText>
              </Button>
            </Card>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%', // Aumenta el ancho al 95% del contenedor
    height: '85%', // Aumenta la altura al 85% del contenedor
    padding: 20, // Agrega un poco de espacio interno
    borderRadius: 15, // Opcional: redondea las esquinas
  },
  buttonLogin: {
    justifyContent: "center",
    backgroundColor: "#8100c7",
    color: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});