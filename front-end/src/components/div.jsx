import PropTypes from "prop-types";

export default function Div({
  className,
  children,
  className1,
  className2,
  className3,
}) {
  return (
    <div className={className}>
      <h3 className={className1}>{children[0]}</h3>
      <p className={className2}>{children[1]}</p>
      <p className={className3}>{children[2]}</p>
    </div>
  );
}
Div.propTypes = {
  className: PropTypes.string.isRequired,
  className1: PropTypes.string.isRequired,
  className2: PropTypes.string.isRequired,
  className3: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
