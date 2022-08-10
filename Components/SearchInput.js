import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet } from 'react-native'
import { GOOGLE_MAP_API_KEY } from '@env';
import { setOrigin, setDestination } from '../redux/Navslice'
import { useDispatch } from 'react-redux';

const SearchInput = () => {
  const dispatch = useDispatch()
  return (
    <GooglePlacesAutocomplete
      onPress={(data, details = null) => {
        dispatch(setOrigin({
          location: details.geometry.location,
          description: data.description
        })),
          dispatch(setDestination(null))
      }}
      styles={toInputSt}
      fetchDetails={true}
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
  );
}

const toInputSt = StyleSheet.create({
  container: {
    flex: 0,
  },
  textInput: {
    fontSize: 18,
  }
})

export default SearchInput;
