import './Header.css';
import logo from './mesera-logo.svg';

function Header() {
  return (
    <div className="Header">
      <div className='wrapper'>
        <a href='#'>Главная</a>
        <a href='#'>Туры</a>
        <a href='#'>Баня</a>
        <a href='#'><img src={logo}/></a>
        <a href='#'>Блог</a>
        <a href='#'>FAQ</a>
        <a href='#'>Контакты</a>
      </div>
    </div>
  );
}

export default Header;