import "./HoverText.css";

const HoverText = ({ children, text }) => {
  return (
    <div className="hover-info">
      {children} <span className="tooltiptext">{text}</span>
    </div>
  );
};

export default HoverText;
