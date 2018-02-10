import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TextInput, TouchableOpacity, FlatList, Dimensions,
    View, ScrollView
} from 'react-native';
import {repeat} from '../../utils'
import HeaderCustom from "../../components/Header";
import {Avatar, FormValidationMessage, Icon} from "react-native-elements";
import Search from 'react-native-search-box';
import {GiftedAvatar} from "react-native-gifted-chat";
import shadowProps from "../../configs/shadow";
import moment from 'moment'
import 'moment/locale/vi'
import {Header} from "react-navigation";  // without this line it didn't work
import {FormLabel, FormInput} from 'react-native-elements'
import InputWithLabale from "../../components/InputWithLabale";

moment.locale('vi')
export default class AddNewCustomer extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            forms: [
                {
                    name: "Họ ",
                    isRequired: true,
                    key: "hoCustomer"
                },
                {
                    name: "Tên",
                    isRequired: true,
                    key: "nameCustomer"
                },
                {
                    name: "Công ty",
                    key: "companyCustomer",
                    isRequired: true
                },

                {
                    name: "Địa chỉ",
                    isRequired: false,
                    key: "addressCustomer",
                },
                {
                    name: "Mã số thuế",
                    isRequired: false,
                    key: "idthueCustomer"
                }
            ],
            formValue: {}
        }
    }

    render() {

        return (
            <View>
                <HeaderCustom title={"Them khach hang"} leftClick={() => {
                    this.props.navigation.goBack()
                }}
                              rightChildren={
                                  <TouchableOpacity style={{
                                      backgroundColor: 'transparent',
                                      justifyContent: 'center',
                                      paddingHorizontal: 16
                                  }}>
                                      <Icon name={"md-checkmark"} type={"ionicon"} size={24} color={"white"}/>
                                  </TouchableOpacity>
                              }
                />
                <FlatList
                    data={this.state.forms}
                    renderItem={({item}) =>
                        <InputWithLabale labelText={item.name}
                                         placeholder={`Nhập ${item.name}`}
                                         isRequired={item.isRequired}
                                         onChangeText={(text) => {
                                             let formValue = this.state.formValue;

                                             formValue[item.key] = text
                                             this.setState({
                                                 formValue
                                             })
                                         }}/>}/>
            </View>
        )
    }
}