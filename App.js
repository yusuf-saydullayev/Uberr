import { Provider } from 'react-redux'
import { TailwindProvider } from 'tailwindcss-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import { store } from './redux/store'
import Home from './screens/Home';
import MapScreen from './screens/MapScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <TailwindProvider>
            <Stack.Navigator>
              <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
              <Stack.Screen name='MapScreen' component={MapScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </TailwindProvider>
        </SafeAreaProvider>
      </NavigationContainer>
      <StatusBar theme="auto" />
    </Provider>
  );
}
