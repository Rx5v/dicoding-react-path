/* eslint-disable react/prop-types */
const ButtonMove = ({id, onMove, text}) => {
    return(
        <button className='button bg-secondary' onClick={() => onMove(id)}>{text}</button>
    );
}
export default ButtonMove;