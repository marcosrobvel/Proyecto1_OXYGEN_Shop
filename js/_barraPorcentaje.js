const progress = document.getElementById('progress');
window.addEventListener('load', () => {
    
    requestAnimationFrame(update);
})

// funcion cuenta       | cantidad px scrolleados |   alto total del body   |   alto total ventana buscador |
function update() {
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}
