import '../src/style/style.css'
import '../src/script/navbar.js';

import showResto from './script/restocard.js';
import showReview from './script/review.js';

window.addEventListener('DOMContentLoaded', ()=>{
    showResto();
    showReview();
});


