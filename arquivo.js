
function generateNumber(){

    const min = Math.ceil(document.querySelector(".input-start").value)
    const max = Math.floor(document.querySelector(".input-final").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

alert(result)



}

