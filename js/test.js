let selecionado = document.querySelector("input[name='tamanho']:checked");
console.log('Tamanho:' + selecionado.value);

let selecionados = document.querySelectorAll("input[name='adicionais']:checked");
window.alert('Quantidade: ' + selecionados.length)

let valorTotal = document.querySelector("#total h2 strong")
console.log('Valor total: ' + valorTotal.textContent)
valorTotal.textContent = 54;
console.log('Valor total alterado: ' + valorTotal.textContent)