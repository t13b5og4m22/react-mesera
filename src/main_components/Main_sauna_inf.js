import './Main_sauna_inf.css';
import starBlack from '../star_black.png';
import starGrey from '../star_grey.png';

function Main_sauna_inf() {
  return (
    <div className="Main_sauna_inf">
        <div className='inf__title'>
            <p><span>Походная баня</span> – это специальная палатка, которая вмещает до 4 человек одновременно, и даже веником помахать остаётся место. 
Ну а про магию её сочетания с рекой 
и говорить нечего!</p>
        </div>
        <div className='inf__info'>
            <div className='inf__info_title'>
                <p>Походная баня</p>
            </div>
            <div className='inf__info_stars'>
                <div className='stars__stars'>
                    <img src={starBlack} />
                    <img src={starGrey} />
                    <img src={starGrey} />
                </div>
                <p>Включена в туры по реке Пра</p>
            </div>
            <div className='inf__info_link'>Посмотреть тур &#129125;</div>
        </div>
    </div>
  );
}

export default Main_sauna_inf;