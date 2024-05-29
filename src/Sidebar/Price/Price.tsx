import { FC } from "react";
import Input from "../../components/Input";
import "./Price.css";

interface PriceProps {
  handleChange: (value: any) => void; // Change 'any' to the appropriate type
}

const Price: FC<PriceProps> = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="50"
        title="$0 - 50"
        name="test1"/>

      <Input
        handleChange={handleChange}
        value="100"
        title="$50 - $100"
        name="test2"/>

      <Input
        handleChange={handleChange}
        value="150"
        title="$100 - $150"
        name="test3"/>

      <Input
        handleChange={handleChange}
        value="200"
        title="Over $150"
        name="test4"/>
    </div>
  );
};

export default Price;
