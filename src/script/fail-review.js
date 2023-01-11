const axios = require('axios');

axios.get('./src/script/datareview.json')
.then(rev => {revContent.innerHTML = showreview(rev.data)})
.catch(err => {err});

const revContent = document.querySelector('.reviewcontent')

function showreview(rev) {
    let revContent = "";

    rev.review.map(data => {
        revContent += `
            <div class="review-item">
       zz             <h4>${data.point}</h4>
                    <p>${data.desc} <span>__${data.name}</span></p>
            </div> 
        `
    });
    return revContent;
}