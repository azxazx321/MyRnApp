import React from 'react'
import Login from './screens/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GoodsList from './screens/GoodsList'
import { NavigationContainer } from '@react-navigation/native'


let {Navigator, Screen} = createNativeStackNavigator()
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    
    <NavigationContainer>
      <Navigator initialRouteName='login'>
        <Screen name="login" component={Login}/>
        <Screen name="glist" component={GoodsList}/>

      </Navigator>
      {/* <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="glist" component={GoodsList}/>
      </Stack.Navigator> */}
    </NavigationContainer>

  
  )
}