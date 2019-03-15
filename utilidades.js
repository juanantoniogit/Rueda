/////////////////////
//  UTILIDADES
////////////////////

function aQuienLeToca(n){
	var letocaa=usuariosYviajes[n].id
	return letocaa
}

function quienHayLibre(dia,hora,ES){
	if(ES==0){
		var libres=[]
		for(var a=0;a<en[dia][hora].personas.length;a++){
			if(!usuario[en[dia][hora].personas[a]][diasn[dia]].usacoche){
				//libres.push({id:en[dia][hora].personas[a],nombre:usuario[en[dia][hora].personas[a]].nombre})
				libres.push( en[dia][hora].personas[a] )
			}
		}
	}
	if(ES==1){
		var libres=[]
		for(var a=0;a<sa[dia][hora].personas.length;a++){
			if(!usuario[sa[dia][hora].personas[a]][diasn[dia]].usacoche){
				//libres.push({id:en[dia][hora].personas[a],nombre:usuario[en[dia][hora].personas[a]].nombre})
				libres.push( sa[dia][hora].personas[a] )
			}
		}
	}
	
	return libres
}



/////////////////////
function quienHayLibreDiaHoraEnOrdenViajes(dia,hora,ES){
	if(ES=='entrada'){
		var libres=[]
		for(var a=0;a<en[dia][hora].personas.length;a++){
			if(!usuario[en[dia][hora].personas[a]][diasn[dia]].usacoche){
				//libres.push({id:en[dia][hora].personas[a],nombre:usuario[en[dia][hora].personas[a]].nombre})
				libres.push( {id:en[dia][hora].personas[a],viajes:usuario[en[dia][hora].personas[a]].viajes} )
			}
		}
	}
	if(ES=='salida'){
		var libres=[]
		for(var a=0;a<sa[dia][hora].personas.length;a++){
			if(!usuario[sa[dia][hora].personas[a]][diasn[dia]].usacoche){
				//libres.push({id:en[dia][hora].personas[a],nombre:usuario[en[dia][hora].personas[a]].nombre})
				libres.push( {id:sa[dia][hora].personas[a],viajes:usuario[sa[dia][hora].personas[a]].viajes} )
			}
		}
	}
	//ordenaDeMenosAmas
	if(libres.allValuesSame() && libres.length>1){
		libres = shuffle(libres)
		//$('#info').html('Todos tienen los mismos viajes: Mezcla aleatoria!')
	}else{
		//$('#info').html('');
		libres.sort(function(a, b){return a.viajes - b.viajes});
	}
	return libres
}

/////////////////////////////////



function llena(dia){
		var completo=diaEstaCompleto(dia) 
		//console.log(completo+' '+a)	 
		if(completo==false){
			var b=buscaConductoresDia(dia,enLista)
				if(b[2].includes(b[0])){
				//console.log('es idoneo'+' '+b[2].join(' '))
				var aqueh=aqueHoraEntraSale(dia,b[0])
				//console.log(aqueh.join(' '))
				
				asignaCocheDiaHora(b[0],dia,aqueh[0],aqueh[1])
				//console.log(b[3].join(' ')+' se queda en el pueblo')
			} else{
				//enLista++
				//console.log('No es idoneo, debes buscar otro')
			}
		}	
}



function quienNoVa(dia){
	var noViajan=[]
	for(var hora=1;hora<=6;hora++){
		for(var a=0;a<en[dia][hora].personas.length;a++){
			if(!en[dia][hora].check){
				noViajan.push(en[dia][hora].personas[a])
			}
		}
	}
	return noViajan
}

function queHorasNoEstanCheck(dia){
	var noEstanCheck=[]
		for(var hora=0;hora<en[dia].length;hora++){
			if(!en[dia][hora].check && en[dia][hora].personas.length>0){
				noEstanCheck.push(hora)
			}
		}
	for(var hora=0;hora<sa[dia].length;hora++){
			if(!sa[dia][hora].check && sa[dia][hora].personas.length>0){
				noEstanCheck.push(hora)
			}
		}
	//console.log(noEstanCheck.join(' '))
	return noEstanCheck
}

