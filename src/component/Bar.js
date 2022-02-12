import {Column} from "@ant-design/charts";

function Bar() {
    const data = [
        {
            type: '家具家电',
            sales: 38,
        }
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle',
            // 配置样式
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '销售额',
            },
        },
    };
    return (
        <div style={{padding : 10}}>
            <Column {...config} />
        </div>
    );
}

export default Bar;