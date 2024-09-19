/* eslint-disable react/prop-types */
function DeleteButton({ id, onDelete }) {
  return <button className='contact-item__delete' onClick={() => onDelete(id)}>X</button>
}
 
export default DeleteButton;