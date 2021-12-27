var nom = false;
var num = false;
var sel = false;

document.getElementById('username').oninput = verifNom
function verifNom(){
    const alphabets = ['', ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'é', 'è', 'à']
    var nameValue = document.getElementById('username').value
    var test = true
    for (let i = 0; i < nameValue.length; i++) {
        if (alphabets.includes(nameValue[i])) {
            console.log(test)
        }
        else{
            test = false
        }
        if (test == true){
            document.getElementById('usernameVerif').style.display='none'
            nom = true
        }
        if (test == false){
            document.getElementById('usernameVerif').style.color='red'
            document.getElementById('usernameVerif').style.display='block'
        }
    }
}

document.getElementById('phone').oninput = verifPhone
function verifPhone(){
    const numbers = ['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var test = true
    var phoneValue = document.getElementById('phone').value
    for (let i = 0; i < phoneValue.length; i++) {
        if (numbers.includes(phoneValue[i])) {
            console.log(test)
        }
        else{
            test = false
        }
        if (test == true){
            document.getElementById('phoneVerif').style.display='none'
            num = true
        }
        if (test == false){
            document.getElementById('phoneVerif').style.color='red'
            document.getElementById('phoneVerif').style.display='block'
        }
        if (i > 8 || i < 7){
            document.getElementById('phoneVerif').style.color='red'
            document.getElementById('phoneVerif').style.display='block'
        }
    }
}

document.getElementById('select').onchange = verifSelect
function verifSelect() {
    sel = true;
}

document.getElementById('btn').onclick = showtab
function showtab() {
    var a = document.getElementById('input_1').value
    var b = document.getElementById('input_2').value
    var c = document.getElementById('input_3').value
    document.getElementById('quantity_1').innerHTML = a
    document.getElementById('quantity_2').innerHTML = b
    document.getElementById('quantity_3').innerHTML = c
    var quantity1 = parseInt(a)
    var quantity2 = parseInt(b)
    var quantity3 = parseInt(c)
    var somme_quantity = quantity1 + quantity2 + quantity3;
    document.getElementById('quantity_4').innerHTML = somme_quantity
    var somme_price = (quantity1 * 5500) + (quantity2 * 3500) + (quantity3 * 7000)
    document.getElementById('total').innerHTML = somme_price
    if (somme_price != 0 && nom == true && num == true && sel == true) {
        document.getElementById('reglage').style.display = "block"
    }
    else{
        alert('make sure that you are filled all the input fields !')
    }
}

