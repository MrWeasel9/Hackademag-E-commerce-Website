import { FC } from "react";

import "./Recommended.css";

interface RecommendedProps {
  handleClick: (value: string) => void;
}

const Recommended: FC<RecommendedProps> = () => {
  return (
    <div>
      <h2 className="recommended-title"> Products </h2>
      
    </div>
  );
};

export default Recommended;
