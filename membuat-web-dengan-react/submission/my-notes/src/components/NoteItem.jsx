/* eslint-disable react/prop-types */
import { formatDateTime } from "../utils/formater";
import Card from "./card/Card";
import CardText from "./card/CardText";
import CardTitle from "./card/CardTitle";

const NoteItem = ({title, body, date}) => {
    return(
    <Card>
        <div className="flex flex-col">
        <CardTitle text={title}/>
        <p style={{color: '#b4b4b4'}}>{formatDateTime(date)}</p>
        </div>
        <CardText text={body}/>
    </Card>
    )
}
export default NoteItem;