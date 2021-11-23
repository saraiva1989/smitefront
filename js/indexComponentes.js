
function componentCardDeus(data) {
    let redireciona = `detalhes.html?${data.nomeEN}`
    let compartilhar = ''
    if(document.documentElement.clientWidth < 1025) {
        redireciona = `detalhesMobile.html?${data.nomeEN}`
        compartilhar = `<div class="btn-padrao" id="compartilhar" onclick="compartilhar('${data.nomeEN}','${data.nome}')">
                            <a>compartilhar</a>
                        </div>`
    }
    let card = `
    <div id="card-deus" class="card-deus">
        <div class="avatar">
            <img src='${data.imagem.replace("'", "")}' class="avatar-background" loading='lazy'>
                <div class="nome">
                    <h1><b>${data.nome}</b></h4>
                </div>
            </img>
        </div>

        <div class="detalhe-deus">
            <p><b>${data.titulo}</b></p>
            <p><b>Cultura:</b> ${data.cultura}</p>
            <p><b>Classe:</b> ${data.classe}</p>
            <p><b>Tipo:</b> ${data.tipo}</p>
            <div  class="btn-padrao">
                <a href="${redireciona}">Mais Info</a>
            </div>
            ${compartilhar}
        </div>
    </div>
    `
    return card
}
