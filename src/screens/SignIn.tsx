import { VStack, Image, Center, Text, Heading, ScrollView } from "native-base";

import BackgroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>


      <VStack flex={1} bg="gray.700" px={10}  pb={16}>
        <Image
          source={BackgroundImg}
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
          
          />
        </Center>

      </VStack>
    </ScrollView>
  );
}
