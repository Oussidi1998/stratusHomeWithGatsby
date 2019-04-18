import React from "react"
import "./header.css"
import logo from "../../images/logo.png"
import logoWhite from "../../images/logoWhite.png"
import { Link } from "gatsby"
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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

          <Nav className="ml-auto" navbar>
            <Link>
              <LinkScroll
                activeClass="active"
                to="cover"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <NavItem>
                  <NavLink>
                    <span className="purchase">Join Our Beta</span>
                  </NavLink>
                </NavItem>
              </LinkScroll>
            </Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header
