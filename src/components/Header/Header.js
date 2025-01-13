import logo from "./logo.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="section" data-testid="header">
      <header className="App-header text-center">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
    </div>
  );
}

export default Header;
