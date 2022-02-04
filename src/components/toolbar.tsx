
import react, { useEffect, useState } from "react"
import { getConfig } from "../serverApi";

export function ToolBar (){
    const [options, setOptions] = useState<any[]>([]);
    useEffect(()=>{
        const fetch = async() => {
            const {GERICHTE} = await getConfig();
            const newOptions = [];
            for(const [key, value] of Object.entries(GERICHTE)){
                if(key && value) newOptions.push({key, value});
            }
            setOptions(newOptions);
        }
        fetch()
    },[]);

    const onClick = (value:any) => {
        console.log(value);
    }
    console.log(options);
    return <div>{options.map(option=><ToolBarButton key={option?.key} name={option?.key} onClick={()=>onClick(option)}/>)}</div>;
}

function ToolBarButton(props:{onClick:()=>void, name:string}){
    const {name, onClick} = props;
    const handleClick = (event:any) => {
        const {value} = event.target;
    }
    return <div onClick={onClick}>{name}</div>;
}