functin validar(){
  let nome = document.getElementById("nome");
  let nome = document.getElementById("email");
  let nome = document.getElementById("telefone");
  let nome = document.getElementById("caso");
  let nome = document.getElementById("mensagem");

  if (nome.value ==""){
         alert(Nome não informado);
         nome.focus();
         return;
  }
  if (email.value ==""){
         alert(E-mail não informado);
         email.focus();
}