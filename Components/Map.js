import { useEffect, useState, useRef } from 'react';
import * as Location from 'expo-location';
import Loading from './Loading';
import Error from './Error';
import { useSelector, useDispatch } from 'react-redux';
import { setOrigin } from '../redux/Navslice';
import { selectOrigin, selectDestination } from '../redux/selectors';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_API_KEY } from '@env';


const Map = () => {

  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch()
  const Origin = useSelector(selectOrigin);
  const Destination = useSelector(selectDestination);
  const mapRef = useRef();

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

  useEffect(() => {

    if (!Origin || !mapRef) return;
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, left: 50, right: 50, bottom: 50 },
    });

  }, [Origin, Destination]);

  if (!Origin) return <Loading />;
  if (errorMsg) return <Error message={errorMsg} />
  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1, }}
      initialRegion={{
        latitude: Origin.location.latitude,
        longitude: Origin.location.longitude,
        latitudeDelta: 0.0002,
        longitudeDelta: 0.0121,
      }}
    >
      {Origin && Destination && (
        <MapViewDirections
          origin={Origin.description}
          destination={Destination.description}
          apikey={GOOGLE_MAP_API_KEY}
          strokeWidth={3}
          strokeColor={'yellow'}
        />
      )}
      {Origin && (
        <Marker coordinate={{
          latitude: Origin?.location?.latitude,
          longitude: Origin?.location?.longitude
        }}
          title={Origin.description ? 'Origin' : "It's me"}
          description={Origin?.description}
          identifier={'origin'}
        />

      )}

      {Destination && (
        <Marker coordinate={{
          latitude: Destination?.location?.latitude,
          longitude: Destination?.location?.longitude
        }}
          title={'Destination'}
          description={Destination?.description}
          identifier={'destination'}
        />

      )}
    </MapView>
  )
}

export default Map