import React, {useEffect, useState} from 'react';
import './App.css';
import {getRealEstates} from "./serverApi";

function App() {
    const [data, setData] = useState<any>();
    useEffect(()=> {
        const asyncCall = async() => {
            const data = await getRealEstates();
            console.log(data);
            setData(data);
        };
        asyncCall();
    },[]);
    return (
        <div className="App">
            {data?.map((data:any)=>(data?.realEstates?.length>0?<div key={data?.court}>
                    <div>{data.court}</div>
                    <ul>{
                        data?.realEstates?.map((realEstate:any)=>(
                            <li key={realEstate?.titel}>{realEstate?.titel}</li>
                        ))
                    }</ul>
                </div>:null
            ))}
        </div>
    );
}

export default App;
