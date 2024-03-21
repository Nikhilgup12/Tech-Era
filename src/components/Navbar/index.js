import {Link} from 'react-router-dom'
import {NavContainer, NavContent, NavLogo} from './styledComponent'

const Navbar = () => (
  <NavContainer>
    <NavContent>
      <Link to="/">
        <NavLogo
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </Link>
    </NavContent>
  </NavContainer>
)

export default Navbar
