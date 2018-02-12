import DataConfig from '../configs/data'
import {TOKEN} from '../configs/const'
import Toast from 'react-native-root-toast'
function repeat(a, n, r) {
    return !n ? r : repeat(a, --n, (r || []).concat(a));
}

const BASE_URL = 'http://192.168.16.103:6969/';

function getFetch(link, method = "GET", body = {}) {

    return fetch(`${BASE_URL}${link}`, {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "token": DataConfig.token || "aaaa"
        },
        body: JSON.stringify(body),
    });
}

function showToast(msg, time = 3000) {
    let toast = Toast.show(msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        }
    });
}

export {
    repeat, getFetch, showToast
}