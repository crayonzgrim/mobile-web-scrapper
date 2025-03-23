import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LinkListScreen } from "./LinkListScreen"

const Stack = createNativeStackNavigator()

export default function MainLayout() {
  return (
    <Stack.Navigator
      initialRouteName="LinkList"
      screenOptions={{
        presentation: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen name="LinkList" component={LinkListScreen} />
      {/* <Stack.Screen name="LinkDetail" component={LinkDetailScreen} /> */}
    </Stack.Navigator>
  )
}

