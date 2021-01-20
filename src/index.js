import './styles.css';
const debounce = require('lodash.debounce');
import fetchCountries from './js/fetchCountries'
import {cleaningCompany,renderData} from './js/create_markup'
import './js/notification'

const inputRef = document.querySelector('#in');

inputRef.addEventListener('input', debounce((event) => {
    const query = event.target.value
    cleaningCompany();
    fetchCountries(query).then((data) => {
        renderData(data)
    })
},500));   





