import { Link } from "react-router-dom";
// import './Header.css'
import './components/Header.css'
const Header = () => {
  return (
    <div>
      <h2>Navber</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to='/user'>Users</Link>
        <Link to="/contact">Contact</Link>
        <Link to='/post'>Post</Link>
     
    
      </nav>
    </div>
  );
};

export default Header;
