import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Icon } from "@rneui/themed";

const NavOptions = () => {
  const navigate = useNavigation();

  const data = [
    {
      id: '1',
      title: 'Get a ride',
      image: 'https://links.papareact.com/3pn',
      screen: 'MapScreen',
    },
    {
      id: '2',
      title: 'Order food',
      image: 'https://links.papareact.com/28w',
      screen: 'Home',
    }
  ]

  const Handlenavigate = screen => navigate.navigate(screen)

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => Handlenavigate(item.screen)} className='w-40 p-1 pb-4 pt-4 mx-2 mb-5 mt-4 bg-slate-300 rounded-3xl'>
          <View>
            <Image source={{ uri: item.image }} style={{ width: 120, height: 120, resizeMode: 'contain' }} />
            <Text className='mt-2 text-lg font-bold'>{item.title}</Text>
            <Icon size={35} name='arrowright' color='white' type='antdesign' />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions