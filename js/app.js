let data = [
    {
        id: 1,
        country: 'Nigeria',
        capital: 'Abuya',
        population: 195874740,
        continent: 'Africa'
    },
    {
        id: 2,
        country: 'Estados Unidos',
        capital: 'Washintong D.C',
        population: 329071000,
        continent: 'América'
    },
    {
        id: 3,
        country: 'Alemania',
        capital: 'Berlín',
        population: 83166711,
        continent: 'Europa'
    },
    {
        id: 4,
        country: 'Turquía',
        capital: 'Ankara',
        population: 83154997,
        continent: 'Asia'
    },
    {
        id: 5,
        country: 'Panamá',
        capital: 'Panamá',
        population: 4190000,
        continent: 'América'
    },
    {
        id: 6,
        country: 'Bélgica',
        capital: 'Bruselas',
        population: 11549888,
        continent: 'Europa'
    },
    {
        id: 7,
        country: 'China',
        capital: 'Pekín',
        population: 1395380000,
        continent: 'Asia'
    },
    {
        id: 8,
        country: 'Egipto',
        capital: 'El Cairo',
        population: 96980000,
        continent: 'Africa'
    },
    {
        id: 9,
        country: 'Costa Rica',
        capital: 'Belmopón',
        population: 5032000,
        continent: 'América'
    },
    {
        id: 10,
        country: 'Nueva Zelanda',
        capital: 'Wellington',
        population: 4930000,
        continent: 'Oceanía'
    },
    {
        id: 11,
        country: 'Islas Salomón',
        capital: 'Honiara',
        population: 652858,
        continent: 'Oceanía'
    },
    {
        id: 12,
        country: 'Canadá',
        capital: 'Ottawa',
        population: 37346000,
        continent: 'América'
    }
]

printBody = () => {
    let list = data;
    tbody = document.querySelector('#table tbody')
    tbody.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
        let row = tbody.insertRow(i);
        let idCell = row.insertCell(0),
            countryCell = row.insertCell(1),
            capitalCell = row.insertCell(2);
        populationCell = row.insertCell(3);

        idCell.innerHTML = list[i].id;
        countryCell.innerHTML = list[i].country;
        capitalCell.innerHTML = list[i].capital;
        populationCell.innerHTML = list[i].population;
        countryCell.classList.add('cursor');


        countryCell.addEventListener('click', modalOpen = () => {
            modalContainer = document.querySelector('.modal-container')
            content = document.querySelector('.modal-content')
            nameCountry = document.querySelector('.name-country')
            modalContainer.classList.add('opened');

            nameCountry.innerHTML = list[i].country;
            content.innerHTML = list[i].continent;
            content.classList.add('uppercase');
        });

    }
}
printBody()

modalHide = () => {
    const modalContainer = document.querySelector(".modal-container")
    modalContainer.classList.remove("opened");
}