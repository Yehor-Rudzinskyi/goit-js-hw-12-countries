import singleChoiceTemplate from '../templates/single.hbs';
import multiChoiceTemplate from '../templates/multi.hbs';
import info from './notification'

const singleChoiceRef = document.querySelector('.div_country_list');
const multiChoiceRef = document.querySelector('.list_of_country');

function singleChoice(data) {
   const markup = singleChoiceTemplate(data)
   singleChoiceRef.insertAdjacentHTML('beforeend', markup)
}

 function multiChoice (data) {
    const markup = multiChoiceTemplate(data);
    multiChoiceRef.insertAdjacentHTML('beforeend', markup);
};


 function renderData(data) {
    if (data.length > 10) {
           info({
    type: 'error',
    title: 'Маловато будет -_(ツ)_/¯',
    hide: true,
    delay: 3000,
});
} else if (data.length < 2) {
        singleChoice(data[0]);
} else if (data.length > 2 || data.length < 10) {
        multiChoice(data);
    } else {
         info({
    type: 'error',
    title: 'Попробуй другой рукой',
    hide: true,
    delay: 3000,
});
}
};

function cleaningCompany() {
    singleChoiceRef.innerHTML = '';
    multiChoiceRef.innerHTML = '';
}

export { cleaningCompany, renderData }
