let listaDeusesData
let listaDeusesFiltro

function montarSelects() {
    let cultura = ['Todos', 'Babilônio', 'Arthuriano', 'Chinês', 'Celta', 'Egípcio', 'Grego', 'Os Grandes Antigos',
        'Hindu', 'Japonês', 'Maia', 'Nórdico', 'Polinésio', 'Romano', 'Eslavo', 'Vodu', 'Iorubá']
    let classe = ['Todos', 'Guardião', 'Mago', 'Guerreiro', 'Caçador', 'Assassino']

    let selectCultura = document.getElementById('cultura')
    cultura.forEach(element => {
        var option = document.createElement("option");
        option.text = element;
        option.value = element
        selectCultura.add(option);
    });

    let selectClasse = document.getElementById('classe')
    classe.forEach(element => {
        var option = document.createElement("option");
        option.text = element;
        option.value = element
        selectClasse.add(option);
    });
}

function ocultarPorId(id) {
    document.getElementById('modal-pesquisa').classList.remove('modal-pesquisa-show')
}

function mostrarPorId(id) {
    document.getElementById('modal-pesquisa').classList.add('modal-pesquisa-show')
}

function Loading(status) {
    if (status) {
        document.getElementById('loading').style.display = 'block'
        return
    }
    document.getElementById('loading').style.display = 'none'
}

function fechar() {
    document.getElementById('modal').style.display = 'none'
}

async function buscarDeuses() {
    Loading(true)
    let request = await fetch(`${urlAPISmite}/api/Deuses/Listar`)
    listaDeusesData = await request.json()
    montarCardDeuses(listaDeusesData)
    Loading(false)

}

async function buscarDetalheDeus() {
    Loading(true)
    let query = document.location.search.replace('?', '')
    let request = await fetch(`${urlAPISmite}/api/Deuses/Detalhes?slug=${query}`)
    let json = await request.json()
    Loading(false)
    return json
}

async function montarDetalheDeus() {
    let data = await buscarDetalheDeus()
    document.getElementById('titulo-pagina').innerText = data.nome
    let conteudo = document.getElementById('conteudo-detalhe')
    let html = ''
    html += componentDetalheBanner(data)
    html += componentDetalheTipo(data)
    html += componentHistoria(data)
    html += componentHabilidades(data.habilidades)
    html += componentSkin(data.skins)
    conteudo.innerHTML += html
}

async function montarDetalheDeusMobile() {
    let data = await buscarDetalheDeus()
    document.getElementById('titulo-pagina').innerText = data.nome
    let conteudo = document.getElementById('conteudo-detalhe')
    let html = ''
    html += componentDetalheBanner(data)
    html += componentDetalheTipo(data)
    html += componentHistoria(data)
    html += componentTabelaHabilidadeMobile(data.habilidades)
    html += componentSkin(data.skins)
    conteudo.innerHTML += html
}

function montarCardDeuses(data) {
    let conteudo = document.getElementById('conteudo')
    let html = ''
    data.forEach(element => {
        html += componentCardDeus(element)
    });
    conteudo.innerHTML += html
}

function compartilhar(slug, nome) {
    // debugger
    if (navigator.share) {
        slug.replace(" ", "-")
        var url = `detalhes.html?slug=${slug}`
        navigator.share({
            title: 'Deuses Smite',
            text: `Veja mais sobre a ${nome}`,
            url: url,
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    } else {
        console.log('Share not supported on this browser, do it the old way.');
    }
}


function pesquisa() {
    document.getElementById('conteudo').innerHTML = ''
    let cultura = document.getElementById('cultura').value
    let classe = document.getElementById('classe').value
    let nome = document.getElementById('nome-deus').value
    listaDeusesFiltro = listaDeusesData
    pesquisarDeus(nome)
    pesquisarCultura(cultura)
    pesquisarClasse(classe)
    montarCardDeuses(listaDeusesFiltro)
}

function pesquisarDeus(nome) {
    listaDeusesFiltro = listaDeusesFiltro.filter(x => x.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))
}

function pesquisarCultura(cultura) {
    if (cultura == null || cultura == 'Todos') {
        cultura = ''
    }
    listaDeusesFiltro = listaDeusesFiltro.filter(x => x.cultura.toLowerCase().includes(cultura.toLowerCase()))
}

function pesquisarClasse(classe) {
    if (classe == null || classe == 'Todos') {
        classe = ''
    }
    listaDeusesFiltro = listaDeusesFiltro.filter(x => x.classe.toLowerCase().includes(classe.toLowerCase()))
}