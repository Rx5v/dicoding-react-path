/* eslint-disable react/prop-types */
const ButtonRemove = ({id, onDelete}) => {
    return(
        <button className='button' style={{width: '100%'}} onClick={() => onDelete(id)}>Remove</button>
    );
}
export default ButtonRemove;