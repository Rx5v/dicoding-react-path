/* eslint-disable react/prop-types */
import { showFormattedDate } from "../../utils"
import CardTitle from "./CardTitle"

const CardHeader = ({title, date}) => {
    return(
        <div className="flex flex-col">
            <CardTitle text={title}/>
        <p className="text-slate">{showFormattedDate(date)}</p>
    </div>
    )
}

export default CardHeader;