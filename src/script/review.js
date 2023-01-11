import datareview from '../script/datareview.json';

function showReview() {
    const revContent = document.querySelector('.reviewcontent');
    
    datareview.review.map(reviewItem => {
        revContent.innerHTML += 
            `
                <div class="review-item">
                    <h4 tabindex="0">${reviewItem.point}</h4>
                    <p tabindex="0">${reviewItem.desc} <span>__${reviewItem.name}</span></p>
                </div> 
            `
    });
}

export default showReview;