function quienNoVuelve(dia){
	var noVuelven=[]
	for(var hora=2;hora<=7;hora++){
		for(var a=0;a<sa[dia][hora].personas.length;a++){
			if(!sa[dia][hora].check){
				noVuelven.push(sa[dia][hora].personas[a])
			}
		}
	}
	//alert(noVuelven.join(' '))
	return noVuelven 
}

function quienHayLibreHoy(dia){
		var libres=[]
		for(var a=0;a<usuario.length;a++){
			if(!usuario[a][diasn[dia]].usacoche){
				//libres.push({id:en[dia][hora].personas[a],nombre:usuario[en[dia][hora].personas[a]].nombre})
				
				libres.push(a)
			}
		}

	return libres
}
function quienHayLibreHoy02(dia){
		var libres=[]
		for(var a=0;a<usuario.length;a++){
			if(!usuario[a][diasn[dia]].usacoche){
				//libres.push({id:en[dia][hora].personas[a],nombre:usuario[en[dia][hora].personas[a]].nombre})
				libres.push(a)
			}
		}

	return libres
}
function buscaConductoresDiaHora(dia,hora,n){
	var q=aQuienLeToca(n)
	var libre=quienHayLibreHoy(dia,hora,n)
		return [q,usuario[q].nombre,libre]
}

function buscaConductoresDia(dia,n){
	var q=aQuienLeToca(n)
	var libre=quienHayLibreHoy(dia)
	
		return [q,usuario[q].nombre,libre]
}

function buscaConductorParaDiaHora00(dia,hora){
	var q=aQuienLeToca()
	var libre=quienHayLibre(dia,hora,0)
		return [q,usuario[q].nombre,libre]
}

function buscaConductoresDia00(dia){
	var q=aQuienLeToca()
	//var libre=quienHayLibreHoy(dia)
	var libre=quienNoVa(dia)
	var noVuelve=quienNoVuelve(dia)
	libre.push.apply(libre,noVuelve)
	
		return [q,usuario[q].nombre,libre,noVuelve]
}

function aqueHoraEntraSale(dia,user){
	return [usuario[user][diasn[dia]].entrada,usuario[user][diasn[dia]].salida]
}
function diaEstaCompleto(dia){
	var ce= false; 
	var cs= false;
	var	vacioEn=0
	var vacioSa=0
	var todasEntradasOK=true
	var todasSalidasOK=true
	for(var hora=1;hora<=7;hora++){
		todasEntradasOK=true
		ce=en[dia][hora].check
		vacioEn=en[dia][hora].personas.length
		if(!ce && vacioEn>0 ){
			todasEntradasOK=false
			break
		}
	}
	for(var hora=1;hora<=7;hora++){
		todasSalidasOK=true
		cs=sa[dia][hora].check
		vacioSa=sa[dia][hora].personas.length
		if(!cs && vacioSa>0){
			todasSalidasOK=false
			break
		}
	}
	if(todasSalidasOK && todasEntradasOK){
		return true
	}else{
		return false
	}
}
function horaEstaCompleta(hora){
	
}
function asignaCocheDiaHora(user,dia,hora,horaSalida){
	    usuario[user][diasn[dia]].usacoche=true
		usuario[user].viajes++
		//llenaCelda(dia,hora)
		//llenaCelda(dia,horaSalida)
		llenaTabla();
		llenaUsuarios()
		ordenaSegunViajes()
		//var t=en[dia][hora].tengoCoches
		//var n=en[dia][hora].necesitoCoches
		return true
}

function asignaConductorDiaHora02X(dia,hora){
	var s=buscaCochePara(hora,dia,usuariosYviajes[0].id)
		llenaCelda(dia,hora)
		llenaUsuarios()
		ordenaSegunViajes()
		var t=en[dia][hora].tengoCoches
		var n=en[dia][hora].necesitoCoches
		return n
}


function ordenUsuariosPorUsacocheDiaHora(arr){
	
}

function getUsuario(idUsuario){
	/*
	viajesSemana
	*/
	var viajesSemana=usuario[idUsuario].viajes
	return {viajesSemana:viajesSemana}
}


