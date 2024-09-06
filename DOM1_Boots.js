function calcular() {
    let nombre = document.getElementById('name1').value;
    let edad = parseInt(document.getElementById('edad1').value);
    let aumento = edad + 10;
    alert("Su edad aumentada es " + aumento);
}