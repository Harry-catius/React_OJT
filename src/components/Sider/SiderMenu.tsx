import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Sider } = Layout;

function SiderMenu() {
    return (
        <div>
            <Sider width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100vh'}}
                >
                    <SubMenu key="sub1" title="Device Admin" style={{marginTop: '24px'}}>
                        <Menu.Item key="1">
                            <Link to='/'>기기 관리 </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/discard'>폐기된 기기 관리 </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </div>
    );
}

export default SiderMenu;