let data = [
    {
        id: 1,
        country: 'Canadá',
        capital: 'Ottawa',
        population: 37346000
    },
    {
        id: 2,
        country: 'Estados Unidos',
        capital: 'Washintong D.C',
        population: 329071000
    },
    {
        id: 3,
        country: 'México',
        capital: 'Ciudad de México',
        population: 125357000
    },
    {
        id: 4,
        country: 'Costa Rica',
        capital: 'Belmopón',
        population: 5032000
    },
    {
        id: 5,
        country: 'Panamá',
        capital: 'Panamá',
        population: 4190000
    },
    {
        id: 6,
        country: 'Cuba',
        capital: 'La Habana',
        population: 11212000
    },
    {
        id: 7,
        country: 'Argentina',
        capital: 'Buenos Aires',
        population: 44723000
    },
    {
        id: 8,
        country: 'Bolivia',
        capital: 'La Paz',
        population: 11390000
    },
    {
        id: 9,
        country: 'Brazil',
        capital: 'Brazilia',
        population: 210461000
    },
    {
        id: 10,
        country: 'Chile',
        capital: 'Santiago',
        population: 18880000
    },
    {
        id: 11,
        country: 'Colombia',
        capital: 'Bogotá',
        population: 45878000

    },
    {
        id: 12,
        country: 'Ecuador',
        capital: 'Quito',
        population: 17170000

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

        idCell.innerHTML = list[i].id;
        countryCell.innerHTML = list[i].country;
        capitalCell.innerHTML = list[i].capital;




        countryCell.addEventListener('click', modalOpen = () => {

            modalContainer = document.querySelector('.modal-container')
            content = document.querySelector('.modal-content')
            nameCountry = document.querySelector('.name-country')
            modalContainer.classList.add('opened');

            nameCountry.innerHTML = list[i].country;
            content.innerHTML = list[i].population + ' ' + 'habitantes';
            
        });

    }
}
printBody()

modalHide = () => {
    const modalContainer = document.querySelector(".modal-container")
    modalContainer.classList.remove("opened");
}