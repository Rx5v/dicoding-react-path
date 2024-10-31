/* eslint-disable react/prop-types */
import FormInput from "./input/FormInput"

const AddModal = ({show, onClose, onSave}) => {
    return(
    <div id="myModal" className="modal" style={{display: show}}>
        <div className="modal-content">
            <div className="modal-header">
                <p>Add Notes</p>
                <span className="close" onClick={() => onClose()}>&times;</span>
            </div>
            <div className="modal-body">
                <FormInput onHandleSubmit={onSave}/>
            </div>
        </div>
    </div>
    )
}

export default AddModal