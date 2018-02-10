import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TextInput, TouchableOpacity, FlatList, Dimensions,
    View, ScrollView
} from 'react-native';

import PropTypes from 'prop-types';
import HeaderCustom from "../Header";

export default class InputWithLabale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    render() {
        return (
            <View>
                <FormLabel>{this.props.labelText}</FormLabel>
                <FormInput placeholder={this.props.placeholder} underlineColorAndroid={"gray"} onChangeText={(text) => {
                    this.setState({text});
                    if(this.props.onChangeText){
                        this.props.onChangeText(text);
                    }
                }}/>
                <FormValidationMessage>{!this.state.text&&this.props.isRequired ? `${this.props.labelText} bắt buộc` : ""}</FormValidationMessage>
            </View>
        )
    }
}
InputWithLabale.propTypes = {
    labelText: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    onChangeText: PropTypes.func,
};
InputWithLabale.defaultProps = {
    isRequired: false,
    onChangeText: (text) => {
    },
};