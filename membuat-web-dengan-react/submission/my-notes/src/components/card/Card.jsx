import ButtonMove from "../button/ButtonMove"
import ButtonRemove from "../button/ButtonRemove"
import CardBody from "./CardBody"
import CardHeader from "./CardHeader"

/* eslint-disable react/prop-types */
const Card = ({id, title, body, date, onMove, onDelete, type, }) => {
    return(
    <div className="card">
        <div className="flex flex-col gap-3">
            <CardHeader title={title} date={date}/>
            <CardBody body={body}/>
        </div>
        <div className="flex">
            <ButtonMove id={id} onMove={onMove} text={type}/>
            <ButtonRemove id={id} onDelete={onDelete}/>
        </div>

    </div>
    )
}
export default Card