function estadisticaDiaHora(dia,hora,ES){
	/*
	correcto
	factor
	asignados
	nUsuarios
	cochesTeorico
	faltanCoches
	asientosLibres
	*/

	var cavenEnCoche = 4
	var numCochesAsignados=0;
	var numUsuariosEstaHora = 1
	if(ES=='entrada'){
		numCochesAsignados = en[dia][hora].asignados
		numUsuariosEstaHora = en[dia][hora].personas.length
	}
	if(ES=='salida'){
		numCochesAsignados = sa[dia][hora].asignados
		numUsuariosEstaHora = sa[dia][hora].personas.length
	}
	var factor=0;
	var cochesTeorico=0;
	var asientosLibres=0;
	var sobranCoches=0;
	if(numUsuariosEstaHora>0){
		factor = numCochesAsignados * cavenEnCoche / numUsuariosEstaHora
		cochesTeorico=Math.ceil(numUsuariosEstaHora/4)
		asientosLibres=numCochesAsignados*cavenEnCoche-numUsuariosEstaHora
		faltanCoches=Math.abs(cochesTeorico-numCochesAsignados)
	}
    //console.log(r+' El '+diasn[dia]+' a la hora '+hora+' hay asignados '+numCochesAsignados +' coches y  '+ numUsuariosEstaHora+ ' usuarios')
	
	if(ES=='entrada'){
		en[dia][hora].factor=factor.toFixed(2)
	}
	if(ES=='salida'){
		sa[dia][hora].factor=factor.toFixed(2)
	}
     var correcto=''
	if (factor>1){ correcto='huecos' }
	if (factor==1){ correcto='completo' }
	if (factor<1){ correcto='faltan' }
	
	//Si factor > 1 hay huecos de sobra en los coches
	//Si factor = 1 los coches van completos
	//Si factor < 1 faltan coches para llevar a todos los usuarios
	
		return  {
		correcto:correcto,
		factor:factor.toFixed(2),
		asignados:numCochesAsignados,
		nUsuarios:numUsuariosEstaHora,
		cochesTeorico:cochesTeorico,
		faltanCoches:faltanCoches,
		asientosLibres:asientosLibres
		}
	
	
}


function factorESalto(dia,entrada,salida){
	var cavenEnCoche = 4
	var numCochesAsignados=0;
	var numUsuariosEstaHora = 1
	
		EnumCochesAsignados = en[dia][entrada].asignados
		EnumUsuariosEstaHora = en[dia][entrada].personas.length
	
		SnumCochesAsignados = sa[dia][salida].asignados
		SnumUsuariosEstaHora = sa[dia][salida].personas.length
	var rS=0, rE=0
	if(EnumUsuariosEstaHora>0){
		rE = EnumCochesAsignados * cavenEnCoche / EnumUsuariosEstaHora
	}
	if(SnumUsuariosEstaHora>0){
		rS = SnumCochesAsignados * cavenEnCocheSnumUsuariosEstaHora / SnumUsuariosEstaHora
	}
    //console.log(r+' El '+diasn[dia]+' a la hora '+hora+' hay asignados '+numCochesAsignados +' coches y  '+ numUsuariosEstaHora+ ' usuarios')
	
	if (rS>=1 && sE>=1){
		return  {correcto:true,factorE:rE.toFixed(2),factorS:rS.toFixed(2)}
	}
	else{
		return {correcto:false,factorE:rE.toFixed(2),factorS:rS.toFixed(2)}
	}
}

function buscaCochePara(dia,hora,nlista){
	 var nsomos = 0;
	 usuario[en[dia][hora].personas[nlista]].viajes=0
	 if(en[dia][hora].personas.length==0) {return true}
	 
	 if(en[dia][hora].personas.length==1) {
    				usuario[en[dia][hora].personas[nlista]][diasn[dia]].usacoche=true
					usuario[en[diahora].personas[nlista]].viajes++
					return true
				}		
     for (var c = 0; c < en[dia][hora].personas.length; c++) {
		     //for (var d = 0; d < usuariosYviajes.length; d++){
           		if(usuariosYviajes[nlista].id==en[dia][hora].personas[c]){
					usuario[en[dia][hora].personas[c]][diasn[dia]].usacoche=true
					en[dia][hora].tengoCoches++
					usuario[en[dia][hora].personas[c]].viajes++
					return true
					break;
					
				}
    				//usuario[en[a][b][c]][diasn[a]].usacoche=true
  }	
  return false
}

/////////////////////////
// TERCERA LEY
// Tercera ley :-) Los que tienen la misma hora de entrada y salida se pueden intercambiar, o pueden suplirse

