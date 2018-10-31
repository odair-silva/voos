// function pegaDadosVoo(){
//     document.getElementById("frm1").submit();
// }

// setInterval(function() {
//     var ajax = new XMLHttpRequest();
//     ajax.open("GET", "/leitura", true);
//     ajax.send();
// }, 1000);


// function montaTr(paciente){
//     var pacienteTr = document.createElement("tr");
//     pacienteTr.classList.add("paciente");

//     //cria o formato html da nova linha
//     pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
//     pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
//     pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
//     pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
//     pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

//     return pacienteTr;
// }

// function montaTd(dado, classe){
//     var td = document.createElement("td");
//     td.textContent = dado;
//     td.classList.add(classe);
//     return td;
// }