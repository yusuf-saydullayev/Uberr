import { View, Text, SafeAreaView, Image } from 'react-native';
import SearchInput from '../Components/SearchInput';
import NavOptions from '../Components/NavOptions';
import NavigateCard from '../Components/NavigateCard';

const Home = () => {
  return (
    <SafeAreaView className='h-full bg-amber-300'>
      <View className='p-5'>
        <Image source={require('../assets/Uber_Logo_Black.png')}
          style={{ width: 100, height: 100 }}
        />
        <SearchInput />
        <NavOptions />
        {/* <NavigateCard /> */}
      </View>
    </SafeAreaView>
  )
}

export default Home;