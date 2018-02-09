import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TextInput, TouchableOpacity, FlatList, Dimensions,
    View
} from 'react-native';
import {repeat} from '../../utils'
import HeaderCustom from "../../components/Header";
import {Avatar, Icon} from "react-native-elements";
import Search from 'react-native-search-box';
import {GiftedAvatar} from "react-native-gifted-chat";
import shadowProps from "../../configs/shadow";
import moment from 'moment'
import 'moment/locale/vi'
import {Header} from "react-navigation";  // without this line it didn't work
moment.locale('vi')
export default class AddNewCustomer extends React.Component{
    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <HeaderCustom title={"Them khach hang"} leftClick={()=>{}}/>
                <Text>adhas</Text>
            </View>
        )
    }
}