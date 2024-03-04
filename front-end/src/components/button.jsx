import PropTypes from "prop-types";

export default function Button({ type, className, children }) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
