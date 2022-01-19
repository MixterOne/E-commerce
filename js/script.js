const produtos = [
  {
    nome: 'Galaxy A02',
    img: '../imgs/GalaxyA02.png',
    preço: 'R$-500',
  },

  {
    nome: 'MotoG50',
    img: '../imgs/MotoG50.png',
    preço: 'R$-300',
  },

  {
    nome: 'Motorola Moto E7',
    img: '../imgs/MotorolaMotoE7.png',
    preço: 'R$-200',
  },

  {
    nome: 'Redmi',
    img: '../imgs/Redmi.png',
    preço: 'R$-200',
  }
]

iniciarLoja = () => {


  let produtosContainer = document.querySelector('#produtos');

  for (let produto of produtos) {
    produtosContainer.innerHTML += `
      <div class="card">
          
        <div class="imgBx">
          <img src= ${produto.img}>
        </div>

        <div class="contentBx">
            <h2>${produto.nome}</h2>

            <div class = "preco">
              <h3>${produto.preço}</h3>
            </div>

            <a href="#" id="fbutton" class="btn">Buy Now</a>
            <div class = "before"></div>
          </div>
        </div>

        
    
      `;
    
  }

  

}


iniciarLoja()


