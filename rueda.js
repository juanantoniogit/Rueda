/*
///////////////
HTML ids usados

En la tabla
l1 m1 x1 j1 v1
l2 m2 x2 j2 v2
l3 m3 x3 j3 v3
l4 m4 x4 j4 v4
l5 m5 x5 j5 v5
l6 m6 x6 j6 v6
l7 m7 x7 j7 v7

En la lista de usuarios
nviajes+numUsuario


///////////////
*/
var usuario = []

usuario.push({
  nombre: 'Juan',
  lunes: {
    entrada: 2,
    salida: 6,
    usacoche: false
  },
  martes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  },
  miercoles: {
    entrada: 2,
    salida: 6,
    usacoche: false
  },
  jueves: {
    entrada: 2,
    salida: 6,
    usacoche: false
  },
  viernes: {
    entrada: 2,
    salida: 6,
    usacoche: false
  }
})

usuario.push({
  nombre: 'Pedro',
  lunes: {
    entrada: 3,
    salida: 6,
    usacoche: false
  },
  martes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  },
  miercoles: {
    entrada: 2,
    salida: 6,
    usacoche: false
  },
  jueves: {
    entrada: 2,
    salida: 6,
    usacoche: false
  },
  viernes: {
    entrada: 2,
    salida: 6,
    usacoche: false
  }
})

usuario.push({
  nombre: 'Victoria',
  lunes: {
    entrada: 1,
    salida: 5,
    usacoche: false
  },
  martes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  },
  miercoles: {
    entrada: 1,
    salida: 6,
    usacoche: false
  },
  jueves: {
    entrada: 1,
    salida: 5,
    usacoche: false
  },
  viernes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  }
})
usuario.push({
  nombre: 'M. Carmen',
  lunes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  },
  martes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  },
  miercoles: {
    entrada: 1,
    salida: 4,
    usacoche: false
  },
  jueves: {
    entrada: 1,
    salida: 5,
    usacoche: false
  },
  viernes: {
    entrada: 1,
    salida: 5,
    usacoche: false
  }
})

usuario.push({
  nombre: 'Fidel',
  lunes: {
    entrada: 1,
    salida: 4,
    usacoche: false
  },
  martes: {
    entrada: 1,
    salida: 4,
    usacoche: false
  },
  miercoles: {
    entrada: 1,
    salida: 6,
    usacoche: false
  },
  jueves: {
    entrada: 2,
    salida: 6,
    usacoche: false
  },
  viernes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  }
})

usuario.push({
  nombre: 'Tania',
  lunes: {
    entrada: 1,
    salida: 5,
    usacoche: false
  },
  martes: {
    entrada: 1,
    salida: 5,
    usacoche: false
  },
  miercoles: {
    entrada: 1,
    salida: 5,
    usacoche: false
  },
  jueves: {
    entrada: 1,
    salida: 5,
    usacoche: false
  },
  viernes: {
    entrada: 1,
    salida: 5,
    usacoche: false
  }
})

usuario.push({
  nombre: 'M. Jose',
  lunes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  },
  martes: {
    entrada: 6,
    salida: 7,
    usacoche: false
  },
  miercoles: {
    entrada: 1,
    salida: 7,
    usacoche: false
  },
  jueves: {
    entrada: 1,
    salida: 5,
    usacoche: false
  },
  viernes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  }
})

usuario.push({
  nombre: 'Rita',
  lunes: {
    entrada: 2,
    salida: 5,
    usacoche: false
  },
  martes: {
    entrada: 3,
    salida: 5,
    usacoche: false
  },
  miercoles: {
    entrada: 3,
    salida: 5,
    usacoche: false
  },
  jueves: {
    entrada: 3,
    salida: 5,
    usacoche: false
  },
  viernes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  }
})


// VARIABLES DE ENTRADA  en[0]..e[6] 
var en = []
en[0] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
en[1] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
en[2] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
en[3] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
en[4] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
en[5] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
en[6] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]

// VARIABLES DE SALIDA  sa[0]..sa[6] 
var sa = []
sa[0] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
sa[1] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
sa[2] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
sa[3] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
sa[4] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
sa[5] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
sa[6] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
for(var a=0;a<en.length;a++){
	for(var b=0;b<en[a].length;b++){	
	en[a][b]={personas:[],tengoCoches:0,necesitoCoches:0,check:false}
	}
}
for(var a=0;a<sa.length;a++){
	for(var b=0;b<sa[a].length;b++){	
	sa[a][b]={personas:[],tengoCoches:0,necesitoCoches:0,check:false}
	}
}

