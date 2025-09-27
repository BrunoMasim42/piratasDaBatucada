fetch('menu.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
})
.catch(error => {
    console.error('Ocorreu um erro ao buscar o menu');
})