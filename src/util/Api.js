import axios from "axios";

// TestPage localhost connect proxy
// .net 에 접근하는 base url 설정 (실서버에 올라가게 되면 해당 path로 변경하여야 한다.)
export const API_URL = 'http://localhost:8080/';
// export const API_URL = 'http://101.101.218.195:5000/';
// export const PrivateKey = 'Sa7f1E73ti13Cs';
export const getData = axios.create({
    baseURL: API_URL,
    // headers: {
    //     authorization: `Bearer ${getCookieFromBrowser('token')}`
    // }
});