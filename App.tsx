import Home from './src/screens/Home/Home';
import Props from './src/screens/Props/Props';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
              name='Home'
              component={Home}
            />
            <Stack.Screen
              name='Detalhes'
              component={Props}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}