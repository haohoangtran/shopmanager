import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    View
} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, CheckBox} from 'react-native-elements'
import {Button, Icon} from "react-native-elements";
import shadow from '../../configs/shadow'
import LinearGradient from 'react-native-linear-gradient';
import {Header} from "react-navigation";
import {getFetch, showToast} from "../../utils";
import {getPrefData, savePrefData} from "../../utils/sharePref";
import {PASSWORD, TOKEN, USER_NAME} from "../../configs/const";
import DataConfig from "../../configs/data";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menua',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menuaââsa',
});

export default class LoginScreen extends Component<{}> {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            checked: false
        }
    }

    async componentDidMount() {
        let username = await getPrefData(USER_NAME) || "";
        let password = await getPrefData(PASSWORD) || "";
        this.setState({username, password, checked: Boolean(username)})
    }

    startLogin() {
        getFetch("login", "POST", {username: this.state.username, password: this.state.password})
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.token) {
                    savePrefData(TOKEN, responseJson.token);
                    if (this.state.checked) {
                        savePrefData(USER_NAME, this.state.username);
                        savePrefData(PASSWORD, this.state.password);
                    } else {
                        savePrefData(USER_NAME, "");
                        savePrefData(PASSWORD, "");
                    }
                    DataConfig.token = responseJson.token;
                    const {navigate} = this.props.navigation;
                    navigate('Home');
                } else {
                    showToast("Tên tài khoản hoặc mật khẩu không đúng!")
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#1b60ad', '#3dc4ea']} style={{flex: 4.5}}>

                </LinearGradient>
                <View style={{flex: 6, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>

                </View>
                <View style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    top: '35%',
                    left: '5%',
                    right: '5%',
                    bottom: '15%', ...shadow,
                    padding: 8, justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 24,
                        marginTop: 8,
                        alignSelf: 'center',
                        fontFamily: 'Arapey-Regular'
                    }}>LOGIN</Text>
                    <View style={{flex: 2, paddingLeft: 8}}>
                        <FormLabel labelStyle={{color: '#3e87d3'}}>Username</FormLabel>
                        <FormInput value={this.state.username} underlineColorAndroid={"gray"}
                                   onChangeText={(username) => {
                                       this.setState({username});
                                   }}/>
                        <FormLabel labelStyle={{color: '#3e87d3'}}>Password</FormLabel>
                        <FormInput value={this.state.password} secureTextEntry={true} underlineColorAndroid={"gray"}
                                   onChangeText={(password) => {
                                       this.setState({password});
                                   }}/>
                        <CheckBox
                            textStyle={{color: 'gray', fontFamily: 'System', backgroundColor: 'white'}}
                            title='Remember me'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                            containerStyle={{backgroundColor: 'transparent', borderColor: 'white'}}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    underlayColor="transparent"
                    onPress={() => {
                        this.startLogin()
                    }}
                    style={{
                        ...shadow,
                        height: 48,
                        position: 'absolute',
                        bottom: '10%',
                        width: '70%',
                        borderRadius: 24,
                        alignSelf: 'center',
                        backgroundColor: '#611edc',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{fontSize: 18, color: 'white',}}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    topElement: {
        paddingTop: Platform.OS === 'ios' ? 16 : 0,
        paddingVertical: 16,
        elevation: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: Header.height,
        backgroundColor: 'transparent'
    }
});