function reuneIgualesDia(dia){
	var ESuser=[0,0]
	igualesDia[dia]=[]
	var contIguales=0;
		for (var n = 0; n < usuario.length; n++) {
			ESuser=[usuario[n][diasn[dia]].entrada,usuario[n][diasn[dia]].salida]
			for (var b = 0; b < usuario.length; b++) {
				if(ESuser[0]==usuario[b][diasn[dia]].entrada  &&  ESuser[1]==usuario[b][diasn[dia]].salida){
					if(b!=n){
						usuario[n][diasn[dia]].igualQue.push(b)
					}
				}
			}
		}
   for (var n = 0; n < usuario.length; n++) {
	   igualesDia[dia].push(usuario[n][diasn[dia]].igualQue.clone())
   } 
   var cad='<ul><li>',cad1=''
   var estalleno=false;
   var preh='';var posh=''
   var contCoches=0;
   for(var a=0;a<igualesDia[dia].length;a++){
	   contCoches=0
	  for(var b=0;b<igualesDia[dia][a].length;b++){ 
	   if(igualesDia[dia][a].length>1 ){
		   preh='';posh=''
		   if(usuario[igualesDia[dia][a][b]][diasn[dia]].usacoche){contCoches++; preh='<span style="font-weight:500;color:#000;">';posh='</span>'}
	     cad+= preh+ ''+usuario[igualesDia[dia][a][b]].nombre+''+posh+', '
		 estalleno=true
	   }else{
		   if(igualesDia[dia][a].length==1 ){
				cad1+= usuario[igualesDia[dia][a][b]].nombre+', '
		   }
		   estalleno=false
	   }
	   
	  }
	  if(contCoches>1){}
	  if(estalleno){
		  cad = cad.slice(0, -2);
		  if(contCoches>1){cad+=' <b style="white-space: nowrap;">&#x1f697;&#x1f697;</b>'}
		  cad+='</li><li>'}
   }
    cad = cad.slice(0, -4);
	var t=''
	//if(cad1.length>8){t='No pueden rotar:<br> '+cad1}
   //$('#R'+dia).html(cad+'</ul>'+ t)
    document.getElementById('R'+dia).innerHTML =cad+'</ul>'+ t;
  
   //Solo Firefox
   //console.log(igualesDia[dia].toSource())
}


// FIN TERCERA LEY



function llenaCelda(m,n){
	
	 var nsomos = en[m][n].personas.length
    cad = recopilaEntrada(m, n, nsomos)
    //$('#' + diass[m] +''+ n).html(cad)
	 document.getElementById(diass[m] +''+ n).innerHTML =cad;
}


function coincidenEnDiaHoras(dia,horaEn,horaSa){
	var personasEn=en[dia][horaEn].personas
	var personasSa=sa[dia][horaSa].personas
	//var intersection = personasEn.filter(x => personasSa.includes(x));
	var coinciden= personasEn.filter(a => personasSa.some(b => a === b))
	return coinciden
	
}
function llevanCocheDia(arr,dia){
	var llevan=[]
	for(var a=0;a<arr.length;a++){
		if(usuario[arr[a]][diasn[dia]].usacoche){
			llevan.push(arr[a])
			}
	}
	return llevan
}


function quitaCocheDia(dia){
	//RecopilaDatosEntradaYSalida
	//+
	//aQueHorasDeEntradaYsalidaSobranCoches?

	/*
	estadisticaDiaHora(dia,hora,'entrada||salida')
	correcto
	factor
	asignados
	nUsuarios
	cochesTeorico
	sobranCoches
	asientosLibres
	*/
	var datosEntrada=[]
	var sobranEn=[]
	for(var hora=1;hora<=7;hora++){
		datosEntrada.push(estadisticaDiaHora(dia,hora,'entrada'))
		sobranEn.push({sobran:datosEntrada[datosEntrada.length-1].sobranCoches,hora:hora})
	}
	var datosSalida=[]
	var sobranSa=[]
	for(var hora=1;hora<=7;hora++){
		datosSalida.push(estadisticaDiaHora(dia,hora,'salida'))
		sobranSa.push({sobran:datosSalida[datosSalida.length-1].sobranCoches,hora:hora})
	}
	
	
	//ordenaDeMasAmenosLosCochesSobrantesDeEntradaYsalida
	 sobranEn.sort(function(a, b){return b.sobran - a.sobran});
	 sobranSa.sort(function(a, b){return b.sobran - a.sobran});
	 //LasHorasQueMasCochesSobranSon
	 var horaEn=sobranEn[0].hora
	 var horaSa=sobranSa[0].hora
	 //alert(sobranHoraEn+' '+sobranHoraSa)
	 //BuscaUsuariosQueCoincidanYllevenCoche
	 var coinciden=coincidenEnDiaHoras(dia,horaEn,horaSa)
	 //BuscaLosQueLLeanCocheEnEsasDosHoras
	 var llevanCoche=llevanCocheDia(coinciden,dia)
	 //alert(llevanCoche.toSource())
	 quitaCocheUsuarioDia(llevanCoche[0],dia)
     llenaTabla();
     llenaUsuarios()
     ordenaSegunViajes()
	
}


