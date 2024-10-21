import React from 'react';
import PropTypes from 'prop-types';

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

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

TextArea.defaultProps = {
  placeholder: ''
};

export default React.memo(TextArea);