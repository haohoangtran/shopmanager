import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TextInput, TouchableOpacity, FlatList, Dimensions,
    View
} from 'react-native';
import menus from '../../configs/menu'
import HeaderCustom from "../../components/Header";
import {Icon} from "react-native-elements";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        let width = Dimensions.get('window').width;
        return (
            <View style={{flex: 1}}>
                <HeaderCustom title={"Menu"} iconName={"ios-menu"}/>
                <FlatList
                    scrollEnabled={false}
                    numColumns={3}
                    contentContainerStyle={{flex: 1, alignItems: 'center', backgroundColor: 'white', paddingTop: 16}}
                    keyboardDismissMode="on-drag"
                    data={menus}
                    keyExtractor={(item) => item.screenName}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                backgroundColor: 'transparent',
                                margin: width / 40,
                            }}
                            onPress={() => {
                                navigate(item.screenName)
                            }}>
                            <View style={{
                                backgroundColor: '#3cbdef', borderRadius: 10, width: width / 4,
                                height: width / 4, justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Icon color={"white"} name={item.iconName} type={"font-awesome"} size={24}/>
                            </View>
                            <Text numberOfLines={1} style={{alignSelf: 'center'}}>{item.title}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    };
}