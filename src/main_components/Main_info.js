import './Main_info.css';

function Main_info() {
  return (
    <div className="Main_info">
        <p><span>Самые интересные локации</span> Москвы,<br/>
            Подмосковья и не только;<br/>
            Обучение основам <span>управления сапбордом;</span><br/>
            Аренду оборудования;<br/> 
            Скидки <span>постоянным клиентам;</span><br/> 
            Сотрудничество с Event- агенствами;<br/> 
            <span>Индивидуальные программы</span> (корпоративы,<br/> 
            дни рождения и тд);<br/> 
            Помощь в выборе и покупке досок;
        </p>
        <div className='numbers'>
                <div className='numbers__element'>
                    <h3>20+</h3>
                    <p>SUP-бордов</p>
                </div>
                <div className='numbers__element'>
                    <h3>7</h3>
                    <p>Туров</p>
                </div>
                <div className='numbers__element'>
                    <h3>1200</h3>
                    <p>Клиентов</p>
                </div>
                <div className='numbers__element'>
                    <h3>42</h3>
                    <p>Отзыва</p>
                </div>
        </div>
        <div className='numbersSm'>
                <div className='numbersSm__row'>
                    <div className='numbers__elementSm'>
                        <h3>20+</h3>
                        <p>SUP-бордов</p>
                    </div>
                    <div className='numbers__elementSm'>
                        <h3>7</h3>
                        <p>Туров</p>
                    </div>
                </div>
                <div className='numbersSm__row'>
                    <div className='numbers__elementSm'>
                        <h3>1200</h3>
                        <p>Клиентов</p>
                    </div>
                    <div className='numbers__elementSm'>
                        <h3>42</h3>
                        <p>Отзыва</p>
                    </div>
                </div>
        </div>
    </div>
  );
}

export default Main_info;