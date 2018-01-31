import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from "./screens/HomeScreen";
const RootNavigator = StackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Home: {
        screen: HomeScreen
    }

});

export default RootNavigator;