const store = {
    id: 21,
    name: 'Negozio per animali',
    location: {
        city: 'Roma',
        address: 'Via boh 10',
        cap: '00100'
    },
    availability: {
        monday: {
            start: '2021-06-29T09:00:00',
            end: '2021-06-29T12:00:00'
        },
        tuesday: {
            start: '2021-06-29T10:00:00',
            end: '2021-06-29T15:00:00'
        },
        wednesday: null,
        thursday: null,
        friday: {
            start: '2021-06-29T09:00:00',
            end: '2021-06-29T18:00:00'
        },
        saturday: null,
        sunday: {
            start: '2021-06-29T09:00:00',
            end: '2021-06-29T12:00:00'
        }
    }
};

function days() {
    for (let day in store.availability) {
        if (store.availability[day]) {

            store.availability[day].start = new Date(store.availability[day].start).getHours();
            store.availability[day].end = new Date(store.availability[day].end).getHours();
        } else {
            delete store.availability[day];
        }
    }
}

days();
console.log(store);

const person1 = {name: andrea};
