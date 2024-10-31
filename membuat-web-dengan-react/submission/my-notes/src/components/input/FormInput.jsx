/* eslint-disable react/prop-types */
import { useState } from 'react';
import InputText from './InputText';
import TextArea from './TextArea';

const FormInput = ({onHandleSubmit}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isArchive, setIsArchive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleSubmit({title, description, isArchive})

    // reset form
    setTitle('')
    setDescription('')
    setIsArchive(false)
  };
  return (
    <form onSubmit={handleSubmit} className="form-group">
        <div className="flex flex-col gap-3">
            <InputText
                label="Judul"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Masukkan judul"
                maxLength={50}
            />
             <TextArea
              label="Deskripsi"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Masukkan deskripsi"
            />
            <div className="flex" style={{alignContent: 'center'}}>
            <label htmlFor="isArchive">Arsipkan</label>
            <input type="checkbox" style={{width: '1rem'}} name="isArchive" checked={isArchive} id="isArchive" onChange={(e) => setIsArchive(e.target.checked)}/>
            </div>
        </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default FormInput;