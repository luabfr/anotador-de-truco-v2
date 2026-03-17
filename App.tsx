import React from 'react';
import { Provider } from 'react-redux'
import store from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenMatch from './src/screens/ScreenMatch/ScreenMatch';
import ScreenHome from './src/screens/ScreenHome/ScreenHome';
import ScreenOptions from './src/screens/ScreenOptions/ScreenOptions';
import { colorTheme } from './src/components/colorTheme';

const RootStack = createNativeStackNavigator();




export default function App() {

  return (
    <Provider store={store}>


      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Group>
            <RootStack.Screen 
              name="Home" 
              component={ScreenHome} 
              options={{ headerShown: false }} 
            />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              presentation: 'modal',
              headerStyle: { backgroundColor: `${colorTheme.mode[0].bg}` },
              headerTintColor: `${colorTheme.mode[0].text2}`,
              headerTitleStyle: { fontWeight: 'normal' },
              headerShadowVisible: false,
            }}>
            <RootStack.Screen
              name="ScreenMatch"
              component={ScreenMatch}
              options={{
                title: "Ver Menu",
                headerBackVisible: false
              }} />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              presentation: 'modal',
              headerStyle: { backgroundColor: `${colorTheme.mode[0].bg}` },
              headerTintColor: `${colorTheme.mode[0].text2}`,
              headerTitleStyle: { fontWeight: 'bold' },
              headerShadowVisible: false,              
            }}>
            <RootStack.Screen
              name="ScreenOptions"
              component={ScreenOptions}
              options={{ 
                title: "Volver", 
                headerBackVisible: false
            }} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>


    </Provider>
  );
}


