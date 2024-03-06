import PropTypes from "prop-types";
export default function Imput({
  className,
  htmlFor,
  className2,
  children,
  type,
  name,
  id,
  className3,
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
          className={className3}
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
  className3: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
