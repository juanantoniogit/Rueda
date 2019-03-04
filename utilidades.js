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



function todosConCoche(dia,hora,ES){
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
	var r=0;
	if(numUsuariosEstaHora>0){
		r = numCochesAsignados * cavenEnCoche / numUsuariosEstaHora
	}
    //console.log(r+' El '+diasn[dia]+' a la hora '+hora+' hay asignados '+numCochesAsignados +' coches y  '+ numUsuariosEstaHora+ ' usuarios')
	if(ES=='entrada'){
		en[dia][hora].factor=r.toFixed(2)
	}
	if(ES=='salida'){
		sa[dia][hora].factor=r.toFixed(2)
	}
	if (r>=1){
		return  {correcto:true,factor:r.toFixed(2)}
	}
	else{
		return {correcto:false,factor:r.toFixed(2)}
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

function buscaCochePara(i,j,nlista){
	 var nsomos = 0;
	 usuario[en[i][j].personas[nlista]].viajes=0
	 if(en[i][j].personas.length==0) {return true}
	 
	 if(en[i][j].personas.length==1) {
    				usuario[en[i][j].personas[nlista]][diasn[i]].usacoche=true
					usuario[en[i][j].personas[nlista]].viajes++
					return true
				}		
     for (var c = 0; c < en[i][j].personas.length; c++) {
		     //for (var d = 0; d < usuariosYviajes.length; d++){
           		if(usuariosYviajes[nlista].id==en[i][j].personas[c]){
					usuario[en[i][j].personas[c]][diasn[i]].usacoche=true
					en[i][j].tengoCoches++
					usuario[en[i][j].personas[c]].viajes++
					return true
					break;
					
				}
    				//usuario[en[a][b][c]][diasn[a]].usacoche=true
  }	
  return false
}

function llenaCelda(m,n){
	
	 var nsomos = en[m][n].personas.length
    cad = recopilaEntrada(m, n, nsomos)
    $('#' + diass[m] +''+ n).html(cad)
}


function quitaCoche(dia){
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
			console.log('No lleva coche. Guay! prueba otro dia')
			return false 
			
			//  :-(  PruebaConOtroDia
		}
	
	}else{
		//niHayNingunCocheQueQuitar :-(
		//podriamosCorrerLaMatrizUnPuestoYprobarConElSiguienteUsuario
		//pero__EsMejorProbarConElSiguienteDiaDeLaSemana
		console.log('Que pasa?')
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
