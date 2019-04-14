import React from "react"
import "./header.css"
import logo from "../../images/logo.png"
import logoWhite from "../../images/logoWhite.png"
import { Link } from "gatsby"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      isTop: true,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }
  render() {
    return (
      <div className={this.state.isTop ? "Pageheader" : "PageheaderScroll"}>
        <Navbar light expand="md" className="nav">
          <NavbarBrand>
            <Link to="/">
              <img
                className="logo"
                alt="STRATUS"
                src={this.state.isTop ? logo : logoWhite}
              />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className='navbarToggleBtn' isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Link to="/">
                <NavItem>
                  <NavLink>Home</NavLink>
                </NavItem>
              </Link>
              <Link to="/pages">
                <NavItem>
                  <NavLink>Pages</NavLink>
                </NavItem>
              </Link>
              <Link to="/portfolio/">
                <NavItem>
                  <NavLink>Portfolio</NavLink>
                </NavItem>
              </Link>
              <Link to="/features/">
                <NavItem>
                  <NavLink>Features</NavLink>
                </NavItem>
              </Link>
              <Link to="/pages/">
                <NavItem>
                  <NavLink>Blog</NavLink>
                </NavItem>
              </Link>
              <Link to="/pages/">
                <NavItem>
                  <NavLink>Shop</NavLink>
                </NavItem>
              </Link>
              <Link to="/purchase">
                <NavItem>
                  <NavLink>
                    <span className="purchase">Purchase</span>
                  </NavLink>
                </NavItem>
              </Link>
              <Link to="/cart">
                <NavItem>
                  <NavLink>
                    <span className="material-icons">shopping_basket</span>
                  </NavLink>
                </NavItem>
              </Link>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
