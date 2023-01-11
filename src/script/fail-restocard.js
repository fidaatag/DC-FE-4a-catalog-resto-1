import axios from "axios";

function showdata() {

    // const config = {
    //     headers: {
    //       Accept: 'application/json',
    //     },
    // }

    axios.get('./src/script/dataresto.json')
        .then((res) => {
            const resContainer = document.querySelector('.cardcontainer');
            resContainer.innerHTML = res.restaurants;

            console.log(resContainer);

            res.restaurants.map( resItem => {
            resContainer += `
                <div class="card-item">

                    <div class="card-img">
                        <img src="${resItem.pictureId}" alt="" srcset="">
                    </div>

                    <div class="card-name">
                        <h4>${resItem.name}</h4>
                    </div>

                    <div class="card-desk">
                        <p>${resItem.description}</p>
                    </div>

                    <div class="card-info">
                        <p>⌂ ${resItem.city}</p>
                        <p>☆ ${resItem.rating}</p>
                    </div>

                    <div class="card-booking">
                        <button>Booking</button>
                    </div>

                </div>  
                `
            });
            return resContainer;
        })    
};

export default showdata;