let icone = document.querySelectorAll('.info-icone');
let competence = document.querySelector('.competence-saverglass');


icone.forEach(element => {
    element.addEventListener('click', () => {
        const ulElement = element.closest('.poste-date').nextElementSibling;
        ulElement.classList.toggle('active');
        element.classList.toggle('rotate');
    })
    
});
