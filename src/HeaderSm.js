import './HeaderSm.css';
import headerArrow from './headerArrow.png';

function HeaderSm() {
  return (
    <div className="HeaderSm">
        <div className='header'>
            <div className='header__button'>
                <img src={headerArrow}/>
                <p>Приобрести тур</p>
            </div>
            <div className='header__button'>
                <img src={headerArrow}/>
                <p>Наш блог</p>
            </div>
        </div>
    </div>
  );
}

export default HeaderSm; 