var usuariosYviajes=[]
var diass = ['', 'l', 'm', 'x', 'j', 'v']
var diasn = ['', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes']

function llenaSalidasYentradas(){

	for (var a = 0; a < usuario.length; a++) {
		usuario[a].viajes=0;
	    en[1][usuario[a].lunes.entrada].personas.push(a)
		sa[1][usuario[a].lunes.salida].personas.push(a)
	   
		en[2][usuario[a].martes.entrada].personas.push(a)
		sa[2][usuario[a].martes.salida].personas.push(a)

		en[3][usuario[a].miercoles.entrada].personas.push(a)
	  	sa[3][usuario[a].miercoles.salida].personas.push(a)
		   
    	en[4][usuario[a].jueves.entrada].personas.push(a)
	  	sa[4][usuario[a].jueves.salida].personas.push(a)
	  		  
		en[5][usuario[a].viernes.entrada].personas.push(a)
	  	sa[5][usuario[a].viernes.salida].personas.push(a)
	}
}



function recopilaEntrada(a, b, num) {
  var ncoches=Math.ceil(en[a][b].personas.length/4);
  var s='',n=''
  if(ncoches>1){s='s';n='n'}
  var asignados=0;
  var sp='',np=''
  var personas=en[a][b].personas.length
  if(personas>1){sp='s';np='n'}
  var cad01 = '(' + personas  + ' persona'+sp+' necesita'+ np +' '+ Math.ceil(en[a][b].personas.length/4)+' coche'+s+' )<br>'
  var cad=''
  var cssprev = '<span style="color:green">'
  var cssend = '</span>'
  var cssprevConductor = '<span style="color:green"><b>'
  var cssendConductor = '</b></span>'
  if (num == 0) {
    return ''
  }
  //cad += '(' + n + ')<br>'
 
  var css0 = '';
  var css1 = ''
  for (var i = 0; i < en[a][b].personas.length; i++) {
    css0 = '';
    css1 = ''
    if (usuario[en[a][b].personas[i]][diasn[a]].usacoche) {
      css0 = cssprevConductor +' <i class="zmdi zmdi-car"></i> ';
      css1 = cssendConductor
	  asignados++;
	  
    }else{
	  css0 = cssprev;
      css1 = cssend
	}
    cad += css0 + usuario[en[a][b].personas[i]].nombre + css1 + '<br>'
  }
  //cad += '</div>';
  var cad02=''
  var ss='', nn=''
  if(asignados>1 || asignados==0){
	  ss='s'; nn='n'
	  
  }
  en[a][b].tengoCoches=ncoches;
  var necesitan=ncoches-asignados
  var sss='', nnn=''
  if(necesitan>1){sss='s'; nnn='n'}
  if(necesitan<=0){
	cad02+='<i class="zmdi zmdi-check"></i>'
	cad01='';
	en[a][b].necesitoCoches=0;
	en[a][b].check=true;
  }else{
	en[a][b].necesitoCoches=necesitan;
	cad02 += 'Hay '+ asignados+' coche'+ss+'. Se necesita'+nnn+' '+(ncoches-asignados)+' coche'+sss+' m&aacute;s<br>'
  }
  
  return cad01+cad+cad02
}

function recopilaSalida(a, b, num) {
 var ncoches=Math.ceil(sa[a][b].personas.length/4);
  var s='',n=''
  if(ncoches>1){s='s';n='n'}
  var asignados=0;
  var sp='',np=''
  var personas=sa[a][b].personas.length
  if(personas>1){sp='s';np='n'}
  var cad01 = '(' + personas  + ' persona'+sp+' necesita'+ np +' '+ Math.ceil(sa[a][b].personas.length/4)+' coche'+s+' )<br>'
  var cad=''
  var cssprev = '<span style="color:red">'
  var cssend = '</span>'
  var cssprevConductor = '<span style="color:red"><b>'
  var cssendConductor = '</b></span>'
  if (num == 0) {
    return ''
  }
  var css0 = '';
  var css1 = ''
  for (var i = 0; i < sa[a][b].personas.length; i++) {
    css0 = '';
    css1 = ''
     if (usuario[sa[a][b].personas[i]][diasn[a]].usacoche) {
      css0 = cssprevConductor +' <i class="zmdi zmdi-car"></i> ';
      css1 = cssendConductor
	  asignados++;
    }else{
	  css0 = cssprev;
      css1 = cssend
	}
    cad += css0 + usuario[sa[a][b].personas[i]].nombre + css1 + '<br>'
  }
 var cad02=''
  var ss='', nn=''
  if(asignados>1 || asignados==0){
	  ss='s'; nn='n'
	  
  }
  sa[a][b].tengoCoches=ncoches;
  var necesitan=ncoches-asignados
  var sss='', nnn=''
  if(necesitan>1){sss='s'; nnn='n'}
  if(necesitan<=0){
	cad02+='<i class="zmdi zmdi-check"></i>'
	cad01='';
	sa[a][b].necesitoCoches=0;
	sa[a][b].check=true;
  }else{
	sa[a][b].necesitoCoches=necesitan;
	cad02 += 'Hay '+ asignados+' coche'+ss+'. Se necesita'+nnn+' '+(ncoches-asignados)+' coche'+sss+' m&aacute;s<br>'
  }
  
  return cad01+cad+cad02
}





function buscaConductoresSolosEntrada(){
  var nsomos = 0;
  for (var a = 0; a < en.length; a++) {
	for (var b = 0; b < en[a].length; b++) {
          	for (var c = 0; c < en[a][b].personas.length; c++) {
           		if(en[a][b].personas.length==1) {
    				usuario[en[a][b].personas[c]][diasn[a]].usacoche=true
					usuario[en[a][b].personas[c]].viajes++
					
				}		
    		}
  	}
  }	

}

function buscaConductoresSolosSalida(){
  var nsomos = 0;
  var marca=[]
  for (var a = 0; a < sa.length; a++) {
	for (var b = 0; b < sa[a].length; b++) {
          	for (var c = 0; c < sa[a][b].personas.length; c++) {
           		if(sa[a][b].personas.length==1) {
    				marca.push(a+','+b+','+c+','+ sa[a][b].personas[c])
					usuario[sa[a][b].personas[c]].viajes++
				}		
    		}
  	}
  }	
  for(var j=0;j<marca.length;j++){
	   var m=marca[j].split(',')
	  usuario[m[3]][diasn[m[0]]].usacoche=true
     
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

function llenaTabla(){
  var nsomos = 0;
  for (var a = 1; a < 6; a++) {
	  $('#' + diass[a] + '1').html(' ')
	  $('#' + diass[a] + '2').html(' ')
	  $('#' + diass[a] + '3').html(' ')
	  $('#' + diass[a] + '4').html(' ')
	  $('#' + diass[a] + '5').html(' ')
	  $('#' + diass[a] + '6').html(' ')
	  $('#' + diass[a] + '7').html(' ')
  }
  for (var a = 1; a < 6; a++) {
	// ENTRADAS
    nsomos = en[a][1].personas.length
    cad = recopilaEntrada(a, 1, nsomos)
    $('#' + diass[a] + '1').append(cad)
	
    nsomos = en[a][2].personas.length
    cad = recopilaEntrada(a, 2, nsomos)
    $('#' + diass[a] + '2').append(cad)
	
    nsomos = en[a][3].personas.length
    cad = recopilaEntrada(a, 3, nsomos)
    $('#' + diass[a] + '3').append(cad)
	
	 nsomos = en[a][4].personas.length
    cad = recopilaEntrada(a, 4, nsomos)
    $('#' + diass[a] + '4').append(cad)
	
	 nsomos = en[a][5].personas.length
    cad = recopilaEntrada(a, 5, nsomos)
    $('#' + diass[a] + '5').append(cad)
	
	 nsomos = en[a][6].personas.length
    cad = recopilaEntrada(a, 6, nsomos)
    $('#' + diass[a] + '6').append(cad)
	
	// SALIDAS
    nsomos = sa[a][4].personas.length
    cad = recopilaSalida(a, 4, nsomos)
    $('#' + diass[a] + '4').append(cad)
	
    nsomos = sa[a][5].personas.length
    cad = recopilaSalida(a, 5, nsomos)
    $('#' + diass[a] + '5').append(cad)
	
    nsomos = sa[a][6].personas.length
    cad = recopilaSalida(a, 6, nsomos)
    $('#' + diass[a] + '6').append(cad)
	
	 nsomos = sa[a][7].personas.length
    cad = recopilaSalida(a, 7, nsomos)
    $('#' + diass[a] + '7').append(cad)

  }
}

function llenaUsuarios(){
	//var cad='<table width="50%" border="0px">'
	usuariosYviajes=[]
	for (var a = 0; a < usuario.length; a++) {
		var v=''
		for(var i=0;i<usuario[a].viajes; i++){
			v+='<i class="zmdi zmdi-car"></i>'
		}
		usuariosYviajes.push({id:a,viajes:usuario[a].viajes})
		//cad+='<tr><td style="width:10%;border-style:solid; border-width:0px;text-align:left;">'+(a)+'</td><td style="width:50%; border-style:solid; border-width:0px;text-align:left;"><i class="zmdi zmdi-account"></i> '+usuario[a].nombre+ '</td><td style="width:30%;border-style:solid; border-width:0px;text-align:left;"><div id="nviajes'+(a)+'">'+v+' ('+usuario[a].viajes+')</div></td></tr>'
	}
	//cad+='</table>'
	// $('#usuarios').html(cad)
}

function llenaUsuariosOrden(){
	var cad='<table width="30%" border="0px">'
	for (var a = 0; a < usuariosYviajes.length; a++) {
		var v=''
		for(var i=0;i<usuariosYviajes[a].viajes; i++){
			v+='<i class="zmdi zmdi-car"></i>'
		}
		//cad+='<tr><td style="width:10%;border-style:solid; border-width:0px;text-align:left;">'+(usuariosYviajes[a].id)+'</td><td style="width:50%; border-style:solid; border-width:0px;text-align:left;"><i class="zmdi zmdi-account"></i> '+usuario[usuariosYviajes[a].id].nombre+ '</td><td style="width:30%;border-style:solid; border-width:0px;text-align:left;"><div id="nviajes'+(a+1)+'">'+v+' ('+usuariosYviajes[a].viajes+')</div></td></tr>'
	    cad+='<tr><td style="width:30%; border-style:solid; border-width:0px;text-align:left;"><i class="zmdi zmdi-account"></i> '+usuario[usuariosYviajes[a].id].nombre+ '</td><td style="width:70%;border-style:solid; border-width:0px;text-align:left;"><div id="nviajes'+(a+1)+'">'+v+' ('+usuariosYviajes[a].viajes+')</div></td></tr>'

	}
	cad+='</table><br>'
	 $('#usuarios').prepend(cad)
}

function ordenaSegunViajes() {
  usuariosYviajes.sort(function(a, b){return a.viajes - b.viajes});
  llenaUsuariosOrden();
}



/*
// Primera ley :-) Usan coche los conductores que van solos en la entrada o en la salida.
// Segunda ley :-) Cada hora de salida tiene que tener los coches suficientes.
		buscaNumCochesEnCadaHora()
*/

/////////////////////
//  UTILIDADES
////////////////////

function aQuienLeToca(){
	var letocaa=usuariosYviajes[0].id
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
function buscaConductorParaDiaHora(dia,hora){
	var q=aQuienLeToca()
	var libre=quienHayLibre(dia,hora,0)
		return [q,usuario[q].nombre,libre]
}
function buscaConductoresDia(dia){
	var q=aQuienLeToca()
	var libre=quienHayLibreHoy(dia)
	
		return [q,usuario[q].nombre,libre]
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
		var t=en[dia][hora].tengoCoches
		var n=en[dia][hora].necesitoCoches
		return n
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

function llena(dia){
		completo=diaEstaCompleto(dia) 
		console.log(completo+' '+a)	 
		if(completo==false){
			var b=buscaConductoresDia(dia)
			if(b[2].includes(b[0])){
				console.log('es ideoneo'+' '+b[2].join(' '))
				var aqueh=aqueHoraEntraSale(dia,b[0])
				console.log(aqueh.join(' '))
				asignaCocheDiaHora(b[0],dia,aqueh[0],aqueh[1])
			} else{
				console.log('No es ideoneo, debes buscar otro')
			}
		}	
}
/////////////////// END UTILIDADES


$(document).ready(function(){
	llenaSalidasYentradas()
	//buscaConductoresSolosEntrada()
	//buscaConductoresSolosSalida()
	llenaTabla()
	llenaUsuarios()
	ordenaSegunViajes()
	
 var dia=1;
 var completo=false
 $(document).click(function(){
	 if(dia<6){
		  llena(dia)
		  completo=diaEstaCompleto(dia) 
		  if(completo){dia++}
	 }
 });


	
	
});
