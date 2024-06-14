let papan = document.querySelector('.papan'); 

for (let i = 0; i < 64; i++) {
    let kotak = document.createElement('div'); 
    kotak.classList.add('kotak');
    papan.appendChild(kotak)
}