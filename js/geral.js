
function Loading(status) {
    if(status){
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
    let request = await fetch(`${urlAPISmite}Listar`)
    let json = await request.json()
    montarCardDeuses(json)
    Loading(false)

}

async function buscarDetalheDeus() {
    Loading(true)
    let query = document.location.search.replace('?','')
    let request = await fetch(`${urlAPISmite}Detalhes?slug=${query}`)
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

function compartilhar (slug, nome) {
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