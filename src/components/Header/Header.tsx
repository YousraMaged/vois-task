import { Menubar } from "primereact/menubar";
import "./Header.css";

const Header = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: '/'
    },
  ];

  return <Menubar className="p-menubar-secondary" model={items} />;
};

export default Header;