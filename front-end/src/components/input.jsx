import PropTypes from "prop-types";

export default function Imput({
  className,
  htmlFor,
  className2,
  children,
  type,
  name,
  id,
  defaultValue,
  value,
  className3,
  defaultChecked,
  placeholder,
}) {
  return (
    <>
      <p className={className}>
        <label htmlFor={htmlFor} className={className2}>
          {children}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          defaultValue={defaultValue}
          value={value}
          className={className3}
          defaultChecked={defaultChecked}
          placeholder={placeholder}
        ></input>
      </p>
    </>
  );
}

Imput.propTypes = {
  className: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  className2: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  className3: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  placeholder: PropTypes.string,
};
