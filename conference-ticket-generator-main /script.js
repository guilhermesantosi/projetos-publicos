

const inputimage = document.getElementById('arquivo-imagen');
let arquivo = null;
const remover = document.getElementById('remover');
const escolher = document.getElementById('escolhe');
const preview1 = document.getElementById('avatar-1');
const preview2 = document.getElementById('avatar-2')
const leyoutEnviar = document.getElementById('enviar');
const leyoutResultado = document.getElementById('resultado');
let imagemSelecionada = false;


inputimage.addEventListener('change', function(){
    

    arquivo = this.files[0];

    if (arquivo && arquivo.type.startsWith('image/')) {
    const url = URL.createObjectURL(arquivo);
    preview1.src = url;
    preview2.src = url;
    leyoutEnviar.style.display = 'none';
    leyoutResultado.style.display = 'block';
    imagemSelecionada = true;
   }else{
    document.getElementById('alerta').style.color = 'red';
    imagemSelecionada = false;
  }

});

escolher.addEventListener('click', function () {
  inputimage.click(); // Abre o seletor de arquivos novamente
});

remover.addEventListener('click', function(){
    preview1.src = '';
    inputimage.value = '';
    leyoutEnviar.style.display = 'flex';
    leyoutResultado.style.display = 'none';
    imagemSelecionada = false;
});



function gerar(){
   
    let Vnome = document.getElementById('name').value.trim();
    let email = document.getElementById('email');
    let Vgithub = document.getElementById('usergit').value.trim();
    let alerta1 = document.getElementById('alerta-1');
    let emailV = email.value;
    let emailVV = emailV.trim();

    let validado = true; // Começa como verdadeiro

    // Validação de campos obrigatórios
    if (emailVV === '' || Vnome === '' || Vgithub === '' || imagemSelecionada === false) {
        alert('Preencha todos os campos obrigatórios!');
        validado = false;
       
    }

    if (!emailVV.toLowerCase().endsWith('@gmail.com')) {
       alerta1.style.display = 'block';
       email.style.border = '1px solid red';
       validado = false;
    }else{
        alerta1.style.display = 'none';
        email.style.border = '';
    }

    const layoutgeneratedticket = document.getElementById('generated-ticket');
    const layoutformstart = document.getElementById('form-start');
    let DescriçãoEmail = document.getElementById('desc-email');
    let DescricaoNome = document.getElementById('desc-name');
    let ticketnome = document.getElementById('name-ticket');
    let ticktgithub = document.getElementById('name-github')


    if(validado){
        layoutformstart.style.display = 'none';
        layoutgeneratedticket.style.display = 'block';

        DescricaoNome.textContent = Vnome;
        DescriçãoEmail.textContent = emailVV;
        ticketnome.textContent = Vnome;
        ticktgithub.innerHTML =`<img src="assets/images/icon-github.svg" alt="">${Vgithub}`;

    }
    
    
   
        


    
}