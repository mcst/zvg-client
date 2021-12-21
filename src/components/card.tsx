import react, {FC} from "react";
import "./card.css"

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
export const Card:FC<ICard> = (props) =>{
    const {realEstate} = props;
    const {titel, grundbuch, termin, verkehrswert, lastModTime, googleMaps, exposee, gutachten, foto} = realEstate||{};
    console.log(titel)
    const card = <div className={"card"}>
        <div className="title">{titel}</div>
        <div className="termin">{termin}</div>
        <div className="verkehrswert">{verkehrswert}</div>
        <div className="lastModTime">{lastModTime}</div>
        <div><a href={googleMaps} target="_blank">google maps</a></div>
        <div><a href={`localhost:3000/zvglink${gutachten}`} target="_blank">gutachten</a></div>
        <div><a href={`localhost:3000/zvglink${exposee}`} target="_blank">exposee</a></div>
        <div><a href={`localhost:3000/zvglink${foto}`} target="_blank">foto</a></div>
    </div>
    return card;
}
