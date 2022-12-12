import './Main_info2.css';
import star1 from '../star1.png';
import star2 from '../star2.png';

function Main_info2() {
  return (
    <div className="Main_info2">
        <div className='container'>
          <h3>Мы провели десятки туров и корпоративов на различных акваториях.</h3>
          <p>Москва-река, Большой Строгинский<br/>зат., Химкинское вдхр.</p>
          <img src={star1} className='star star1'></img>
          <img src={star2} className='star star2'></img>
        </div>        
    </div>
  );
}

export default Main_info2