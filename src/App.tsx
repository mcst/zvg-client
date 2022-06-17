import React, {useEffect, useState} from 'react';
import './App.css';
import {getRealEstates} from "./serverApi";
import {RSCard} from "./components/card";
import {ToolBar} from "./components/toolbar";
import { Accordion } from 'react-bootstrap';

export interface iCourtFilter{
name:string, value:boolean
}
function App() {
    const [data, setData] = useState<any>(()=>[]);
    const [activeKey, setActiveKey] = useState<string>("0");
    const [courtFilter, setCourtFilter] = useState< iCourtFilter[]>(()=>[]);
    useEffect(()=>{
        setCourtFilter(data?.filter((d:any)=>d.realEstates.length>=1)?.map((d:any)=> ({name:d.court, value:false})))
    }, [data]);
    const filteredData = data.filter((d:any)=>courtFilter.find(filter=>filter.name === d.court && filter.value));
    useEffect(()=> {
        const asyncCall = async() => {
            const data = await getRealEstates();
            setData(data);
        };
        asyncCall();
    },[]);
    console.log(data)
    return (
        <div className="App">
            <ToolBar onChange={setCourtFilter} courtsFilter={courtFilter}/>
            <Accordion defaultActiveKey={activeKey}>
            {filteredData?.map((data:any, index:number)=>(data?.realEstates?.length>0?
            <Accordion.Item key={data?.titel||index} eventKey={`${index}`} onClick={()=>setActiveKey(index.toString())}>
                <Accordion.Header>{data?.court}</Accordion.Header>
                <Accordion.Body>
                        <div className={"card-list"}>
                            {data?.realEstates?.map((realEstate:any, index:number)=>(
                                <RSCard key={index} realEstate={realEstate}>
                                </RSCard>
                            ))}
                        </div>
                        </Accordion.Body>
                    </Accordion.Item>
                :null
            ))}
            </Accordion>
        </div>
    );
}

export default App;
