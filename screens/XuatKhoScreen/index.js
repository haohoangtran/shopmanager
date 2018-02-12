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

export default class XuatKhoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: "",
            listKhachHang: [],
        }
    }

    componentDidMount() {
        getFetch()
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderCustom title={"Xuất kho"} leftClick={() => {
                    this.props.navigation.goBack()
                }}/>
                {this.renderContent()}
            </View>
        )
    }

    renderContent() {
        return this.renderChoocustomer();
    }

    renderChoocustomer() {
        return (
            <View>

            </View>
        )

    }

    renderProduct() {

    }

}