import React ,{Suspense} from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Device from "../pages/Device/Device";
import HeaderMenu from "./Header/HeaderMenu";
import SiderMenu from "./Sider/SiderMenu";
import DiscardDevice from "../pages/DiscardDevice/DiscardDevice";

const App: React.FC = () => {
    return (
        <Suspense fallback={<LoadingOutlined/>}>
            <HeaderMenu/>
            <div style={{display: 'flex'}}>
                <SiderMenu/>
                <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'50px'}}>
                    <Switch>
                        <Route exact path="/" component={Device}/>
                        <Route exact path="/discard" component={DiscardDevice}/>
                    </Switch>
                </div>
            </div>
        </Suspense>
    );
}

export default App;
