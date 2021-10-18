function validar(){
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let telefone = document.getElementById("telefone");
  let caso = document.getElementById("caso");
  let mensagem = document.getElementById("mensagem");

  if (nome.value ==""){
         alert(Nome não informado);
         nome.focus();
         return;
  }
  if (email.value ==""){
         alert(E-mail não informado);
         email.focus();
  }
  if (telefone.value ==""){
         alert(Telefone não informado);
         telefone.focus();
  }
  if (caso.value ==""){
         alert(Caso não informado);
         caso.focus();
  }
  if (mensagem.value ==""){
         alert(Mensagem não informado);
         mensagem.focus();
  }
         
}