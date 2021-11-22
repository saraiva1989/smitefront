var urlAPISmite = ""
const arrayHostDev = ["smitedev.netlify.app", "localhost:5500", "127.0.0.1:5500", "192.168.31.25:5500"]
const arrayHostProd = ["saraiva1989.github.io"]
urlApi()

function urlApi() {
    arrayHostProd.forEach(element => {
        if (window.location.host === element) {
            urlAPISmite = 'https://smite.azurewebsites.net/api/Deuses/'
        }
    });

    arrayHostDev.forEach(element => {
        if (window.location.host === element) {
            urlAPISmite = 'https://smite.azurewebsites.net/api/Deuses/'
            document.getElementById('ambiente-dev').style.display = 'block'
        }
    })
}
