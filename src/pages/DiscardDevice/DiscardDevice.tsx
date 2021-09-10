import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';

DiscardDevice.propTypes = {

};

function DiscardDevice() {
    const [discardDeviceList, setDiscardDeviceList] = useState([]);

    useEffect(()=>{
        fetch("/devices/discard",{
            method: 'GET',
            // body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(result => setDiscardDeviceList(result))
            .catch(error => console.error('Error:', error));

    },[])
    console.log(discardDeviceList)

    return (
        <div>폐기된 기기들</div>
    );
}

export default DiscardDevice;