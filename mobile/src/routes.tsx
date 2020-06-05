import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Navegação em pilha, ou seja, permite voltar a navegação sequencialmente, como uma pilha

import Home from "./pages/Home";
import Points from "./pages/Points";
import Detail from "./pages/Detail";

const AppStack = createStackNavigator(); //AppStack faz o roteamento da aplicação

const Routes = () => {
  return (
    <NavigationContainer>
      {/* Sempre precisa ficar em volta de todas as rotas da aplicação */}
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5", 
            // Coloca cor de fundo para todas as rotas
          },
        }}
      >
        {/* Por padrão, o navigator mostra um header dentro da aplicação, para evitar isso, podemos passar
          O headerMode como none para retirar esse header desnecessário */}
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Points" component={Points} />
        <AppStack.Screen name="Detail" component={Detail} />
        {/* Recebe a propriedade name para o nome da rota, só que por ser um app não precisa de rotas como na rede */}
        {/* E component, para o componente que será renderizado em tela */}
        {/* AppStack.Screen será colocado para cada tela da aplicação */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
