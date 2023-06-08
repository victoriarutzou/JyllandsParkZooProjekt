import { NavLink } from "react-router-dom";
import armbaandIcon from "../photos/armbaand-icon-01.svg";
import underholdningIcon from "../photos/underholdning-icon-01.svg";
import billetIcon from "../photos/billet-icon-01.svg";
import kortIcon from "../photos/kort-icon-01.svg";

export default function Nav() {
  return (
    <nav className="bottom-navigation">
      <div className="menu">
        <NavLink to="/Armbaand" exact activeClassName="active">
          <img src={armbaandIcon} alt="Armbaand" className="Navikon"/>
        </NavLink>
        <NavLink to="/underholdning" activeClassName="active">
          <img src={underholdningIcon} alt="Underholdning" className="Navikon"/>
        </NavLink>
        <NavLink to="/billet" activeClassName="active">
          <img src={billetIcon} alt="Billet" className="Navikon"/>
        </NavLink>
        <NavLink to="/fejlside" activeClassName="active">
          <img src={kortIcon} alt="Kort" className="Navikon"/>
        </NavLink>
      </div>
    </nav>
  );
}
