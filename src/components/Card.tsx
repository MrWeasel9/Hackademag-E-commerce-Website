import { FC } from "react";
import { BsFillBagFill } from "react-icons/bs";

interface CardProps {
  img: string;
  title: string;
  star: JSX.Element; // Assuming star is a JSX element representing a star icon
  reviews: string;
  prevPrice: number;
  newPrice: number;
  onClick: () => void; // Click event handler prop
}

const Card: FC<CardProps> = ({ img, title, star, reviews, prevPrice, newPrice, onClick }) => {
  const handleClick = () => {
    // Call the onClick event handler when the card is clicked
    onClick();
  };

  return (
    <section className="card" onClick={handleClick}>
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
