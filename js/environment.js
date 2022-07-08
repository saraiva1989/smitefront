var urlAPISmite = ""
const arrayHostDev = ["smitedev.netlify.app", "localhost:5500", "127.0.0.1:5500", "192.168.31.25:5500",
                        "https://saraiva89.com/dev/smite/"]
const arrayHostProd = ["https://saraiva89.com/prod/smite/"]
urlApi()

function urlApi() {
   
    if (arrayHostDev.filter(x => x.includes('/dev/smite/') || x.includes(":5500")).length > 0) {
        urlAPISmite = 'https://smite.azurewebsites.net/'
        return;
    }

    else {
        urlAPISmite = 'https://smite.azurewebsites.net/'
    }
}
