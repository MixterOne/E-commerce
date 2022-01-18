const produtos = [
    {
        id: 0,
        nome: 'Galaxy A02',
        img: '../imgs/GalaxyA02.png',
        desc: 'loremmmmmmm',
        preço: 'R$-500',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'Galaxy A024',
        img: '../imgs/GalaxyA02.png',
        desc: 'loremmmmmmm',
        preço: 'R$-300',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'Galaxy A023',
        img: '../imgs/GalaxyA02.png',
        desc: 'loremmmmmmm',
        preço: 'R$-200',
        quantidade: 0
    }
]

iniciarLoja = () =>{
 

    let produtosContainer = document.querySelector('#produtos');

    for(let produto of produtos){
        produtosContainer.innerHTML += `
        <div class="card">
    <div class="imgBx">
      <img src= ${produto.img}>
    </div>
    <div class="contentBx">
      <h2>${produto.nome}}</h2>
      
      <div class="color">
        <p>${produto.desc}</p>
      </div>
      <div class = "preco">
        <h3>${produto.preço}</h3>
      </div>

      <a href="#">Buy Now</a>
    </div>
  </div>

        `;
    }
}

iniciarLoja()