import React, { useContext, useState } from 'react';
import './navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { logoPokedex } from '../../assets/img';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';

function Header(props){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const {selectEs, selectEn, selectDe, text, language} = useContext(PokemonContext)
  let fav = text.favorite.find(item => item.id === language).name
  let textSelect = text.idioma.find(item => item.id === language)


  return (
      <Navbar className='shadow' color="light" light expand="md">
        <NavbarBrand>
          <Link to='/'>
           <img className='logo' src={logoPokedex} alt=''/>
        </Link>
          </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-5" navbar>
            <NavItem>
              <Link to='/favorites' className='nav-link'>{fav}</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {textSelect.lang}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={selectEs}>
                 {textSelect.es}
                </DropdownItem>
                <DropdownItem onClick={selectEn}>
                  {textSelect.en}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={selectDe}>
                  {textSelect.de}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Header;
