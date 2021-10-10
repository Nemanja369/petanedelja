let registar = [

]

let imeUnos = document.querySelector('#name')
let prezimeUnos = document.querySelector('#surname')
let sifraUnos = document.querySelector('#password')
let btnUnesi = document.querySelector('#unesi')
let ispisiKorisnika = document.querySelector('#ispis')



let dodajKorisnika = (korisnik) => {
    let container =  document.createElement('div')

    container.innerHTML = `
    <p><span>Ime:</span>${korisnik.ime}</p>
    <p><span>Prezime:</span>${korisnik.prezime}</p>
    <p><span>Sifra: </span>${korisnik.sifra}</p>

    `
    ispisiKorisnika.append(container)
}

btnUnesi.addEventListener('click', ()=>{

    let korisnik = {
        ime : imeUnos.value,
        prezime : prezimeUnos.value,
        sifra : sifraUnos.value
    }
    
    if(isValid(korisnik)){
        dodajKorisnika(korisnik)
        
    }
    
    registar.push(korisnik)
    console.log(registar)
})


let isValid = (korisnik) =>{
    if(korisnik.ime.length < 5 && korisnik.ime.length > 10){
        let p1 = document.createElement('p')
        p1.textContent = 'ime je krace od 5'
        container.append(p1)
    }
    if(korisnik.prezime.length < 5 && korisnik.prezime.length <10){
        let p1 = document.createElement('p')
        p1.textContent = 'ime je krace od 5'
        container.append(p1)
    }
}