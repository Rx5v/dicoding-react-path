import ButtonRemove from "../button/ButtonRemove"

/* eslint-disable react/prop-types */
const Card = ({children}) => {
    return(
    <div className="card">
        <div style={{display: "flex", flexDirection:'column', gap:'3vh'}}>
            {children}
        </div>
        <div className="flex">
            <ButtonRemove/>
            <ButtonRemove/>
        </div>

    </div>
    )
}
export default Card