function quitaCocheDia00(dia){
	//BuscaEntradasconFactorAlto
	var horasEntradaFactorAlto=[]
	for(var hora=1;hora<=7;hora++){
		if(en[dia][hora].factor>1){horasEntradaFactorAlto.push(hora)}
	}
	var horasSalidaFactorAlto=[]
	for(var hora=1;hora<=7;hora++){
		if(sa[dia][hora].factor>2){horasSalidaFactorAlto.push(hora)}
	}
	//QuienEsElUsuarioUltimo (el que más viajes hace?)
	var elQueMasViajesHaceEs = usuariosYviajes[usuariosYviajes.length-1].id
	//llevaCocheEsteUsuarioEstedia?
	var llevaCoche=usuario[elQueMasViajesHaceEs][diasn[dia]].usacoche
	if(llevaCoche && horasEntradaFactorAlto.length>0){
			//vamosAquitarseloSiPodemos
	//revisaTodasLasHorasDeEntradaDeEsteDiaConFactorAlto-SiEstaElUsuario+llevaCohe-EntoncesGuardaLaHora
	//revisaTodasLasHorasDeSalidaDeEsteDiaConFactorAlto-SiEstaElUsuario+llevaCohe-EntoncesGuardaLaHora
	//oMejor--miraHoraDeEntradaDelUsuarioYdeSalidaYcompruebaSiLasDosLLevanFactorAlto
	     var horaEntrada=usuario[elQueMasViajesHaceEs][diasn[dia]].entrada
		 var horaSalida=usuario[elQueMasViajesHaceEs][diasn[dia]].salida
		 var esPosibleEnlaEntrada=false
		 var esPosibleEnlaSalida=false
		 for(var a=0;a<horasEntradaFactorAlto.length;a++){
			if(horasEntradaFactorAlto[a]==horaEntrada){esPosibleEnlaEntrada=true; break}
		}
		
		for(var a=0;a<horasSalidaFactorAlto.length;a++){
			if(horasSalidaFactorAlto[a]==horaSalida){esPosibleEnlaSalida=true; break}
		}
		//var ft=factorESalto(dia,horaSalida,horaEntrada) && ft.correcto
		if(esPosibleEnlaEntrada && esPosibleEnlaSalida){
			//VamosAquitarUnCoche HURRA!!!
			//AverComoSeHaceEsto!!?????
			//PrimeroPonerFalseLaVariable usacoche  y viajes-- yVolverAReescribrirAverQuePasa
			usuario[elQueMasViajesHaceEs][diasn[dia]].usacoche=false
			usuario[elQueMasViajesHaceEs].viajes--
			//llenaTabla();
		    //llenaUsuarios()
		    //ordenaSegunViajes()
			return true
			//:-D
			
		}else{
			//console.log('No lleva coche. Guay! prueba otro dia')
			return false 
			
			//  :-(  PruebaConOtroDia
		}
	
	}else{
		//niHayNingunCocheQueQuitar :-(
		//podriamosCorrerLaMatrizUnPuestoYprobarConElSiguienteUsuario
		//pero__EsMejorProbarConElSiguienteDiaDeLaSemana
		//console.log('Que pasa?')
		return false
	}
}

function quitaCocheUsuarioDia(user,dia){
	  	  usuario[user][diasn[dia]].usacoche=false
			usuario[user].viajes--
			//llenaTabla();
		    //llenaUsuarios()
		    //ordenaSegunViajes()
			return true
			
}

