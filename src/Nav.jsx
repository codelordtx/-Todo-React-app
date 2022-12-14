import logo from "./Garphics/logo.jpg";
import "./Nav.css";

export function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} className="logo" alt="logo"/>
      <div className="SubNav">
        <a href="#" id="active">
          My Todos
        </a>
        <a href="#"> Add Todo</a>
        <a href="#"> Completed Todos </a> 
      </div>
    </div>
  );
}
