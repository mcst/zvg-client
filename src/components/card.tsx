import React, {FC} from "react";
import {Button, ButtonGroup, Card} from "react-bootstrap";
import "./card.css";

type TRealEstate = {
    lastModTime?: string
    titel?: string
    verkehrswert?: string
    grundbuch?: string
    aktenzeichen?: string
    termin?: string
    adresse?: string
    googleMaps?: string
    exposee?: string
    gutachten?: string
    foto?: string
}
interface ICard{
    realEstate:TRealEstate
}
export const RSCard:FC<ICard> = (props) =>{
    const {realEstate} = props;
    const {titel, /*grundbuch,*/ termin, verkehrswert, lastModTime, googleMaps, exposee, gutachten, foto, aktenzeichen} = realEstate||{};
    const card = <Card>
        <Card.Body>
            <Card.Title>{titel}</Card.Title>
            <Card.Text as={"div"}>
                <div className="termin">{termin}</div>
                <div className="aktenzeichen"><label>Aktenzeichen:</label> {aktenzeichen}</div>
                <div className="verkehrswert">{verkehrswert}</div>
                <div className="lastModTime">{lastModTime}</div>
            </Card.Text>
            <ButtonGroup>
                <Button href={googleMaps} target="_blank">google maps</Button>
                {gutachten ? <Button href={`http://localhost:3000/zvglink?${gutachten}`} target="_blank">gutachten</Button> : null}
                {exposee ? <Button href={`http://localhost:3000/zvglink?${exposee}`} target="_blank">exposee</Button> : null}
                {foto? <Button href={`http://localhost:3000/zvglink?${foto}`} target="_blank">foto</Button> : null}
            </ButtonGroup>
        </Card.Body>
    </Card>
    return card;
}
