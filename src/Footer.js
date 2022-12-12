import './Footer.css';
import logo from './logo-footer.png';
import inst from './footer-inst.png';
import vk from './footer-vk.png';
import mscard from './mscard.png';
import visa from './visa.png';
import mir from './mir.png';

function Footer() {
  return (
    <div className="Footer">
      <div className='Footer__logo'>
        <div className='Footer__logo_line'></div>
        <div className='Footer__logo_img'><img src={logo} /></div>
        <div className='Footer__logo_line'></div>
      </div>
      <div className='Footer__nav'>
        <a href=''>Главная</a>
        <a href=''>Туры</a>
        <a href=''>Блог</a>
        <a href=''>Баня</a>
        <a href=''>FAQ</a>
        <a href=''>Контакты</a>
      </div>
      <div className='Footer__phone'>+7 916 722-71-18</div>
      <div className='Footer__info'>
        <div className='info__media-btns'>
          <img src={inst}/>
          <img src={vk}/>
        </div>
        <p>Мещера Тур - All rights reserved.<br/>Копирование материалов без указания обратной ссылки запрещено</p>
        <div className='info__cards-icos'>
          <img src={mscard} />
          <img src={visa} />
          <img src={mir} />
        </div>
      </div>
    </div>
  );
}

export default Footer;