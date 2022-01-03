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
    const {titel, grundbuch, termin, verkehrswert, lastModTime, googleMaps, exposee, gutachten, foto, aktenzeichen} = realEstate||{};
    console.log(titel)
    const card = <div className={"card"}>
        <div className="title">{titel}</div>
        <div className="termin">{termin}</div>
        <div className="aktenzeichen"><label>Aktenzeichen:</label> {aktenzeichen}</div>
        <div className="verkehrswert">{verkehrswert}</div>
        <div className="lastModTime">{lastModTime}</div>
        <div><a href={googleMaps} target="_blank">google maps</a></div>
        {gutachten ? <div><a href={`http://localhost:3000/zvglink?${gutachten}`}>gutachten</a></div> : null}
        {exposee ? <div><a href={`http://localhost:3000/zvglink?${exposee}`}>exposee</a></div> : null}
        {foto? <div><a href={`http://localhost:3000/zvglink?${foto}`}>foto</a></div> : null}
    </div>
    return card;
}
