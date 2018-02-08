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

export default class ProductScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    IDHangHoa: 1,
                    MaHangHoa: 'MH00001',
                    IDLoaiHang: [10, 10],
                    TenHangHoa: 'Đầu cốt đồng SC 6',
                    SoLuongTonKho: 50,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'Đầu cốt các loại',
                    Hang: null
                },
                {
                    IDHangHoa: 2,
                    MaHangHoa: 'MH00002',
                    IDLoaiHang: [10, 10],
                    TenHangHoa: 'Đầu cốt đồng dài 6, 10, 16',
                    SoLuongTonKho: 100,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'Đầu cốt các loại',
                    Hang: null
                },
                {
                    IDHangHoa: 3,
                    MaHangHoa: 'MH00003',
                    IDLoaiHang: [10, 10],
                    TenHangHoa: 'Đầu cốt đồng nhôm AM',
                    SoLuongTonKho: 100,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'Đầu cốt các loại',
                    Hang: null
                },
                {
                    IDHangHoa: 4,
                    MaHangHoa: 'MH00004',
                    IDLoaiHang: [10, 10],
                    TenHangHoa: 'Ống nối nhôm',
                    SoLuongTonKho: 100,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'Đầu cốt các loại',
                    Hang: null
                },
                {
                    IDHangHoa: 5,
                    MaHangHoa: 'MH00005',
                    IDLoaiHang: [10, 10],
                    TenHangHoa: 'Ống nối đồng',
                    SoLuongTonKho: 100,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'Đầu cốt các loại',
                    Hang: null
                },
                {
                    IDHangHoa: 6,
                    MaHangHoa: 'MH00006',
                    IDLoaiHang: [5, 5],
                    TenHangHoa: 'Cầu chì át - hãng TQ',
                    SoLuongTonKho: 500,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'phụ kiện tủ điện',
                    Hang: null
                },
                {
                    IDHangHoa: 7,
                    MaHangHoa: 'MH00007',
                    IDLoaiHang: [5, 5],
                    TenHangHoa: 'Ống chì cho cầu chì át - hãng TQ',
                    SoLuongTonKho: 500,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'phụ kiện tủ điện',
                    Hang: null
                },
                {
                    IDHangHoa: 8,
                    MaHangHoa: 'MH00008',
                    IDLoaiHang: [5, 5],
                    TenHangHoa: 'sứ OA',
                    SoLuongTonKho: 400,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'phụ kiện tủ điện',
                    Hang: null
                },
                {
                    IDHangHoa: 9,
                    MaHangHoa: 'MH00009',
                    IDLoaiHang: [5, 5],
                    TenHangHoa: 'sứ kẹp thanh',
                    SoLuongTonKho: 200,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'phụ kiện tủ điện',
                    Hang: null
                },
                {
                    IDHangHoa: 10,
                    MaHangHoa: 'MH00010',
                    IDLoaiHang: [6, 6],
                    TenHangHoa: 'Máy cắt',
                    SoLuongTonKho: 50,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'thiết bị đóng cắt tự động',
                    Hang: null
                },
                {
                    IDHangHoa: 11,
                    MaHangHoa: 'MH00011',
                    IDLoaiHang: [6, 6],
                    TenHangHoa: 'ABN100A hãng LS',
                    SoLuongTonKho: 50,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'thiết bị đóng cắt tự động',
                    Hang: null
                },
                {
                    IDHangHoa: 12,
                    MaHangHoa: 'MH00012',
                    IDLoaiHang: [6, 6],
                    TenHangHoa: 'MCB 10A, 15A, 20A',
                    SoLuongTonKho: 50,
                    IDDonVi: 1,
                    DonVi: 'Cái',
                    TenLoai: 'thiết bị đóng cắt tự động',
                    Hang: 'Himel'
                },
                {
                    IDHangHoa: 13,
                    MaHangHoa: 'MH00013',
                    IDLoaiHang: [9, 9],
                    TenHangHoa: 'Dây oval (VTCFK) 2 x 1,5',
                    SoLuongTonKho: 100,
                    IDDonVi: 2,
                    DonVi: 'mét',
                    TenLoai: 'dây, cáp điện',
                    Hang: 'Cadisun'
                },
                {
                    IDHangHoa: 14,
                    MaHangHoa: 'MH00014',
                    IDLoaiHang: [9, 9],
                    TenHangHoa: 'Dây oval (VTCFK) 2 x 2,5',
                    SoLuongTonKho: 100,
                    IDDonVi: 2,
                    DonVi: 'mét',
                    TenLoai: 'dây, cáp điện',
                    Hang: 'Cadisun'
                },
                {
                    IDHangHoa: 15,
                    MaHangHoa: 'MH00015',
                    IDLoaiHang: [9, 9],
                    TenHangHoa: 'Dây oval (VTCFK) 2 x 4',
                    SoLuongTonKho: 100,
                    IDDonVi: 2,
                    DonVi: 'mét',
                    TenLoai: 'dây, cáp điện',
                    Hang: 'Cadisun'
                },
                {
                    IDHangHoa: 16,
                    MaHangHoa: 'MH00016',
                    IDLoaiHang: [9, 9],
                    TenHangHoa: 'Dây oval (VTCFK) 2 x 1,5',
                    SoLuongTonKho: 100,
                    IDDonVi: 2,
                    DonVi: 'mét',
                    TenLoai: 'dây, cáp điện',
                    Hang: 'Ngọc Khánh'
                },
                {
                    IDHangHoa: 17,
                    MaHangHoa: 'MH00017',
                    IDLoaiHang: [9, 9],
                    TenHangHoa: 'Dây oval (VTCFK) 2 x 2,5',
                    SoLuongTonKho: 100,
                    IDDonVi: 2,
                    DonVi: 'mét',
                    TenLoai: 'dây, cáp điện',
                    Hang: 'Ngọc Khánh'
                },
                {
                    IDHangHoa: 18,
                    MaHangHoa: 'MH00018',
                    IDLoaiHang: [9, 9],
                    TenHangHoa: 'Dây oval (VTCFK) 2 x 4',
                    SoLuongTonKho: 100,
                    IDDonVi: 2,
                    DonVi: 'mét',
                    TenLoai: 'dây, cáp điện',
                    Hang: 'Ngọc Khánh'
                }
            ]
        }
    }
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderCustom title={"Mặt hàng"}/>
                <FlatList
                    style={{flex:1}}
                    data={this.state.products}
                    renderItem={({item}) =>
                        <TouchableOpacity style={{borderWidth:0.3,margin:4}}>
                            <Text>Tên: {item.TenHangHoa}</Text>
                            <Text>TenLoai: {item.TenHangHoa}</Text>
                            <Text>Tồn: {item.SoLuongTonKho} {item.DonVi}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}