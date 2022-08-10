import { View, Text } from 'react-native';
import Mapcomponent from '../Components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../Components/NavigateCard';
import RideCard from '../Components/RideCard';

const Map = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View className='h-1/2'>
        <Mapcomponent />
      </View>
      <View className='h-1/2'>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='RideCard'
            component={RideCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default Map