import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TextInput, TouchableOpacity, FlatList, Dimensions,
    View
} from 'react-native';

import HeaderCustom from "../../components/Header";
import {Avatar, Icon} from "react-native-elements";
import shadowProps from "../../configs/shadow";
import moment from 'moment'
import 'moment/locale/vi'  // without this line it didn't work
moment.locale('vi')


export default class CustomerScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            customer: [
                {
                    name: "Anh Hùng",
                    company: "Công ty TNHH ABC",
                    masothue: "12312412421321",
                    chietkhauTB: '25%'
                },
                {
                    name: "Anh Hà",
                    company: "Công ty TNHH ABC",
                    masothue: "12312412421321",
                    chietkhauTB: '25%'
                },
                {
                    name: "Anh Huy",
                    company: "Công ty TNHH ABC",
                    masothue: "12312412421321",
                    chietkhauTB: '25%'
                },
                {
                    name: "Anh Huỳnh",
                    company: "Công ty TNHH ABC",
                    masothue: "12312412421321",
                    chietkhauTB: '25%'
                }
            ]
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderCustom leftClick={()=>{this.props.navigation.goBack()}} title={"Khách hàng"} rightChildren={
                    <TouchableOpacity style={{alignSelf:'center',paddingEnd:8,paddingTop:8}}
                    onPress={()=>{}}>
                        <Icon name={"ios-add"} type={"ionicon"} size={32} color={"white"}/>
                    </TouchableOpacity>
                }/>
                <FlatList
                    style={{flex: 1, alignSelf: 'center'}}
                    data={this.state.customer}
                    renderItem={({item}) =>
                        <TouchableOpacity style={{
                            width: Dimensions.get('window').width * 0.95,
                            paddingHorizontal: 4,
                            height: Dimensions.get('window').height / 10,
                            borderWidth: 0.3,
                            marginVertical: 8
                        }}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}