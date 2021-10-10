let courses = [html, css, js]
let inputName = document.querySelector('#name')
let inputSurname = document.querySelector('#surname')
let inputPassword = document.querySelector('#password')
let inputConfirmpass = document.querySelector('#confirmpass')
let inputHtml = document.querySelector('#html')
let inputCss = document.querySelector('#css')
let inputJs = document.querySelector('#js')
let inputCity = document.querySelector('#cities')
let inputGender = document.getElementsByName('gender')
let p1 = document.querySelector('#p1')
p1.hidden = true
let p2 = document.querySelector('#p2')
p2.hidden = true
let p3 = document.querySelector('#p3')
p3.hidden = true
let forma = document.querySelector('#unos')
let ispis = document.querySelector('#ispis')
let inputCourses = document.querySelector('#courses')

let users = []

let gradovi = [{id: 'novisad', name : 'Novi Sad'},{id: 'beograd', name : 'Beograd'},
                {id: 'nis', name : 'Nis'},{id: 'kragujevac', name : 'Kragujevac'} ]

const vratiGrad = (user)=>{
    gradovi.forEach(grad => {
        if(grad.id == inputCity.value){
            user.cities = grad.name
        }
    })
}
let insertUser = (user) => {
    let container = document.createElement('div')
    
    container.innerHTML = `
    <p><span>Name: </span>${user.name}</p>
    <p><span>Surname: </span>${user.surname}</p>
    <p><span>Password: </span>${user.password}</p>
    <p><span>Courses: </span>${user.courses}</p>
    <p><span>City: </span>${user.cities}</p>
    <p><span>Gender: </span>${user.gender}</p>
 
    `
    ispis.append(container)
    users.push(user)
}
let capFirstLetter = (user) =>{
    let x = user.name
    x = x.charAt(0).toUpperCase() + x.substr(1,x.length)
    user.name = x
}
let capFirstLetterS = (user) =>{
    let x = user.surname
    x = x.charAt(0).toUpperCase() + x.substr(1,x.length)
    user.surname = x
}
forma.addEventListener('submit', (e) => {
    e.preventDefault()
    let user = {
        name: inputName.value.trim(),
        surname: inputSurname.value.trim(),
        password: inputPassword.value,
        confirmPass : inputConfirmpass.value,
        courses : [],
        cities : inputCity.value,
        gender : null
    }

    capFirstLetter(user)
    capFirstLetterS(user)
    vratiGrad(user)
    getGender(user)
    let course = []

    if(inputHtml.checked){
        course.push(inputHtml.value)
    }
    if(inputJs.checked){
        course.push(inputJs.value)
    }
    if(inputCss.checked){
        course.push(inputCss.value)
    }
    user.courses = course

    if(isValid(user)){
        insertUser(user)
    }
    forma.reset()

})
function getGender(user){
    inputGender.forEach(gender => {
        if(gender.checked){
            // console.log(gender.value)
            user.gender =  gender.value
        }
        
    })
}
const isValid = (user)=>{
    return (isValidName(user.name) &&
    isValidSurname(user.surname) &&
    isValidPassword(user.password) &&
    isValidPassConfirm(user.password, user.confirmPass) &&
    isValidCourse(user.courses) &&
    insertUser(user))
    
}
const isValidName = (name) => {
    if (name.length < 5 || name.length > 15) {
        p1.hidden = false
        p1.textContent = 'Name must be between 5 and 15'
        return false
    } else {
        p1.hidden = true
        return true
    }
}
inputName.addEventListener('click', () => {
    p1.hidden = true
})
const isValidSurname = (surname) => {
    if (surname.length < 5 || surname.length > 20) {
        p2.hidden = false
        p2.textContent = 'Surname must be between 5 and 20'
        return false
    } else {
        p2.hidden = true
        return true
    }
}
inputSurname.addEventListener('click', ()=>{
    p2.hidden = true
})
const isValidPassword = (password) => {
    let pattern = new RegExp("\\*[A-Z]*")
    let patternNumber = new RegExp("\\*[1-9]*")
    if(password.length < 8 && !pattern.test(password) && !patternNumber.test(password)){
        p3.hidden = false
        p3.textContent = 'Password must have 8 or more ch., number and uppercase'
        return false
    }else{
        p3.hidden = true
        return true
    }
}
inputPassword.addEventListener('click', ()=>{
    p3.hidden = true
})
const isValidPassConfirm = (password, confirmPass) => {
    if(password !== confirmPass){
        p4.hidden = false
        p4.textContent = 'Is not equal'
        return false
    }else{
        p4.hidden = true
        return true
    }
}
inputConfirmpass.addEventListener('click', ()=>{
    p4.hidden = true
})
const isValidCourse = (courses) =>{
    if(courses.length == 0){
        p5.hidden = false
        p5.textContent = 'Choose some courses'
        return false
    }else{
        p5.hidden = true
        return true
    }
}
inputCourses.addEventListener('click', ()=>{
    p5.hidden = true
})