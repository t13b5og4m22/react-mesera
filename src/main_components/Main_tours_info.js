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

const tours = [
  {
    title: 'SUP прогулки "Акватории Москвы"',
    text: 'Москва-река, Большой Строгинский зат., Химкинское вдхр.',
    price: '1 500 ₽',
  },
  {
    title: 'SUP прогулки "Реки Подмосковья"',
    text: 'Москва-река, Истра, Шерна, Десна.',
    price: '1 500 ₽',
  },
  {
    title: 'Тур "Большая Пра',
    text: 'д. Калдево (Рязанская обл.) – д. Заводская Слобода (Рязанская обл.)',
    price: '5000 ₽',
  },
  {
    title: 'Тур "Верхняя Пра – лайт"',
    text: 'пос. Мещерский Бор (Московская обл.) – д. Стружаны (Рязанская обл.)',
    price: '4000 ₽',
  },
  {
    title: 'Тур "Верхняя Пра"',
    text: 'пос. Мещерский Бор (Московская обл.) – д. Калдево (Рязанская обл)',
    price: '5000 ₽',
  },
  {
    title: 'Тур “Новогодний”',
    text: 'пос. Мещерский Бор (Московская обл.) – д. Стружаны (Рязанская обл.)',
    price: '4000 ₽',
  },
  {
    title: 'Тур “Зимние выходные”',
    text: 'пос. Мещерский Бор (Московская обл.) – д. Калдево (Рязанская обл)',
    price: '5000 ₽',
  },
]

function Main_tours_info() {
  return (
    <div className="Main_tours_info">
        <div className='tours__title'>
          <h2>Здесь вы можете ознакомиться со всеми возможными турами</h2>
        </div>
        <div className='tours__table'>
          {tours.map((item) => 
            <div className='tours__table-element'>
              <div className='tours__table-element__title'>
                <p>{item.title}</p>
              </div>
              <div className='tours__table-element__info'>
                <One_star_block/>
                <p>{item.text}</p>
              </div>
              <div className='tours__table-element__price'>
                <p>{item.price}</p>
              </div>
            </div>
          )}
        </div>
    </div>
  );
}

export default Main_tours_info;