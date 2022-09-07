import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Match from './screens/Match';
import {Provider} from "@react-native-material/core";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="match" component={Match} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
