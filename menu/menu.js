
aparecer = () => {
  let menu = document.getElementById('menu');
  let icon = document.getElementById('icon');

  if(menu.style.display === 'none'){
    menu.style.display = 'flex';
  }else{
    menu.style.display = 'none';
  }
}