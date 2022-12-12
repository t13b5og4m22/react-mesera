import './Main_slider3.css';
import winter from '../winter.jpg';
import house from '../house1.png'
import arrow from '../sliderArrow.png';
import arrow2 from '../sliderArrow2.png';
import {useState} from 'react';

function Slider3element(props) {
    return (
      <div className="Slider3element">
        <div className='element_bg'>
            <img src={props.image}/>
        </div>
        <h2>{props.title}</h2>
        <hr/>
        <div className='element_info'>
            <p>{props.blog}</p>
            <p>{props.date}</p>
        </div>
      </div>
    );
  }


function Main_slider3() {
  const [page, setPage] = useState(1);
  
  return (
    <div className="Main_slider3">
        <div className='slider'>
            {page == 1 && <Slider3element image={winter} title="1Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 1 && <Slider3element image={house} title="1Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 1 && <Slider3element image={winter} title="1Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}

            {page == 2 && <Slider3element image={house} title="2Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 2 && <Slider3element image={winter} title="2Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 2 && <Slider3element image={house} title="2Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}

            {page == 3 && <Slider3element image={winter} title="3Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 3 && <Slider3element image={house} title="3Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 3 && <Slider3element image={winter} title="3Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}

            {page == 4 && <Slider3element image={house} title="4Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 4 && <Slider3element image={winter} title="4Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 4 && <Slider3element image={house} title="4Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}

            {page == 5 && <Slider3element image={winter} title="5Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 5 && <Slider3element image={house} title="5Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 5 && <Slider3element image={winter} title="5Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}

            {page == 6 && <Slider3element image={house} title="6Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 6 && <Slider3element image={winter} title="6Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
            {page == 6 && <Slider3element image={house} title="6Походная баня – это специальная палатк..." blog="Блог / Туризм" date="23 Октября, 2022"/>}
        </div>
        <div className='buttons'>
            <div className='buttons__elements'>
                <img src={arrow2} onClick={() => page == 1 ? setPage(6) : setPage(page-1)}/>
                <p>0{page} <span>/ 06</span></p>
                <img src={arrow} onClick={() => page == 6 ? setPage(1) : setPage(page+1)}/>
            </div>
        </div>
    </div>
  );
}

export default Main_slider3;