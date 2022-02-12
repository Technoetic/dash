import SummaryTable from "./component/SummaryTable";

import Line from "./component/Line";
import Submit from "./component/Submit";

import LeftMenu from "./component/LeftMenu";
import Footer from "./component/common/Footer";
import Bar from "./component/Bar";
import Header from "./component/common/Header";
import LogComparison from "./page/LogComparison";
import {useEffect, useState} from "react";
import {getData} from "./util/Api";


function App() {

    const [test, setTest] = useState({key : ''})

    useEffect(()=>{
        getData.get('/member/me').then(r=>setTest(r.data))
    },[]);

    return (
        <>
            <Header/>
            <LeftMenu/>

            {/*contents page*/}
            <LogComparison/>

            {/*<Footer/>*/}
        </>
    );
}

export default App;
