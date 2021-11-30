import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '@services/navState';


const Bar = styled.span`
  display: block;
  width: 40px;
  height: 5px;
  margin-bottom: 7px;
  background-color: #fff;
`;

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      className={isMenuOpen ? 'active' : ''}
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};

export default HamburgerButton;