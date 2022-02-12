import {Table} from "antd";

function TimeTable() {

    const dataSource = [
        {
            key: '1',
            temp: 17.44,
        }
    ];

    const columns = [
        {
            title: 'Time',
            dataIndex: 'summary',
            key: 'summary',
        },
        {
            title: 'Temperature (c)',
            dataIndex: 'temp',
            key: 'temp',
            align :'center'
        }
    ];


    return (
            <Table dataSource={dataSource} columns={columns} pagination={false} style={{marginTop : 20}} bordered={true} />
    );
}

export default TimeTable;