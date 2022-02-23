
function componentCardDeus(data) {
    let redireciona = `detalhes.html?${data.NomeEN}`
    let compartilhar = ''
    if(document.documentElement.clientWidth < 1025) {
        redireciona = `detalhesMobile.html?${data.NomeEN}`
        compartilhar = `<div class="btn-padrao" id="compartilhar" onclick="compartilhar('${data.NomeEN}','${data.Nome}')">
                            <a>compartilhar</a>
                        </div>`
    }
    let card = `
    <div id="card-deus" class="card-deus">
        <div class="avatar">
            <img src='${data.Imagem.replace("'", "")}' class="avatar-background" loading='lazy'>
                <div class="nome">
                    <h1><b>${data.Nome}</b></h4>
                </div>
            </img>
        </div>

        <div class="detalhe-deus">
            <p><b>${data.Titulo}</b></p>
            <p><b>Cultura:</b> ${data.Cultura}</p>
            <p><b>Classe:</b> ${data.Classe}</p>
            <p><b>Tipo:</b> ${data.Tipo}</p>
            <div  class="btn-padrao">
                <a href="${redireciona}">Mais Info</a>
            </div>
            ${compartilhar}
        </div>
    </div>
    `
    return card
}
