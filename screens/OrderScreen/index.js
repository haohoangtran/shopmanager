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
import {GiftedChat} from "react-native-gifted-chat";  // without this line it didn't work
moment.locale('vi')
export default class OrderScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            order: [


            ]
        }
    }
    randomDate(start=new Date(2018, 1, 8), end=new Date()) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    componentDidMount(){
        this.setState({
            order:[
                {
                    name: "Anh lực",
                    value: "500.000đ",
                    sale: '27%',
                    date: this.randomDate()
                },{
                    name: "Anh lực",
                    value: "500.000đ",
                    sale: '27%',
                    date: this.randomDate()
                },{
                    name: "Anh lực",
                    value: "500.000đ",
                    sale: '27%',
                    date: this.randomDate()
                },{
                    name: "Anh lực",
                    value: "500.000đ",
                    sale: '27%',
                    date: this.randomDate()
                },{
                    name: "Anh lực",
                    value: "500.000đ",
                    sale: '27%',
                    date: this.randomDate()
                },{
                    name: "Anh lực",
                    value: "500.000đ",
                    sale: '27%',
                    date: this.randomDate()
                },{
                    name: "Anh lực",
                    value: "500.000đ",
                    sale: '27%',
                    date: this.randomDate()
                },{
                    name: "Anh lực",
                    value: "500.000đ",
                    sale: '27%',
                    date: this.randomDate()
                },{
                    name: "Anh lực",
                    value: "500.000đ",
                    sale: '27%',
                    date: this.randomDate()
                },{
                    name: "Anh lực",
                    value: "500.000đ",
                    sale: '27%',
                    date: this.randomDate()
                },
            ].sort((a,b)=>b.date.getTime()-a.date.getTime())
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderCustom title={"Order"} leftClick={() => {
                    this.props.navigation.goBack()
                }}/>
                <FlatList
                    data={this.state.order}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{borderWidth:0.3,paddingHorizontal:4, margin: 2, width: '95%', alignSelf: 'center',height:Dimensions.get('window').height/10}}>
                            <Text>Khách: {item.name}</Text>
                            <Text>Giá trị: {item.value}</Text>
                            <Text>Chiết khấu: {item.sale}</Text>
                            <Text style={{right:1,bottom:1,position:'absolute'}}> {moment(item.date).fromNow()}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}