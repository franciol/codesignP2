
src="https://www.gstatic.com/firebasejs/3.5.3/firebase.js"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDkxEb7E2dza8eUgs8zxRNpkPB5umm6nBA",
    authDomain: "uau-f424e.firebaseapp.com",
    databaseURL: "https://uau-f424e.firebaseio.com",
    storageBucket: "uau-f424e.appspot.com",
    messagingSenderId: "745506894626"
  };
  firebase.initializeApp(config);

database = firebase.database();

  logs = this.database.ref('logs');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
}
