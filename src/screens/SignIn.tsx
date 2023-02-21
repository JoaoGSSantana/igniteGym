import { VStack, Image, Center, Text, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native"

import BackgroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignIn() {
  const navigation: AuthNavigatorRoutesProps = useNavigation();

  function handleSignUpNavigate() {
    return navigation.navigate("signUp");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>


      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando em uma bicicleta"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSVG />
          <Text color="gray.100" fontSize="sm">Treine sua mente e o seu corpo</Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            placeholder="Senha"
            secureTextEntry
          />

          <Button
            title="Acessar"
          />
        </Center>

        <Center mt={24}>
          <Text
            color="white"
            fontSize="sm"
            mb={3}
            fontFamily="body"
          >
            Ainda não possui conta?
          </Text>
          <Button
            variant="outline"
            title="Criar conta"
            onPress={handleSignUpNavigate}
          />
        </Center>

      </VStack>
    </ScrollView>
  );
}
