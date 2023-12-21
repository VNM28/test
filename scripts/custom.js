function Card(title, date, summary) {
  this.title   = title;
  this.date    = date;
  this.summary = summary;
};

const card = new Card (
  title   = ["", "Portifolio", "Site Games"],  
  date    = ["", "07/12/23", "11/12/23"],
  summary = ["", `sadjnakdakdasdadasdadasdakdbask`,
`The Movie Guide é uma aplicação que reúne informações sobre artistas e produções, permitindo que usuários pesquisem e avaliem seus filmes favoritos, além de personalizar seu próprio perfil.

Tive muita inspiração de sites como Letterboxd e Filmow, dos quais sou usuário assíduo há anos. Mas a ideia surgiu mesmo do Desafio Front-End da Promobit localizado no repositório do Felipe Fialho, onde cumpri os requisitos apontados e fui além criando novas features, como:

• Realizar upload de Imagens;
• Avaliar e catalogar filmes favoritos/já assistidos;
• Barra de pesquisa que busca por títulos e artistas simultaneamente;
• Animações com a biblioteca Framer Motion;
• Rotas dinâmicas com React Router Dom;
• Filtro acumulativo de gêneros;

No desenvolvimento decidi utilizar o Vite.js como Build Tool pelo desempenho, Redux pro gerenciamento e armazenamento de Estados Globais, Styled Components pelos diversos benefícios do CSS-in-JS, TypeScript por facilitar na hora de fazer depuração no código e o React Router Dom pra manipulação de rotas;

Foram longas horas de desenvolvimento, e sinto que esse projeto serviu pra consolidar tudo que aprendi nesses últimos meses estudando React.js :)`]
);


function tecs(i) {

  let teste;

  if(i == 1) {
   teste = `
      <div class='tec'> HTML5 </div>
      <div class='tec'> CSS3 </div>
      <div class='tec'> JavaScript </div>
    `;
  } else if(i == 2) {
   teste = `
      <div class='tec'> HTML5</div>
      <div class='tec'> Bootstrap</div>
      <div class='tec'> PHP</div>
      <div class='tec'> MySQL</div>
      <div class='tec'> MySQL</div>
      <div class='tec'> MySQL</div>
    `;
  }

  return teste;
};

const projectArea = document.getElementById("projects__area");
for (var i = 1; i <= 8; i++) {
  projectArea.innerHTML += 
  `
  <div class= 'area__card area__card--${i}' onmouseover='cardOn(${i})' onmouseleave='cardOff(${i})' id='area__card--${i}'>
  <div class='sub__card1 sub__card1--card${i}'  id='sub__card1--card${i}'>
      <video loop muted id='video--${i}'>
        <source src='assets/video/PORTIFOLIO(0${i}).mp4' type='video/ogg'>
      </video>
      <img src='assets/img/CapaPortifolio${i}.JPG' alt='' id='sub__card1__img--${i}' class='sub__card1__img'>
    </div>
  <div class='sub__card2 sub__card2--card${i}' id='sub__card2--card${i}'>
    <img src='assets/img/CapaPortifolio${i}.JPG' alt='' id='sub__card2__img' class='sub__card2__img'>
    <div class='sub__card2__tec'>
      ${tecs(i)}
    </div>
    <div class='blur'> <p> ${card.title[i]}</p></div>
    <div class='line--top'></div>
    <div class='line--medium'></div>
    <div class='line--bottom'></div>
    <button class='sub__card2__button' onclick='verMais(${i})'>Ver mais</button>
    <div class='date'>${card.date[i]}</div>
  </div>
  </div>`; 
}

function cardOn(x) {
  const card2    = document.getElementById(`sub__card2--card${x}`);
  const card1    = document.getElementById(`sub__card1--card${x}`);
  const areaCard = document.getElementById(`area__card--${x}`);
  const video    = document.getElementById(`video--${x}`);
  const img      = document.getElementById(`sub__card1__img--${x}`);
 

  card1.setAttribute("class", "sub__card1--on");
  card2.setAttribute("class", "sub__card2--on");
  areaCard.setAttribute("class", "area__card--on");
  setTimeout(() => { img.setAttribute("class","sub__card1__img opcd0");}, 1000);
  setTimeout(() => { video.play();}, 1100);
};


function cardOff(x) {
  const card2    = document.getElementById(`sub__card2--card${x}`);
  const card1    = document.getElementById(`sub__card1--card${x}`);
  const areaCard = document.getElementById(`area__card--${x}`);
  const video    = document.getElementById(`video--${x}`);
  const img      = document.getElementById(`sub__card1__img--${x}`);

  img.setAttribute("class",`sub__card1__img`);
  card1.setAttribute("class", `sub__card1 sub__card1--card${x}`);
  card2.setAttribute("class", `sub__card2 sub__card2--card${x}`);
  areaCard.setAttribute("class", `area__card area__card--${x}`);

  video.pause();
  video.currentTime = 0;

};

function verMais(x) {
  const body        = document.querySelector(".body");
  const blurBack    = document.querySelector(".blurBackground--off");
  const cardVerMais = document.querySelector(".card__verMais");

  body.setAttribute("style","overflow:hidden");
  blurBack.setAttribute("class", "blurBackground--on");
  
  blurBack.innerHTML = 
  `
    <div class="card__verMais">
      <video autoplay loop muted class="card--verMais--video">
        <source src='assets/video/PORTIFOLIO(0${x}).mp4' type='video/ogg'>
      </video>
      
      <div class='card__verMais--info'>
        <button onclick='verMaisOff()' class='close__button'> <img src="assets/img/modal-close-button.png" alt="" class='close__image'></button>
        <div class='title'>${card.title[x]}</div>
        <div class='links'>
          <button>Acessar Projeto</button>
          <button> Acessar Repositório</button>
        </div>
        <div class='date'> <span>Concluído em:</span>  ${card.date[x]}</div>
        <p class='tec__title'>Tecnologias e Ferramentas utilizadas neste projeto :</p>
        <div class='area__tec'> 
          ${tecs(x)}
        </div>
        <div class='text__area'>
          <span> Resumo </span>
          <p> ${card.summary[x]} </p>
        </div>
      <div> 

    </div>
  `
}

function verMaisOff() {
  const body     = document.querySelector(".body");
  const blurBack = document.querySelector(".blurBackground--on");

  body.setAttribute("style","overflow:auto");
  blurBack.setAttribute("class", "blurBackground--off");
}


