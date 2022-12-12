import './Main_startscreen.css';
import Header from '../Header';
import HeaderSm from '../HeaderSm';

function Startscreen() {
  return (
    <div className="Startscreen">
        <Header/>
        <HeaderSm/>
        <div className='content'>
          <p>Мы провели десятки туров и корпоративов на различных акваториях.</p>
          <a href='#'>Посмотреть туры</a>
        </div>
        <div className='empty_block'></div>
    </div>
  );
}

export default Startscreen;