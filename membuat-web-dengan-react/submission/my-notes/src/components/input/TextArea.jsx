/* eslint-disable react/prop-types */
import React from 'react';
const TextArea = ({ label, id, value, onChange, placeholder }) => {
  return (
    <div className="textarea-wrapper">
      <label htmlFor={id} className="input-label">{label}</label>
      <textarea
        id={id}
        rows={25}
        className="textarea-field"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default React.memo(TextArea);