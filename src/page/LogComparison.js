import Header from "../component/common/Header";
import LeftMenu from "../component/LeftMenu";
import Submit from "../component/Submit";
import Line from "../component/Line";
import Bar from "../component/Bar";
import SummaryTable from "../component/SummaryTable";
import Footer from "../component/common/Footer";
import TimeTable from "../component/TimeTable";

export default function LogComparison(){
    return(
        <div style={{float:'left', width: 'calc(100% - 300px)'}}>
            <Submit/>
            <Line/>
            <Bar/>

            <div style={{width : 400}}>
            <SummaryTable/>
            <TimeTable/>
            </div>
        </div>
    )
}