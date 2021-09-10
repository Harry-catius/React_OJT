import React from 'react';
import { Layout,Menu } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;

export default function HeaderMenu() {
    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" >
                    <Link to='/'>
                    <img src={process.env.PUBLIC_URL + "/logo.png"} alt='로고이미지' style={{width:'130px',height:'40px'}}/>
                    </Link>
                </Menu>
            </Header>
        </Layout>
    );
}