


function progressAction() {
    const barra = document.querySelector('.progressbar');
    console.log(barra);
    let contador = 1;
    const descriptor = setInterval(() => {
        barra.style.width = `${contador}%`;
        contador += 1;
        if (contador > 100) {
            clearInterval(descriptor);
        }
    }, 100);
}

const boton = document.getElementById('progressButton');

boton.onclick = progressAction;