function busca() {
  var str = document.getElementById('search').value;
  var obj = document.getElementsByClassName('container py-3');
  var existe = false;
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].id == str) {
      existe = true;
      break;
    }
  }
  if (existe) {
    document.getElementById(str).scrollIntoView();
    alert('Produto Disponivel');
  } else {
    alert('Produto Não Existente');
  }
}

function criarPopup(){
  alert("Pedido confirmado!");
  window.location="../index.html"
}

var prod1Prc = "2.99";
var prod2Prc = "3.99";
var prod3Prc = "4.99";
var prod4Prc = "3.30";
var prod5Prc = "5.99";

var prod1Qnt = "0";
var prod2Qnt = "0";
var prod3Qnt = "0";
var prod4Qnt = "0";
var prod5Qnt = "0";

var total = (prod1Prc*prod1Qnt)+(prod2Prc*prod2Qnt)+(prod3Prc*prod3Qnt)+(prod4Prc*prod4Qnt)+(prod5Prc*prod5Qnt);

function produtos(){
  var prod1Qnt = document.getElementById('prod1Qnt').value;
  var prod2Qnt = document.getElementById('prod2Qnt').value;
  var prod3Qnt = document.getElementById('prod3Qnt').value;
  var prod4Qnt = document.getElementById('prod4Qnt').value;
  var prod5Qnt = document.getElementById('prod5Qnt').value;
  window.location="../carrinho.html";
  document.getElementById('prod1Qnt').value = prod1Qnt;
  document.getElementById('prod2Qnt').value = prod2Qnt;
  document.getElementById('prod3Qnt').value = prod3Qnt;
  document.getElementById('prod4Qnt').value = prod4Qnt;
  document.getElementById('prod5Qnt').value = prod5Qnt;
  total = (prod1Prc*prod1Qnt)+(prod2Prc*prod2Qnt)+(prod3Prc*prod3Qnt)+(prod4Prc*prod4Qnt)+(prod5Prc*prod5Qnt);
  document.getElementById("total").innerHTML = total;

}

