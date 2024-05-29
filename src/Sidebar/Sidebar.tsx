import { FC } from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

interface SidebarProps {
  handleChange: (value: any) => void; // Change 'any' to the appropriate type
}

const Sidebar: FC<SidebarProps> = ({ handleChange }) => {
  return (
    <section className="sidebar">
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </section>
  );
};

export default Sidebar;
