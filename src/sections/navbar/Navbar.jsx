import { IoIosColorPalette } from "react-icons/io";
import './navbar.css'
import Logo from "../../assets/logo.jpg";
import data from "./data";
import { useModalContext } from "../../context/modalContext";


const Navbar = () => {
  const { showModalHandler } = useModalContext();
  console.log(data)
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo"  className="nav__logo"/>
        </a>
         <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
         <button id='theme__icon' onClick={showModalHandler}><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar