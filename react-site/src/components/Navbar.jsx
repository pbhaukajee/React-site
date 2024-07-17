import Logo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <img className="nav--icon" src={Logo} alt="React-Logo" />
        <h3 className="nav--logo_text">ReactFacts</h3>
      </div>

      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
