import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { History } from "../screens/History";
import { Match } from "../screens/Match";

const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes() {
    return (
        <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            {/* <Screen name="history" component={History} />
            <Screen name="register" component={Register} />
            <Screen name="match" component={Match} /> */}
        </Navigator>
    )
}