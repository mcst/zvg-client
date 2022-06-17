import { Button, ButtonGroup } from "react-bootstrap";
import {iCourtFilter} from "../App";

export function ToolBar (props:{onChange:(value:any)=>void, courtsFilter?:iCourtFilter[]}){
    const {courtsFilter=[], onChange} = props;


    const onClick = (name:string) => {
        const newActiveOptions = courtsFilter.map(court=>court.name === name? {name:court.name, value:!court.value}:court);
        onChange(newActiveOptions);
    }
    return <ButtonGroup key={"buttonGroup"}>{courtsFilter.map((option, index)=><ToolBarButton key={option.name||index} active={option.value} name={option?.name} onClick={()=>onClick(option.name)}/>)}</ButtonGroup>;
}

function ToolBarButton(props:{onClick:()=>void, name:string, active:boolean}){
    const {name, onClick, active} = props;
    const btnProps:any = {};
    if(active) btnProps.active =true
    return <Button key={name} variant="outline-primary" onClick={onClick} {...btnProps}>{name}</Button>;
}
