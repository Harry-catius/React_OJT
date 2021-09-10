import React,{useState} from 'react';
import {Button, Modal, Typography, Form, Input} from 'antd';

const { Title, Text } = Typography;


type ModalProps ={
    visible : boolean,
    handleOk : (props : object) => void,
    handleCancel : (props: boolean) => void
}

const AddModal: React.FC<ModalProps> = (props) => {
    const {handleCancel, visible, handleOk} = props;

    const [form ,setForm] = useState<any>({
        serialNumber : '',
        macAddress: '',
        qrCode: ''
    })

    return (
        <div>
            <Modal
                visible={visible}
                title='Add Device'
                onCancel={() => handleCancel(false)}
                footer={[
                    <Button
                        key="back"
                        type="default"
                        onClick={() => handleCancel(false)}
                    >
                        취소
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        onClick={() => {
                            handleOk(form)
                            setForm({
                                serialNumber : '',
                                macAddress: '',
                                qrCode: ''})
                        }}
                    >
                        확인
                    </Button>,
                ]}
            >
                <Title level={4}><Text mark>기기 추가하기</Text></Title>

                <Form>
                    <Form.Item label={<b>SerialNumber</b>} rules={[{ required: true }]}>
                        <Input value = {form.serialNumber} onChange={(event => setForm({...form, serialNumber: event.currentTarget.value}))}/>
                    </Form.Item>
                    <Form.Item  label={<b>macAddress</b>} rules={[{ required: true }]}>
                        <Input value = {form.macAddress} onChange={(event => setForm({...form, macAddress: event.currentTarget.value}))}/>
                    </Form.Item>
                    <Form.Item  label={<b>qrCode</b>} rules={[{ required: true }]} >
                        <Input value = {form.qrCode} onChange={(event => setForm({...form, qrCode: event.currentTarget.value}))}/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AddModal;