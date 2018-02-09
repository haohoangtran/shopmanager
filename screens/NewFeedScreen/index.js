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
import 'moment/locale/vi'
import {GiftedAvatar} from "react-native-gifted-chat";  // without this line it didn't work
moment.locale('vi')
export default class NewFeedScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            newFeedData:
                [
                    {
                        name: "Hoang Tran Hao",
                        content: "Đăng nhập",
                        date: new Date(),
                    },
                    {
                        name: "Bui Quang Minh",
                        content: "Đăng xuất",
                        date: new Date(),
                    },
                    {
                        name: "Hung Quang Huy",
                        content: "Xuất kho",
                        date: new Date(),
                    },
                    {
                        name: "Hảo Hoàng",
                        content: "Nhập kho",
                        date: new Date(),
                    },
                    {
                        name: "Hoang Tran Ha",
                        content: "Đăng nhập",
                        date: new Date(),
                    },
                    {
                        name: "Hoang Tran ",
                        content: "Đăng xuất",
                        date: new Date(),
                    },
                    {
                        name: "Hoang Tra",
                        content: "Xuất kho",
                        date: new Date(),
                    },
                    {
                        name: "Hoang Tra",
                        content: "Nhập kho",
                        date: new Date(),
                    }
                ]
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderCustom title={"Newfeed"} leftClick={() => {
                    this.props.navigation.goBack()
                }}/>
                <FlatList
                    data={this.state.newFeedData}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                backgroundColor: 'white',
                                width: '97%',
                                height: Dimensions.get("window").height / 8,
                                alignSelf: 'center', alignItems: 'center', paddingLeft: 8,
                                marginVertical: 4, flexDirection: 'row', flex: 1, borderWidth: 0.3,
                            }}
                            onPress={() => {

                            }}>
                            <GiftedAvatar user={{name: item.name}}/>
                            <View style={{flex: 1, height: Dimensions.get("window").height / 8-5, padding: 8,backgroundColor:'white'}}>
                                <Text numberOfLines={1}
                                      style={{fontSize:16,fontWeight:'600'}}>{item.name}</Text>
                                <Text>Giá trị:</Text>
                                <Text>Vừa {item.content} </Text>
                                <Text style={{right:1,bottom:1,position:'absolute'}}>{moment().startOf(item.date).fromNow()}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}