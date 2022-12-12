import './Main_tours_info.css';
import starBlack from '../star_black.png';
import starGrey from '../star_grey.png';



function One_star_block() {
  return (
    <div className="One_star_block">
        <img src={starBlack} />
        <img src={starGrey} />
        <img src={starGrey} />
    </div>
  );
}

function Main_tours_info() {
  return (
    <div className="Main_tours_info">
        <div className='tours__title'>
          <h2>Здесь вы можете ознакомиться со всеми возможными турами</h2>
        </div>
        <div className='tours__table'>

          <div className='tours__table-element'>
            <div className='tours__table-element__title'>
              <p>SUP прогулки "Акватории Москвы"</p>
            </div>
            <div className='tours__table-element__info'>
              <One_star_block/>
              <p>Москва-река, Большой Строгинский зат., Химкинское вдхр.</p>
            </div>
            <div className='tours__table-element__price'>
              <p>1 500 ₽</p>
            </div>
          </div> 

          <div className='tours__table-element'>
            <div className='tours__table-element__title'>
              <p>SUP прогулки "Реки Подмосковья"</p>
            </div>
            <div className='tours__table-element__info'>
              <One_star_block/>
              <p>Москва-река, Истра, Шерна, Десна.</p>
            </div>
            <div className='tours__table-element__price'>
              <p>3 500 ₽</p>
            </div>
          </div>

          <div className='tours__table-element'>
            <div className='tours__table-element__title'>
              <p>Тур "Большая Пра"</p>
            </div>
            <div className='tours__table-element__info'>
              <One_star_block/>
              <p>д. Калдево (Рязанская обл.) – д. Заводская Слобода (Рязанская обл.)</p>
            </div>
            <div className='tours__table-element__price'>
              <p>5 000 ₽</p>
            </div>
          </div>

          <div className='tours__table-element'>
            <div className='tours__table-element__title'>
              <p>Тур "Верхняя Пра – лайт"</p>
            </div>
            <div className='tours__table-element__info'>
              <One_star_block/>
              <p>пос. Мещерский Бор (Московская обл.) – д. Стружаны (Рязанская обл.)</p>
            </div>
            <div className='tours__table-element__price'>
              <p>4 000 ₽</p>
            </div>
          </div>

          <div className='tours__table-element'>
            <div className='tours__table-element__title'>
              <p>Тур "Верхняя Пра"</p>
            </div>
            <div className='tours__table-element__info'>
              <One_star_block/>
              <p>пос. Мещерский Бор (Московская обл.) – д. Калдево (Рязанская обл)</p>
            </div>
            <div className='tours__table-element__price'>
              <p>5 000 ₽</p>
            </div>
          </div>

          <div className='tours__table-element'>
            <div className='tours__table-element__title'>
              <p>Тур “Новогодний”</p>
            </div>
            <div className='tours__table-element__info'>
              <One_star_block/>
              <p>пос. Мещерский Бор (Московская обл.) – д. Стружаны (Рязанская обл.)</p>
            </div>
            <div className='tours__table-element__price'>
              <p>4 000 ₽</p>
            </div>
          </div>

          <div className='tours__table-element'>
            <div className='tours__table-element__title'>
              <p>Тур “Зимние выходные”</p>
            </div>
            <div className='tours__table-element__info'>
              <One_star_block/>
              <p>пос. Мещерский Бор (Московская обл.) – д. Калдево (Рязанская обл)</p>
            </div>
            <div className='tours__table-element__price'>
              <p>5 000 ₽</p>
            </div>
          </div>
              
        </div>
    </div>
  );
}

export default Main_tours_info;