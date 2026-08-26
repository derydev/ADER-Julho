document.addEventListener('DOMContentLoaded', () => {
    const artistasData = [
    {name: 'Anselmo Ralph', imag: './img/anselmo-ralph.png'},
    {name: 'Gustavo Lima', imag: './img/artista-gustavo-limma.jpg'},
    {name: 'Luan Santana', imag: './img/artista-luan-santana.jpg'},
    {name: 'C4 Pedro', imag: './img/c4pedrosem.jpg'},
    {name: 'Plutónio', imag: './img/plutonio.jpg'},
    {name: 'Bruno Mars & Lady Gaga', imag: './img/bruno-laydy.jpg'},
    {name: 'Rihanna', imag: './img/riana.jpg'},
    {name: 'Richie Campbell', imag: './img/richie.jpg'},
    {name: 'Rui Veloso', imag: './img/Rui Veloso.jpg'},
    {name: 'Matheus & Kauan', imag: './img/artista-mateus-kauan.jpg'},
    {name: 'Dji Tafinha', imag: './img/djitafnha.jpg'},
    {name: 'Slow J', imag: './img/slow j.jpg'},
    {name: 'Anselmo Ralph', imag: './img/anselmo-ralph.png'},
    {name: 'Wizkid', imag: './img/wizkid.jpg'},
    
    
];

const albumsData = [
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/plutonio.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'},
    {name: 'Nzamba Mkunku Mpetelo Messami', artist: 'C4 Pedro', imag:'./img/nzamba.jpg'} 
];

const artistGrid = document.querySelector('.artists-grid')
const albumsGrid = document.querySelector('.albuns-grid')



// Partes dos artistas Musicais 
artistasData.forEach(artist => {
    //Criando Div no JS a partir do proprio elemnto
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')

    artistCard.innerHTML = `
    <img src="${artist.imag}" alt="Imagem do ${artist.name}">
    <div>
    <h3>${artist.name}</h3>
    <p>Artista</p>
    </div>
    
    `
    // Serve para adiconar os dados dentro do HTML
    artistGrid.appendChild(artistCard)
})

// Parte dos Albuns 
albumsData.forEach(albums => {
    // Ciando uma div JS a partir do proprio elemento, no html
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')

    albumCard.innerHTML = `
    <img src="${albums.imag}" alt="Imagem do ${albums.artist}">
    <div>
        <h3>${albums.name}</h3>
        <p>${albums.artist}</p>
    </div>
    `
    albumsGrid.appendChild(albumCard)
    
})


})







