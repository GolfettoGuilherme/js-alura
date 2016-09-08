//trouxe para ca para não misturar HTML com Javacript
var botao = document.getElementById('calcula-imcs');
//botao.onclick = calculaTodosImcs();
//usei esse jeito para ter mais de um evento no click do botão
botao.addEventListener("click", function(){

	var trsPacientes = document.getElementsByClassName("paciente");

	percorreArray(trsPacientes, function(pacienteTr){

			pacienteAtual = montaPaciente(pacienteTr);
			var imc = pacienteAtual.pegaImc();

			var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
			tdImc.textContent = imc;

			console.log(imc);
				
		}
	);

}
);
