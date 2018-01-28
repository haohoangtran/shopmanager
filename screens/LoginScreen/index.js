import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TextInput,
    View
} from 'react-native';
import {Icon} from "react-native-elements";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menua',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menuaââsa',
});

export default class App extends Component<{}> {
    static navigationOptions = {
        header: null
    };

    render() {
        return (


            <View style={styles.container}>
                <Image source={require('../../images/bglogin.jpg')}
                       style={{width: '100%', height: '100%', position: 'absolute'}} opacity={0.8}/>
                <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 26, fontFamily: "Lobster-Regular", color: 'white'}}>abdas</Text>
                </View>
                <View style={{flex: 4, alignItems: 'center', opacity: 0.8}}>
                    <View style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.3)',
                        alignItems: 'center',
                        borderRadius: 5,
                        borderWidth: 1,
                        height: 46,
                        width: '80%',
                        flexDirection: 'row',
                        borderBottomWidth: 0.5,
                        borderBottomColor: 'white',
                        marginTop: 8,
                        marginBottom: 2
                    }}>
                        <Icon
                            name='sc-telegram'
                            type='evilicon'
                            color='#517fa4'
                        />
                        <TextInput style={{fontSize: 18, color: 'white', height: 46, width: '80%', paddingLeft: 4}}
                                   placeholder={"Tên đăng nhập"} placeholderTextColor="white"/>
                    </View>
                    <View style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.3)',
                        alignItems: 'center',
                        borderRadius: 5,
                        borderWidth: 1,
                        height: 46,
                        width: '80%',
                        flexDirection: 'row',
                        borderTopWidth: 0
                    }}>
                        <Icon
                            name='sc-telegram'
                            type='evilicon'
                            color='#517fa4'
                        />
                        <TextInput style={{fontSize: 18, color: 'white', height: 46, width: '80%', paddingLeft: 4}}
                                   placeholder={"Tên đăng nhập"} placeholderTextColor="white"/>
                    </View>
                </View>
                <View style={{flex: 1, margin: 10}}>
                    <Text>abdas</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
});
