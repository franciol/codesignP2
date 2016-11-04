function envia(tipo_evt, user_id_var, tempo_var, versao_var){
 this.logs.push(
 {
 user_id: user_id_var,
 tempo: tempo_var
 versao: versao_var
 tipo: tipo_evt
 }
 );
}
