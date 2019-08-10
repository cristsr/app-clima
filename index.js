const apiKey = '921098cebe5557d3f398e2e1942eceb4';

const $buscar = document.getElementById('seleccionar');
const $ciudad = document.getElementById('ciudad');
const $resultado = document.getElementById('resultado');

const ciudades = [{
        title: 'Bogota',
        value: 'bogota,co'
    },
    {
        title: 'Londres',
        value: 'london,uk'
    },
    {
        title: 'Washington',
        value: 'washington,usa'
    },
    {
        title: 'Boston',
        value: 'boston,usa'
    },
    {
        title: 'Brasilia',
        value: 'brasilia,br'
    },
    {
        title: 'Paris',
        value: 'paris,frc'
    },
    {
        title: 'Berlin',
        value: 'berlin,ger'
    },
    {
        title: 'Quito',
        value: 'quito,ec'
    },
    {
        title: 'Madrid',
        value: 'madrid,es'
    },
    {
        title: 'Roma',
        value: 'Roma,it'
    }
];

ciudades.forEach(value => $ciudad.innerHTML += `<option value="${value.value}">${value.title}</option>`)

$buscar.addEventListener('click', async() => {

    const ciudad = $ciudad.value;
    const climaActual = await getClima(ciudad);
    $resultado.innerHTML = '';
    climaActual.weather.forEach(value => $resultado.innerHTML += value.description + '<br>');

});


async function getClima(ciudad) {
    const url = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${ciudad}`;
    const response = await axios.get(url);
    return response.data;
}
