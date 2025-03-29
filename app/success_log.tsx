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
import { Link } from 'expo-router';


export default function logSucessScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <Card size="md" variant="outline" className="m-3" style={styles.card}>
        <View style={{ width: '100%' }}>
            <Link href="/login"><Text style={styles.title}>Volver a empezar</Text></Link>
            </View>
              <Heading size="md" className="mt-3" style={{ color: "#2d0046" }}>
                TU PERFIL ESTA HECHO!
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
              <Button style={styles.buttonLogin} size="lg" variant="solid">
                <Link href="/success_log">
                  <ButtonText>FINALIZAR</ButtonText>
                </Link>
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
    backgroundColor: '#ffffff', // Color de fondo blanco
  },
  avatarContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  buttonLogin: {
    justifyContent: "center",
    marginTop: "60%",
    backgroundColor: "#8100c7",
    color: "#000",
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left', // Alinea el texto a la derecha
    color: '#fcc857',
    backgroundColor: 'transparent'
  },
});