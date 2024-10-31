import CardText from "./CardText";

/* eslint-disable react/prop-types */
const CardBody = ({body}) => {
    return (
        <div className="card-body">
            <CardText text={body}/>
        </div>
    )
}

export default CardBody;