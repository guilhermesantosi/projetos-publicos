
function adicionar(){

    let ul = document.getElementById('ul');
    const nomeTarefa = document.getElementById('name').value;


    if(nomeTarefa === ''){
      alert('coloque um nome')
    }else{
       
       let tarefa = document.createElement('li');
       let texto = document.createElement('span');
       let imagem = document.createElement('img');

       imagem.classList.add('lixo');
       imagem.src = 'assents/download.png';
       texto.classList.add('name-tarefa');

       ul.appendChild(tarefa);
       texto.innerText = nomeTarefa;
       tarefa.appendChild(texto);
       tarefa.appendChild(imagem);

       imagem.addEventListener('click', function(){
        tarefa.style.display = 'none'
       });

       tarefa.addEventListener('click', function(){
        if(texto.style.textDecorationLine == 'line-through'){
            texto.style.textDecorationLine = 'none';
        }else{
            texto.style.textDecorationLine = 'line-through';
            texto.style.textDecorationThickness = '3px';
        }
       });
       
       
        
    }


   


}