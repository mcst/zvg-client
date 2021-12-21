import React, {useEffect, useState} from 'react';
import './App.css';
import {getRealEstates} from "./serverApi";
import {Card} from "./components/card";

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
            {data?.map((data:any)=>(data?.realEstates?.length>0?
                    <div className={"court-area"} key={data?.court}>
                        <div key={data?.court} className={"court-name"}>{data?.court}</div>
                        <div className={"card-list"}>
                            {data?.realEstates?.map((realEstate:any)=>(
                                <Card key={realEstate.titel} realEstate={realEstate}>
                                </Card>
                            ))}
                        </div>
                    </div>
                :null
            ))}
        </div>
    );
}

export default App;
