import React, { useEffect, useState } from 'react';
import './Dropdown.css';
import 'material-symbols';

const menu = [
  {
    name: "Profile",
    icon: "account_circle"
  },
  // Other menu items
  {
    name: "Settings",
    icon: ""
  }
]

const MenuButton = ({ icon, name }) => (
  <button>
    <span className='material-symbols-outlined'>{icon}</span>
    <span>{name}</span>
  </button>
)

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    document
      .body.addEventListener("click", () => setIsOpen(false));
  })

  return (
    <div className='dropdown'>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        {menu.map((item) => (
          <MenuButton
            key={item.name}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </div>
      <button onClick={handleClick}>
          Actions
          <span className='material-symbols-outlined'>
            {isOpen ? "close" : "expand_more"}
          </span>
      </button>
    </div>
  )
}

export default Dropdown;
