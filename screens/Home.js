import { View, Text, SafeAreaView, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API_KEY } from '@env'
import NavOptions from '../Components/NavOptions'
const Home = () => {
  return (
    <SafeAreaView className='h-full bg-amber-300'>
      <View className='p-5'>
        <Image source={require('../assets/Uber_Logo_Black.png')}
          style={{ width: 100, height: 100 }}
        />
        <NavOptions />
        <GooglePlacesAutocomplete
          enablePoweredByContainer={false}
          minLength={2}
          placeholder='Where is your location'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          query={{
            key: GOOGLE_MAP_API_KEY,
            language: 'en'
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home;