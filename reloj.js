(function(){

	var actualizarHora = function(){
		//var para conseguir las fechas
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();
		// var para ubircar la informacion sacada
		var pHoras = document.getElementById('horas'),
			pAMPM = document.getElementById('ampm'),
			pMinutos = document.getElementById('minutos'),
			pSegundos = document.getElementById('segundos'),
			pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes'),
			pYear = document.getElementById('year');

		//Array con los dias de la semana
		var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
		pDiaSemana.textContent = semana[diaSemana];

		pDia.textContent = dia;
		//Array con los meses
		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
		pMes.textContent = meses[mes];

		pYear.textContent = year;

		//reloj de 12 horas
		if (horas >= 12){
			horas = horas-12;
			ampm = 'PM';
		}else {
			ampm = 'AM';
		}

		if (horas == 0) {
			horas = 12;
		};

		pHoras.textContent = horas;
		pAMPM.textContent = ampm;

		if(minutos < 10){
			minutos = "0"+ minutos;//agregarle un cero
		}
		if(segundos < 10){
			segundos = "0"+ segundos;//agregarle un cero
		}
		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;
	};

	actualizarHora();
	//Actualizar hora
	var intervalo = setInterval(actualizarHora, 1000);


}());