/* eslint-disable react/prop-types */
const ButtonRemove = ({id, onDelete}) => {
    return(
        <button className='button bg-danger' onClick={() => onDelete(id)}>Hapus</button>
    );
}
export default ButtonRemove;