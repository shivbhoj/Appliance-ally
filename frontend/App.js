import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateHomeScreen from './src/screens/CreateHomeScreen';
import AddApplianceScreen from './src/screens/AddApplianceScreen';
import ApplianceDetailScreen from './src/screens/ApplianceDetailScreen';
import UploadDocumentScreen from './src/screens/UploadDocumentScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007AFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen}
            options={{ title: 'Create Account' }}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: 'My Appliances', headerLeft: null }}
          />
          <Stack.Screen 
            name="CreateHome" 
            component={CreateHomeScreen}
            options={{ title: 'Create Home Profile' }}
          />
          <Stack.Screen 
            name="AddAppliance" 
            component={AddApplianceScreen}
            options={{ title: 'Add Appliance' }}
          />
          <Stack.Screen 
            name="ApplianceDetail" 
            component={ApplianceDetailScreen}
            options={{ title: 'Appliance Details' }}
          />
          <Stack.Screen 
            name="UploadDocument" 
            component={UploadDocumentScreen}
            options={{ title: 'Upload Document' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
