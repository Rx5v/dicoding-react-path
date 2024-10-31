/* eslint-disable react/prop-types */
import React from 'react';

const InputText = ({ label, id, value, onChange, placeholder, maxLength }) => {
  return (
    <div className="input-text-wrapper">
      <label htmlFor={id} className="input-label">{label}</label>
      {maxLength && <small> Sisa Karakter : {maxLength - value.length}</small>}
      <input
        type="text"
        style={{marginTop: '1vh'}}
        id={id}
        className="input-field"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};

export default React.memo(InputText);