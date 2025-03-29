import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Card } from "@/components/ui/card"
import { Link } from 'expo-router';
import { Button, ButtonText } from "@/components/ui/button"
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar"
import { FormControl } from "@/components/ui/form-control"
import { Heading } from "@/components/ui/heading"
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input"
import { VStack } from "@/components/ui/vstack"
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon"
import React from "react"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';





export default function loginScreen() {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <FormControl className="p-4 border rounded-lg border-outline-300" style={styles.formControl}>  
              <VStack space="xl">
              <View style={[styles.avatarP, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
                  <Avatar size="2xl" style={styles.avatarContent}>
                      <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                      <AvatarImage
                        source={{
                          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        }}
                      />
                  <AvatarBadge />
                </Avatar>
                </View>
                <VStack space="xs">
                  <Text className="text-typography-500">Usuario</Text>
                  <Input className="min-w-[250px]">
                    <InputField type="text" />
                  </Input>
                </VStack>
                <VStack space="xs">
                  <Text className="text-typography-500">Contraseña</Text>
                  <Input className="text-center">
                    <InputField type={showPassword ? "text" : "password"} />
                    <InputSlot className="pr-3" onPress={handleState}>
                      <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                    </InputSlot>
                  </Input>
                </VStack>
                <Link href="/success_log"><Text style={styles.forgotten}>Olvidaste tu contraseña?</Text></Link>
                <Link href="/register">Aun no tienes cuenta,<Text style={styles.title}>Registrate</Text></Link>
                <Button style={styles.buttonLogin}
                  // className="ml-auto"
                  onPress={() => {
                    setShowPassword(false)
                  }}
                >  
                  <Link href="/success_log">
                    <ButtonText className="text-typography-0" >INICIAR SESION</ButtonText>
                  </Link>
                </Button>
              </VStack>
            </FormControl>
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
  avatarP: {
    backgroundColor: 'transparent'
  },
  avatarContent: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  forgotten:{
    color: "#fcc040",
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonLogin: {
    justifyContent: "center",
    backgroundColor: "#8100c7",
    color: "#000",
  },
  formControl: {
    padding: 16,
    width: '90%',
    height: '80%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#d1d5db', // Replace with your desired color
    alignItems: 'center', // Centra horizontalmente
    justifyContent: 'center', // Centra verticalmente
  },
});