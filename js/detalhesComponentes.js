
function componentDetalheBanner(data) {
    return `
            <div class="banner">
                <div class="banner-img"
                    style="background-image: url('${data.urlBanner}');">
                    <div class="nome">
                        <h1><b>${data.nome}</b></h1>
                        <p>${data.titulo}</p>
                    </div>
                </div>
            </div>
    `
}

function componentDetalheTipo(element) {
    return `
            <div class="card-detalhe flex">
                <div class="item">
                    <h1>Classe</h1>
                    <p><img src="${imagemClasse(element.cultura)}" height="100px"></p>
                    <p>${element.classe}</p>
                </div>
                <div class="item">
                    <h1>Cultura</h1>
                    <p><img src="${imagemCultura(element.cultura)}" height="100px"></p>
                    <p>${element.cultura}</p>
                </div>
                <div class="item">
                    <h1>Tipo</h1>
                    <p><img src="img/tipo.png" height="100px"></p>
                    <p>${element.tipo}</p>
                </div>
            </div>
    `
}

function componentHistoria(data) {
    return `
            <div class="card-detalhe">
                <div>
                    <h1>História</h1>
                </div>
                <hr>
                <div class="embed-responsive"><iframe src="https://www.youtube.com/embed/${data.urlVideoHistoria}?showinfo=0" allowfullscreen></iframe></div>
                <div class="conteudo-detalhe">${data.historia.replaceAll('\\n', '<br>').replaceAll('"', '')}</div>
            </div>
    `
}

function componentHabilidades(data) {
    return `
            <div class="card-detalhe">
                <div>
                    <h1>Habilidades</h1>
                </div>
                <hr><br>
                ${componentTabelaHabilidade(data)}
            </div>
    `
}

function componentTabelaHabilidade(data) {
        
    let cabecalho = `
                    <thead>
                        <tr>
                            <th class="text-left"></th>
                            <th class="text-left">
                                Nome
                            </th>
                            <th class="text-left">
                                Descrição
                            </th>
                            <th class="text-left">
                                info Habilidade
                            </th>
                            <th class="text-left">
                                tipo Habilidade
                            </th>
                            <th class="text-left"></th>
                        </tr>
                    </thead>
    `

    let linha = '' 
    
    data.forEach(element => {
        linha += `
                <tr>
                    <td>
                        <div><img src="${element.imagem}"
                                alt="" srcset=""></div>
                    </td>
                    <td>${element.nome}</td>
                    <td class="descricao-habilidade">${element.descricao}</td>
                    <td>
                        ${componentListaHtml(element.infoPoderHabilidades)}
                    </td>
                    <td>
                        ${componentListaHtml(element.infoHabilidades)}
                    </td>
                    <td><button type="button" class="btn-video" onclick="componentModalHabilidade('${element.urlVideo}', 500, 700)"><span>
                                Video Habilidade
                            </span></button></td>
                </tr>
        `
    });

    let body = `<tbody>${linha}</tbody>`
    let tabela = `<table>${cabecalho} ${body}</table>`
    return tabela

}

function componentTabelaHabilidadeMobile(data) {
   let linha = ''
    data.forEach(element => {
        linha += `
                <div>
                    <h1>${element.nome}</h1>
                    <p><img
                            src="${element.imagem}" alt=""
                            srcset=""></p>
                    <div class="historia"><b>Descrição Habilidade: </b>${element.descricao}</div> 
                    <br> 
                    <b><p class="destaque-habilidade">Dano da habilidade:</p></b>
                        ${componentListaHtml(element.infoPoderHabilidades)}
                     <br> 
                     <b><p class="destaque-habilidade">informação da habilidade:</p></b>
                        ${componentListaHtml(element.infoHabilidades)}
                    <br>
                    <p style="text-align: center;">
                    <button type="button"
                            class="btn-video" onclick="componentModalHabilidade('${element.urlVideo}', 300, 350)">
                            <span>Video Habilidade</span>
                    </button></p> 
                    <br>
                    <hr class="separador-habilidade">
                </div>
`
    });

    let html = `
    <div class="card-detalhe">
        <div>
            <h1>Habilidades</h1>
        </div>
        <hr><br>
        <div id="conteudo-habilidade">
            ${linha}
        </div>
    </div>
`
    return html;
}

function componentListaHtml(data) {
    let ul = ''
    data.forEach(element => {
        ul += `
        <ul>
            <li><b>${element.descricao}</b> ${element.valor}</li>
        </ul>
        ` 
    });
    return ul;
}

function componentSkin(data) {
    let body = ''

    data.forEach(element => {
        body += `

                    <div id="card-deus" class="card-deus">
                        <div class="avatar">
                            <div class="avatar-background" alt="Avatar"
                                style=" background-image: url('${element.imagem}'); background-repeat: round;">
                                <div class="nome">
                                    <h1><b>${element.nome}</b></h4>
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <p>${element.tipo}</p>
                            <p><b>Favor: </b>${element.favor}</p>
                            <p><b>Gema: </b>${element.gema}</p>
                        </div>
                    </div>
                
        `
    });

    let html = `
    <div class="card-detalhe">
        <div>
            <h1>skins</h1>
        </div>
        <hr><br>
        <div class="flex">
            ${body}
        </div>
    </div>
`

    return html
 }

 function componentModalHabilidade(urlVideo, altura, largura) {
     let iframe = `
            <iframe src="https://www.youtube.com/embed/${urlVideo}?autoplay=1" allowfullscreen="allowfullscreen" height='${altura}' width='${largura}' frameborder="0"></iframe>
            <div class="btn-padrao fechar" id="fechar">
                <a onclick="fechar()">Fechar</a>
            </div>
     `
     let modal = document.getElementById('modal')
     modal.innerHTML = iframe
     modal.style.display = 'block'
 }

function imagemCultura(cultura){
    switch (cultura) {
        case "Babilônio":
            return "img/babilonio.png"
            break;
        case "Arthuriano":
            return "img/arturiano.png"
            break;
        case "Chinês":
            return "img/chines.png"
            break;
        case "Celta":
            return "img/celta.png"
            break;
        case "Egípcio":
            return "img/egipcio.png"
        case "Grego":
            return "img/grego.png"
        case "Os Grandes Antigos":
            return "img/grande.png"
        case "Hindu":
            return "img/hindu.png"
        case "Japonês":
            return "img/japones.png"
        case "Maia":
            return "img/maia.png"
        case "Nórdico":
            return "img/nordico.png"
        case "Polinésio":
            return "img/polinesio.png"
        case "Romano":
            return "img/romano.png"
        case "Eslavo":
            return "img/eslavo.png"
        case "Vodu":
            return "img/vodu.png"
        case "Iorubá":
            return "img/ioruba.png"
            break;
        default:
            return "img/mago.png"
    }
}

function imagemClasse(classe){
    switch (classe) {
        case "Guardião":
            return "img/guardiao.png"
            break;
        case "Mago":
            return "img/mago.png"
            break;
        case "Guerreiro":
            return "img/guerreiro.png"
            break;
        case "Caçador":
            return "img/cacador.png"
            break;
        case "Assassino":
            return "img/assassino.png"
            break;
        default:
            return "img/mago.png"
    }
}