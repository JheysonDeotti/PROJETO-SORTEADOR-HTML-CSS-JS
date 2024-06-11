
function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-start").value)
    const max = Math.floor(document.querySelector(".input-final").value)

    if (min >= max) {
        alert("O valor minimo tem que ser MAIOR que o valor máximo!")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result)

    }
}

