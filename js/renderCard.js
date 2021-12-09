
const listCard = document.querySelector('.other-films__list'); //Получили ul элемент со страницы куда нужно вставлять карточи


const renderCard = (data) => { //Функция получает данные из API

  listCard.textContent=''; //Очистили все имеющиеся li в HTML

const cards = data.map((item) => { //Перебираем масси data, вернули в массив cards и выводим элементы на страницу
  // console.log('item: ', item);
  
  const card =document.createElement('li');
  card.className = 'other-films__item';
  
  const link = document.createElement('a');
  link.className = 'other-films__link';
  link.dataset.rating = item.vote_average;
   if (item.vote_average === 0) {
    link.dataset.rating = '-';
   }
   
  const img = document.createElement('img');
  img.className = 'other-films__img';
  img.alt = `постер ${item.title || item.name}`;
  img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;

  link.append(img);
  card.append(link);


  return card;
});

listCard.append(...cards); // собрали все в массив спред оператором и вставили на страницу в ul

};




export default renderCard;