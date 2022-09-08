import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Match from './screens/Match';
import History from './screens/History';
import Register from './screens/Register';
import {Provider} from "@react-native-material/core";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="match" component={Match} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="history" component={History} options={{ title: "Histórico" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
