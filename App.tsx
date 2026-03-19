import React from 'react';
import { Provider } from 'react-redux'
import store from './src/store/store';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ScreenMatch from './src/screens/ScreenMatch/ScreenMatch';
import ScreenHome from './src/screens/ScreenHome/ScreenHome';
import ScreenOptions from './src/screens/ScreenOptions/ScreenOptions';
import { colorTheme } from './src/components/colorTheme';
import type { RootStackParamList } from './src/navigation/types';
import { useAppSelector } from './src/store/hooks';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const colorModeSelected = useAppSelector(
    (state) => state.teamsReducer.matchConfiguration.colorsPreset
  );
  const screenBg = (colorTheme.mode[colorModeSelected] && colorTheme.mode[colorModeSelected].bg)
    ? colorTheme.mode[colorModeSelected].bg
    : colorTheme.mode[0].bg;
  const baseTheme = colorModeSelected === 0 ? DarkTheme : DefaultTheme;
  const navTheme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: screenBg,
      card: screenBg,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <RootStack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: screenBg },
          statusBarColor: screenBg,
        }}
      >
        <RootStack.Group>
          <RootStack.Screen 
            name="Home" 
            component={ScreenHome} 
            options={{ headerShown: false }} 
          />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{
            presentation: 'card',
            headerShadowVisible: false,
            contentStyle: { backgroundColor: screenBg },
            statusBarColor: screenBg,
          }}>
          <RootStack.Screen
            name="ScreenMatch"
            component={ScreenMatch}
            options={{
              headerShown: false
            }} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{
            presentation: 'card',
            contentStyle: { backgroundColor: screenBg },
            statusBarColor: screenBg,
          }}>
          <RootStack.Screen
            name="ScreenOptions"
            component={ScreenOptions}
            options={{ 
              headerShown: false
          }} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};




export default function App() {

  return (
    <Provider store={store}>


      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>


    </Provider>
  );
}
