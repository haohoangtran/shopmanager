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


export default class CustomerScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            lastPositionScrollY: 0,
            positionScrollY: 0,
        }
    }

    componentDidMount() {
        this.setState({
            customer: repeat([
                {
                    name: "Anh Hùng",
                    company: "Công ty TNHH ABC",
                    masothue: "12312412421321",
                    chietkhauTB: '25%'
                },
                {
                    name: "Anh Yo",
                    company: "Công ty TNHH ABC",
                    masothue: "12312412421321",
                    chietkhauTB: '25%'
                },
                {
                    name: "Anh JKS",
                    company: "Công ty TNHH ABC",
                    masothue: "12312412421321",
                    chietkhauTB: '25%'
                },
                {
                    name: "Anh Quang",
                    company: "Công ty TNHH ABC",
                    masothue: "12312412421321",
                    chietkhauTB: '25%'
                }
            ], 10)
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderCustom leftClick={() => {
                    this.props.navigation.goBack()
                }} title={"Khách hàng"} rightChildren={
                    <TouchableOpacity style={{alignSelf: 'center', paddingEnd: 8, paddingTop: 8}}
                                      onPress={() => {
                                          let {navigate}=this.props.navigation;
                                          navigate('AddNewCustomer')
                                      }}>
                        <Icon name={"ios-add"} type={"ionicon"} size={32} color={"white"}/>
                    </TouchableOpacity>
                }/>
                <FlatList
                    onScroll={this.handleScroll.bind(this)}
                    style={{flex: 1, alignSelf: 'center'}}
                    data={this.state.customer}
                    renderItem={({item}) =>
                        <TouchableOpacity style={{
                            width: Dimensions.get('window').width * 0.95,
                            paddingHorizontal: 4,
                            height: Dimensions.get('window').height / 10,
                            borderWidth: 0.3,
                            flex: 1,
                            marginVertical: 4,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            elevation: 1
                        }}>
                            <GiftedAvatar user={{name: item.name}}/>
                            <View style={{flex: 1, marginLeft: 8}}>
                                <Text>{item.name}</Text>
                                <Text>{item.company}</Text>
                                <Text style={{position: 'absolute', top: 2, right: 2}}>0123456789</Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
                {(() => {
                    if (this.state.lastPositionScrollY >= this.state.positionScrollY && !this.state.positionScrollY) {
                        return (
                            <View style={{position: 'absolute', top: 56, width: '100%'}}>
                                <Search

                                />
                            </View>
                        )
                    }
                })()}
            </View>
        )
    }

    handleScroll(event) {
        console.log(event.nativeEvent.contentOffset.y);
        let lastPositionScrollY = this.state.positionScrollY;
        this.setState({
            lastPositionScrollY,
            positionScrollY: event.nativeEvent.contentOffset.y,
        })
    }
}