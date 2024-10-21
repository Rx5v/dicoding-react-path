import { useState } from 'react';
import InputText from './InputText';
import TextArea from './TextArea';

const FormInput = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { title });
    // Add logic to handle form submission, such as API requests
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
        <div className="w-6">
            <InputText
                label="Judul"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Masukkan judul"
            />
             <TextArea
        label="Deskripsi"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Masukkan deskripsi"
      />
        </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default FormInput;