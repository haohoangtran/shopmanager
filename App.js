import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/LoginScreen'
const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
});

export default RootNavigator;