function ponCocheUsuarioDia(user,dia){
		    usuario[user][diasn[dia]].usacoche=true
			usuario[user].viajes++
			//llenaTabla();
		    //llenaUsuarios()
		    //ordenaSegunViajes()
			return true
			
}

function intercambiaCochesUsuariosDia(user1,user2,dia){
	var cambio=21;
	if(usuario[user1][diasn[dia]].usacoche){cambio=12}
	if(cambio==12){
		usuario[user1][diasn[dia]].usacoche=false
		usuario[user1].viajes--
		usuario[user2][diasn[dia]].usacoche=true
		usuario[user2].viajes++
	}
	
	if(cambio==21){
		usuario[user1][diasn[dia]].usacoche=true
		usuario[user1].viajes++
		usuario[user2][diasn[dia]].usacoche=false
		usuario[user2].viajes--
	}	
			//llenaTabla();
		    //llenaUsuarios()
		    //ordenaSegunViajes()
			return true
			
	
}

function borraInfo(){
 setTimeout(
  function() 
  {
   // $('#info').hide();
	document.getElementById('info').style.visibility = 'hidden'

  }, 5000);
}

function todoBlanco(){
	if(completo){
		//$('#info').html('<h1>!!!COMPLETADO!!!</h1>');
		document.getElementById('info').innerHTML='<h1>!!!COMPLETADO!!!</h1>'
		
	}else{
		//$('#info').html('<h1>NO COMPLETADO. SinAsignar:'+horasSinAsignar+'</h1>');
		document.getElementById('info').innerHTML='<h1>NO COMPLETADO. SinAsignar:'+horasSinAsignar+'</h1>'
		
	}
	borraInfo()
	for(var dia=1;dia<=5;dia++){
		for(var hora=1;hora<=7;hora++){
			//$('#'+diass[dia]+hora).css('background-color','#fff')
			document.getElementById('info').style.backgroundColor = '#fff'
		}
	 }
}
function tablaColor(cdia,chora,ES){
	for(var dia=1;dia<=5;dia++){
	for(var hora=1;hora<=7;hora++){
		if(ES=='entrada'){
		if(en[dia][hora].factor>1){
		 //$('#'+diass[dia]+hora).css('background-color','#dfd')
		 document.getElementById(+diass[dia]+hora).style.backgroundColor = '#dfd'
		}
		if(en[dia][hora].factor==1){
		 //$('#'+diass[dia]+hora).css('background-color','#ddd')
		 document.getElementById(+diass[dia]+hora).style.backgroundColor = '#ddd'
		}
		if(en[dia][hora].factor<1){
		 //$('#'+diass[dia]+hora).css('background-color','#fdd')
		 document.getElementById(+diass[dia]+hora).style.backgroundColor = '#fdd'
		}
		}
		if(ES=='salida'){
		if(sa[dia][hora].factor>1){
		 //$('#'+diass[dia]+hora).css('background-color','#afd')
		 document.getElementById(+diass[dia]+hora).style.backgroundColor = '#afd'
		}
		if(sa[dia][hora].factor==1){
		 //$('#'+diass[dia]+hora).css('background-color','#aaa')
		 document.getElementById(+diass[dia]+hora).style.backgroundColor = '#aaa'
		}
		if(sa[dia][hora].factor<1){
		 //$('#'+diass[dia]+hora).css('background-color','#add')
		 document.getElementById(+diass[dia]+hora).style.backgroundColor = '#add'
		}
		}
		
	}
	//$('#'+diass[cdia]+chora).css('background-color','#ff0')
	document.getElementById(+diass[dia]+chora).style.backgroundColor = '#ff0'
	}
	var codias=0
	for(var codia=1;codia<=5;codia++){
	if(diaEstaCompleto(codia)){codias++}
	}
	if(codias==5){

	  todoBlanco();
	}
}


///////////////

Array.prototype.allValuesSame = function() {
    for(var i = 1; i < this.length; i++)
    {
        if(this[i].viajes !== this[0].viajes)
            return false;
    }
    return true;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


Array.prototype.stackR = function() {
    var j = this.pop();
    this.unshift(j)
 }

Array.prototype.stackL = function() {
    var j = this.shift()
    this.push(j);
 }


Array.prototype.clone = function() {
    return this.slice(0);
}



/////////////////// END UTILIDADES