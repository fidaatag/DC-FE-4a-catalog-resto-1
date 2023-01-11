import dataresto from '../script/dataresto.json';

function showResto() {
    const resContainer = document.querySelector('.cardcontainer');

    dataresto.restaurants.map( restoItem => {
        resContainer.innerHTML += 
            `
                <div class="card-item">

                    <div class="card-img">
                        <img src="${restoItem.pictureId}" alt="${restoItem.name} Restaurant's photo" srcset="">
                    </div>

                    <div class="card-name">
                        <h4 tabindex="0">${restoItem.name}</h4>
                    </div>

                    <div class="card-desk">
                        <p>${restoItem.description}</p>
                    </div>

                    <div class="card-info">
                        <p>⌂ ${restoItem.city}</p>
                        <p>☆ ${restoItem.rating}</p>
                    </div>

                    <div class="card-booking">
                        <button>Booking</button>
                    </div>

                </div>  
            `
    });    
};

export default showResto;