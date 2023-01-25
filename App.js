import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlantDetail from './src/screens/plantsDetail/PlantDetail'
import Tabs from './src/navigation/tabs';

const stack=createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}} initialRouteName={"Homee"}>
        <stack.Screen name='Homee' component={Tabs} />
        <stack.Screen name='PlantDetail' component={PlantDetail} options={{headerShown:false}}/>
      </stack.Navigator>
   </NavigationContainer> 
  );
}


