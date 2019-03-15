import React from 'react';

const Input = ({
  text,
  type,
  name,
  value,
  id,
  hidden,
  placeholder,
  className,
  onChange,
  labelClass,
}) => {
  return (
    <label className={labelClass} htmlFor={id}>
      <span>{text}</span>
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        hidden={hidden}
        placeholder={placeholder}
        required
        onChange={onChange}
        className={className}
      />
    </label>
  );
};

export default Input;
