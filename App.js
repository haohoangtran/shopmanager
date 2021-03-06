import {StackNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from "./screens/HomeScreen";
import NewFeedScreen from "./screens/NewFeedScreen";
import ChatScreen from "./screens/ChatScreen";
import OrderScreen from "./screens/OrderScreen";
import CustomerScreen from "./screens/CustomerScreen";
import ProductScreen from "./screens/ProductScreen";
import AddNewCustomer from "./screens/AddNewCustomer";
import XuatKhoScreen from "./screens/XuatKhoScreen";

const RootNavigator = StackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Home: {
        screen: HomeScreen
    },
    NewFeed: {
        screen: NewFeedScreen
    },
    Chat: {
        screen: ChatScreen
    },
    Order: {
        screen: OrderScreen
    },
    Customer: {
        screen: CustomerScreen
    },
    Product: {
        screen: ProductScreen
    },
    AddNewCustomer: {
        screen: AddNewCustomer
    },
    XuatKho: {
        screen: XuatKhoScreen
    },

});

export default RootNavigator;