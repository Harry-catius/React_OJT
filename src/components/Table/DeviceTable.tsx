import React from 'react';
import {Button, Table, Tag,Popconfirm} from 'antd';

import {SyncOutlined, MinusCircleOutlined} from '@ant-design/icons';

interface Data  {
    key : number,
    deviceId: number,
    serialNumber: string,
    macAddress : string,
    qrCode: string,
    status : React.ReactNode
}

interface ListProps  {
    deviceList : Data[],
    onDeleteClick : (props : number) => void
}


const DeviceTable: React.FC<ListProps> = (props) => {
    const {deviceList, onDeleteClick} = props;

    const data: Data[] = [];
    for (let i = 0; i < deviceList.length; i++) {
        data.push({
            key : deviceList[i].deviceId,
            deviceId: deviceList[i].deviceId,
            serialNumber: deviceList[i].serialNumber,
            macAddress: deviceList[i].macAddress,
            qrCode: deviceList[i].qrCode,
            status: deviceList[i].status === 'ACTIVE'
                ?  <Tag icon={<SyncOutlined spin />} color="green">ACTIVE</Tag>
                : <Tag icon={<MinusCircleOutlined />} color="red">INACTIVE</Tag>
        });
    }

    console.log(data)

    return (
        <div style={{width:'1500px'}}>
            <Table
                columns={[
                {
                    title: <b>deviceId</b>,
                    width: 50,
                    dataIndex: 'deviceId',
                    key: 'deviceId',
                },
                {
                    title: <b>serialNumber</b>,
                    width: 50,
                    dataIndex: 'serialNumber',
                    key: 'serialNumber',
                },
                {
                    title: <b>macAddress</b>,
                    width: 50,
                    dataIndex: 'macAddress',
                    key: 'macAddress',
                },
                {
                    title: <b>qrCode</b>,
                    width: 50,
                    dataIndex: 'qrCode',
                    key: 'qrCode',
                },
                {
                    title: <b>status</b>,
                    width: 50,
                    dataIndex: 'status',
                    key: 'status'
                },
                {
                    title: <b>update</b>,
                    key: 'update',
                    fixed: 'right',
                    width: 50,
                    render: () => <Button type='primary' size='small'>update</Button>
                },
                {
                    title: <b>delete</b>,
                    key: 'delete',
                    fixed: 'right',
                    width: 50,
                    render: (record) => (<Popconfirm
                        title="해당 기기를 삭제하시겠습니까?"
                        onConfirm={() => onDeleteClick(record.deviceId)}
                        okText="예"
                        cancelText="아니요"
                    >
                        <Button type='default' size='small'>delete</Button>
                    </Popconfirm>)
                },
            ]}
                dataSource={data}
                pagination={false}
            />
        </div>
    );
}

export default DeviceTable;