 const switchInput = document.getElementById('planSwitch'); 
const basicTab = document.getElementById('basicTab');
const premiumTab = document.getElementById('premiumTab');


const cards = document.querySelectorAll('.plan-card');


let currentPeriod = switchInput.checked ? 'yearly' : 'monthly';
let currentType = 'basic'; 


const ANIM_MS = 350; 


basicTab.addEventListener('click', () => {
if (currentType === 'basic') return;
currentType = 'basic';
basicTab.classList.add('active');
premiumTab.classList.remove('active');
updatePlans();
});

premiumTab.addEventListener('click', () => {
if (currentType === 'premium') return;
currentType = 'premium';
premiumTab.classList.add('active');
basicTab.classList.remove('active');
updatePlans();
});


switchInput.addEventListener('change', () => {
currentPeriod = switchInput.checked ? 'yearly' : 'monthly';
updatePlans();
});


function updatePlans() {
    cards.forEach(card => {
const match =
    card.classList.contains(`plan-${currentType}`) &&
    card.classList.contains(`plan-${currentPeriod}`);

if (match) {
    
    card.classList.remove('d-none');
    void card.offsetWidth;
    card.classList.remove('hide');
} else {
    
    card.classList.add('hide');
    setTimeout(() => {
    card.classList.add('d-none');
    }, 400); 
}
});
}


updatePlans();