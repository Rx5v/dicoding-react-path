import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ label, id, value, onChange, placeholder }) => {
  return (
    <div className="input-text-wrapper">
      <label htmlFor={id} className="input-label">{label}</label>
      <input
        type="text"
        id={id}
        className="input-field"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default React.memo(InputText);