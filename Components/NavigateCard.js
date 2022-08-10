import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API_KEY } from '@env';
import { setDestination } from '../redux/Navslice'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <SafeAreaView className='flex-1 bg-amber-400'>
      <Text className='text-center py-4 text-lg'>NavigateCard</Text>
      <View className='border-t flex-shrink'>
        <View className='px-4 mt-3'>
          <GooglePlacesAutocomplete
            onPress={(data, details = null) => {
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description
              }))
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
            minLength={2}
            placeholder='Where to?'
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            styles={toInputSt}
            query={{
              key: GOOGLE_MAP_API_KEY,
              language: 'en'
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const toInputSt = StyleSheet.create({
  container: {
    flex: 0,
  },
  textInput: {
    fontSize: 18,
  }
})

export default NavigateCard