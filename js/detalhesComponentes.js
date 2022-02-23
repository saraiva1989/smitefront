
function componentDetalheBanner(data) {
    return `
            <div class="banner">
                <div class="banner-img"
                    style="background-image: url('${data.UrlBanner}');">
                    <div class="nome">
                        <h1><b>${data.Nome}</b></h1>
                        <p>${data.Titulo}</p>
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
                    <p><img src="${imagemClasse(element.Cultura)}" height="100px"></p>
                    <p>${element.Classe}</p>
                </div>
                <div class="item">
                    <h1>Cultura</h1>
                    <p><img src="${imagemCultura(element.Cultura)}" height="100px"></p>
                    <p>${element.Cultura}</p>
                </div>
                <div class="item">
                    <h1>Tipo</h1>
                    <p><img src="img/tipo.png" height="100px"></p>
                    <p>${element.Tipo}</p>
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
                <div class="embed-responsive"><iframe src="https://www.youtube.com/embed/${data.UrlVideoHistoria}?showinfo=0" allowfullscreen></iframe></div>
                <div class="conteudo-detalhe">${data.Historia.replaceAll('\\n', '<br>').replaceAll('"', '')}</div>
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
                        <div><img src="${element.Imagem}"
                                alt="" srcset=""></div>
                    </td>
                    <td>${element.Nome}</td>
                    <td class="descricao-habilidade">${element.Descricao}</td>
                    <td>
                        ${componentListaHtml(element.InfoPoderHabilidades)}
                    </td>
                    <td>
                        ${componentListaHtml(element.InfoHabilidades)}
                    </td>
                    <td><button type="button" class="btn-video" onclick="componentModalHabilidade('${element.UrlVideo}', 500, 700)"><span>
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
                    <h1>Aspectos Mortíferos</h1>
                    <p><img
                            src="${element.Imagem}" alt=""
                            srcset=""></p>
                    <div class="historia"><b>Descrição Habilidade: </b>${element.Descricao}</div> 
                    <br> 
                    <b><p class="destaque-habilidade">Dano da habilidade:</p></b>
                        ${componentListaHtml(element.InfoPoderHabilidades)}
                     <br> 
                     <b><p class="destaque-habilidade">informação da habilidade:</p></b>
                        ${componentListaHtml(element.InfoHabilidades)}
                    <br>
                    <p style="text-align: center;">
                    <button type="button"
                            class="btn-video" onclick="componentModalHabilidade('${element.UrlVideo}', 300, 350)">
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
            <li><b>${element.Descricao}</b> ${element.Valor}</li>
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
                                style=" background-image: url('${element.Imagem}');">
                                <div class="nome">
                                    <h1><b>${element.Nome}</b></h4>
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <p>${element.Tipo}</p>
                            <p><b>Favor: </b>${element.Favor}</p>
                            <p><b>Gema: </b>${element.Gema}</p>
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