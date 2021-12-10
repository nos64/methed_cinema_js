
import { getVideo } from "./services.js";

const listCard = document.querySelector('.other-films__list'); //Получили ul элемент со страницы куда нужно вставлять карточи


const renderCard = (data) => { //Функция получает данные из API

  listCard.textContent=''; //Очистили все имеющиеся li в HTML

  Promise.all(data.map(async (item) => { //Перебираем масси data, вернули в массив cards и выводим элементы на страницу
  
    const video = await getVideo(item.id, item.media_type)
    const key = video.results[0]?.key;

    const card =document.createElement('li');
    card.className = 'other-films__item';
    
    const link = document.createElement('a');
    if (key) link.href = `https://youtu.be/${key}`
    link.className = 'other-films__link tube';
    // link.dataset.rating = item.vote_average;
     if (item.vote_average) {
      link.dataset.rating = item.vote_average;
     }
     
    const img = document.createElement('img');
    img.className = 'other-films__img';
    img.alt = `постер ${item.title || item.name}`;
    img.src = item.poster_path ? 
    `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}` :
     '/img/no_poster.jpg';
     
      link.append(img);
      card.append(link);
    
    return card;
  })).then(cards => listCard.append(...cards)); // собрали все в массив спред оператором и вставили на страницу в ul)


};


export default renderCard;