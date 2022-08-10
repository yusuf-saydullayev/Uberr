import { View, ActivityIndicator, Text } from 'react-native'

const Loading = () => {
  return (
    <View className='h-full justify-center items-center'>
      <ActivityIndicator size="large" color="#F98C00" />
      <Text className='text-lg text-green-600' >Loading...</Text>
    </View>
  )
}


export default Loading