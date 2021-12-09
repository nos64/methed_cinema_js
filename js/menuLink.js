import {
  getPopular,
  getTop,
  getTrends
} from './services.js';
import renderCard from './renderCard.js';

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav')

const menuLink = () => {
  getNav.forEach(nav => {
    nav.addEventListener('click', event => {

      const target = event.target.closest('.get-nav__link'); // closest проверяет был ли клик по элементу с передаваемым селектором 

      if (target) {
        event.preventDefault();

        filmWeek.style.display = 'none'; //Скрываем при клике заголовок
        title.textContent = target.textContent; //Записываем заголовок информацию из ссылки куда кликнули
        
        //Популярные фильмы
        if (target.classList.contains('get-nav__link_popular-movies')) {
          getPopular('movie')
          .then(data => renderCard(data.results))
        }

         //Популярные сериалы
         if (target.classList.contains('get-nav__link_popular-tv')) {
          getPopular('tv')
          .then(data => renderCard(data.results))
        }

        //Топ сериалы фильмы
        if (target.classList.contains('get-nav__link_top-movies')) {
          getTop('movie')
          .then(data => renderCard(data.results))
        }

        //Топ сериалы сериалы
        if (target.classList.contains('get-nav__link_top-tv')) {
          getTop('tv')
          .then(data => renderCard(data.results))
        }

        //Тренды
        if (target.classList.contains('get-nav__link_triends')) {
          getTrends('all', 'day')
          .then(data => renderCard(data.results))
        }

      }
    })
  })
}

export default menuLink;