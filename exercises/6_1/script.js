window.onload = function () {
  let todosOsEstados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins','Distrito Federal'];
  const pais = document.querySelector('#estado');
  for(let index = 0; index < todosOsEstados.length; index ++) {
    let elemento = document.createElement('option');
    elemento.innerHTML = todosOsEstados[index];
    pais.appendChild(elemento);
  };
}