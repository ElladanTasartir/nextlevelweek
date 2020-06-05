import React from "react";
import { StatusBar } from "react-native";
//A statusbar do celular
import { AppLoading } from "expo";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu"; //Pode se importar de qualquer uma das duas
// o useFonts

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
    //permanece uma tela de carregamento enquanto as fonts ainda não terminaram de carregar
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent" //apenas no android, para fazer o fundo da status bar ficar invisível
        translucent //para o conteúdo do app ser sobreposto pela statusbar, sem que a mesma atrapalhe
      />
      <Routes />
    </>
    // Fragment: Tag sem conteúdo para circundar quando vamos usar mais de um componente
    // Podemos fazer tanto dessa forma como com uma view, mas assim não produz o efeito de uma view
  );
}
