import React,{useEffect,useState} from 'react';

import DeviceTable from "../../components/Table/DeviceTable";
import {Button, Typography, message} from "antd";
import AddModal from "../../components/Modal/AddModal";

const {Text, Title} = Typography;

function Device() {
    const [deviceList, setDeviceList] = useState<any>([]);
    const [visible, setVisible] = useState<any>(false);

    useEffect(() => {
        fetch("/devices", {
            method: 'GET',
            // body: JSON.stringify(data), // data can be `string` or {object}!
        }).then(response => response.json())
            .then(result => {
                setDeviceList(result);
                message.success('저장된 기기 불러오기 성공')
            })
            .catch(error => console.error('Error:', error));
    }, [])


    const handleOk = (props: object) => {
        console.log(props)
        setVisible(false)
        fetch("/devices/register", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(props)
        }).then(response => response.json())
            .then(result => {
                if (result.errorCode) {
                    message.error(result.errorMessage);
                } else {
                    setDeviceList(deviceList.concat(result))
                    message.success('저장 성공')
                }
            })
            .catch(error => console.error('Error:', error));
    }

    const handleCancel = (props: boolean) => {
        setVisible(props)
    }

    const onAddButtonClick = (e: any) => {
        setVisible(true);
    }

    const onDeleteClick = (props: number) => {
        fetch(`/devices/${props}`, {
            method: 'DELETE',
        }).then(response => {
            if(response.status === 204) {
                refreshTable(props);
                message.success('삭제 성공');
            }
            else return message.error("기기가 활성화 상태입니다. 비활성화 시켜주세요");
        }).catch(error => {
            if (error.errorCode) {
                message.error(error.errorMessage);
            }
        });
    }

    const refreshTable = (props: number) => {
        setDeviceList(deviceList.filter((item: any) => {
            return item.deviceId !== props
        }))
    }

    return (
        <div>
            <Title level={3}>기기 관리</Title>
            <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '20px'}}>
                <Button type='primary' onClick={onAddButtonClick}>Add Device</Button>
            </div>
            <div>
                <DeviceTable deviceList={deviceList} onDeleteClick={onDeleteClick}/>
                <AddModal
                    visible={visible}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                />
            </div>
        </div>
    );
}

export default Device;