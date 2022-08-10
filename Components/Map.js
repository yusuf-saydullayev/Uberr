import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import Loading from './Loading';
import Error from './Error';
import MapView, { Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { setOrigin } from '../redux/Navslice';
import { selectOrigin } from '../redux/selectors';

const Map = () => {

  const [errorMsg, setErrorMsg] = useState(null);
  const Origin = useSelector(selectOrigin);
  const dispatch = useDispatch()

  useEffect(() => {

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      if (!Origin) {
        dispatch(setOrigin({
          location: coords,
          description: null,
        }))
      }
    })();
  }, []);

  if (!Origin) return <Loading />;
  if (errorMsg) return <Error message={errorMsg} />
  return (
    <MapView
      style={{ flex: 1, }}
      initialRegion={{
        latitude: Origin.location.latitude,
        longitude: Origin.location.longitude,
        latitudeDelta: 0.0002,
        longitudeDelta: 0.0121,
      }}
    >
      {Origin && (
        <Marker coordinate={{
          latitude: Origin?.location?.latitude,
          longitude: Origin?.location?.longitude
        }}
          title={Origin.description ? 'Location' : "It's me"}
          description={Origin?.description}
        />

      )}
    </MapView>
  )
}

export default Map