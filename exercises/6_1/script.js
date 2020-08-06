window.onload = function () {
  let todosOsEstados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins','Distrito Federal'];
  const pais = document.querySelector('#estado');
  for(let index = 0; index < todosOsEstados.length; index ++) {
    let elemento = document.createElement('option');
    elemento.innerHTML = todosOsEstados[index];
    pais.appendChild(elemento);
  };

  let data = document.querySelector('#data');
  data.addEventListener('change', function () {
    let valor = document.querySelector('#data').value;
    console.log(valor);
    valor = valor.split('/');
    console.log(valor);
    for (i = 0; i < valor.length; i++) {
      if(i==0){
        if (valor[0] < 0 || valor[0] > 31) {
        alert('dia invalido');
        }
      }
      if(i==1){
        if(valor[1] < 0 || valor[1] > 12) {
        console.log(valor[i]);
        alert('o valor do mês deve ser maior que 0 e menor ou igual a 12');
        }
      }
      if(i==2){
        if(valor[2] < 1000 ){
          alert('ano invalido');
        }
      }   
     } 
  });
  document.querySelector('#enviar').addEventListener('click', stopEvent);
}

function stopEvent(event){
  event.preventDefault();
}