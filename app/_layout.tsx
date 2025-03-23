import { RecoilPersist } from "@/hooks/useRecoilPersist";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import MainLayout from "./(main)/_layout";
import AddLinkScreen from "./(main)/AddLinkScreen";
import LinkDetailScreen from "./(main)/LinkDetailScreen";

const Stack = createNativeStackNavigator()

export default function RootLayout() {
  return (
    <RecoilRoot>
      <SafeAreaProvider style={{ flex: 1 }}>
        <RecoilPersist>
          <Stack.Navigator
            initialRouteName="(main)"
            screenOptions={{
              presentation: "containedModal",
              headerShown: false
            }}
          >
            <Stack.Screen name="(main)" component={MainLayout} />
            <Stack.Screen
              name="AddLink"
              component={AddLinkScreen}
              options={{ presentation: "containedModal" }}
            />
            <Stack.Screen
              name="LinkDetail"
              component={LinkDetailScreen}
              options={{ presentation: "card" }}
            />
          </Stack.Navigator>
        </RecoilPersist>
      </SafeAreaProvider>
    </RecoilRoot>
  )
}

// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';
//
// import { useColorScheme } from '@/hooks/useColorScheme';
//
// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();
//
// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });
//
//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);
//
//   if (!loaded) {
//     return null;
//   }
//
//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }
