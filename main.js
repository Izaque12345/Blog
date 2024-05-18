function TierListDownload() {
  window.location = "https://play.google.com/store/apps/details?id=com.TierList.rrm"
}

var areaMaisInformacoes = window.document.getElementById('area-mais-informacoes')
areaMaisInformacoes.style.display = "none"
var visibilidade = 0

function chamarMaisInformacoes() {
  if (visibilidade == 0) {
    areaMaisInformacoes.style.display = "block"
    visibilidade = 1
    /*console.log('Block')
    console.log('1')*/
  } else {
    areaMaisInformacoes.style.display = "none"
    visibilidade = 0
    /*console.log('None')
    console.log('0')*/
  }
}