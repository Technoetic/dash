import {Table} from "antd";

function SummaryTable() {

    const dataSource = [
        {
            key: '1',
            summary: 'Minimum',
            temp: 17.14,
        },
        {
            key: '2',
            summary: 'Maximum',
            temp: 17.94,
        },
        {
            key: '2',
            summary: 'Average',
            temp: 17.44,
        },
    ];

    const columns = [
        {
            title: 'Summary',
            dataIndex: 'summary',
            key: 'summary',
        },
        {
            title: 'Temperature (c)',
            dataIndex: 'temp',
            key: 'temp',
        }
        ];

    return (
            <Table dataSource={dataSource} columns={columns} pagination={false} bordered={true}/>
    );
}

export default SummaryTable;