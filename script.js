function getRndInteger(min, max) {
  numero = Math.floor(Math.random() * (max - min)) + min;
  return numero;
}
// idSalesforce = "aA3Asff1gm34";

if (!localStorage.getItem("idSalesforce")) {
  console.log("Hello! Setando idSalesforce");
  idSalesforce = "Chave" + getRndInteger(10000000, 99999999);
  localStorage.setItem("idSalesforce", idSalesforce);
  console.log(idSalesforce);
}


window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
 'event': 'sfmc_id_send_custom_dimension',
 'sfmc_id': 1554566565
 });
