const information = document.querySelector('.information')
const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

const workerOnUI = (user) => {
    if (user) {
        // toggle user UI elements
        loggedInLinks.forEach(item => item.style.display = 'block')
        loggedOutLinks.forEach(item => item.style.display = 'none')
    } else {
        // toggle user elements
        loggedInLinks.forEach(item => item.style.display = 'none')
        loggedOutLinks.forEach(item => item.style.display = 'block')
    }

}


const workerOnAuth = (user) => {
    if (user != null) {
        let html = ''
        const li = `
        <li>
            <h3>Welcome ${user.email}</h3>     
        </li>
        <li>
            <h4>Your email verification status is ${user.emailVerified}</h4>
        </li>
    `
        html += li
        information.innerHTML = html
    } else {

    }

}


document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal')
    M.Modal.init(modals)

});