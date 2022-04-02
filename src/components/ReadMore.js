import { useState } from "react";
import "./ReadMore.css";
import { ReactComponent as DownArrow } from "../assets/icons/down-arrow-svgrepo-com.svg";
import { ReactComponent as UpArrow } from "../assets/icons/up-arrow-svgrepo-com.svg";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <div onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "read more" : "show less "}
        {isReadMore ? (
          <DownArrow className="read-more-icon" />
        ) : (
          <UpArrow className="read-more-icon" />
        )}
      </div>
    </p>
  );
};

export default ReadMore;
