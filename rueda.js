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

// VARIABLES


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
	en[a][b]={personas:[],tengoCoches:0,asignados:0,factor:0,necesitoCoches:0,check:false}
	}
}

for(var a=0;a<sa.length;a++){
	for(var b=0;b<sa[a].length;b++){	
	sa[a][b]={personas:[],tengoCoches:0,asignados:0,factor:0,necesitoCoches:0,check:false}
	}
}

var usuariosYviajes=[]
var diass = ['', 'l', 'm', 'x', 'j', 'v']
var diasn = ['', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes']

var enLista=0


for (var a = 0; a < usuario.length; a++) {
		usuario[a].viajes=0;
		usuario[a][diasn[1]].igualQue=[]
		usuario[a][diasn[2]].igualQue=[]
		usuario[a][diasn[3]].igualQue=[]
		usuario[a][diasn[4]].igualQue=[]
		usuario[a][diasn[5]].igualQue=[]
		
		//usuario[a][diasn[1]].usacoche=true
		//usuario[a][diasn[2]].usacoche=true
		//usuario[a][diasn[3]].usacoche=true
		//usuario[a][diasn[4]].usacoche=true
		//usuario[a][diasn[5]].usacoche=true
}


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

var igualesDia=[
[],[],[],[],[],[]
]

//  FIN VARIABLES



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
		  if(contCoches>1){cad+=' <b style="white-space: nowrap;"><i class="zmdi zmdi-car"></i><i class="zmdi zmdi-car"></i></b>'}
		  cad+='</li><li>'}
   }
    cad = cad.slice(0, -4);
	var t=''
	//if(cad1.length>8){t='No pueden rotar:<br> '+cad1}
   $('#R'+dia).html(cad+'</ul>'+ t)
  
   //Solo Firefox
   //console.log(igualesDia[dia].toSource())
}


// FIN TERCERA LEY


/////////////////////////

//  SEGUNDA LEY
//Segunda ley :-) Cada hora de salida y de entrada tiene que tener los coches suficientes.
//Debe aclarase ;-(

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
  en[a][b].asignados=asignados
  var todos=estadisticaDiaHora(a,b,'entrada')
  if(todos.correcto){
	  console.log('Estan todos el ' +diasn[a]+' a `hora '+b )
  }else{
	  //console.log('NO Estan todos ' +a+' '+b)
  }
  var necesitan=ncoches-asignados
  var sss='', nnn=''
  if(necesitan>1){sss='s'; nnn='n'}
  if(necesitan<=0){
	cad02+='<i class="zmdi zmdi-check"></i>'+ ' '+ todos.correcto +'  '+ todos.factor
	cad01='';
	en[a][b].necesitoCoches=0;
	en[a][b].check=true;
  }else{
	en[a][b].necesitoCoches=necesitan;
	cad02 += 'Hay '+ asignados+' coche'+ss+'. Se necesita'+nnn+' '+(ncoches-asignados)+' coche'+sss+' m&aacute;s<br>'+ todos.correcto +'  '+todos.factor
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
  sa[a][b].asignados=asignados;
  var todos=estadisticaDiaHora(a,b,'salida')
  if(todos.correcto){
	 console.log('Estan todos el ' +diasn[a]+' a hora '+b )
  }else{
	  //console.log('NO Estan todos ' +a+' '+b)
  }
  
  var necesitan=ncoches-asignados
  var sss='', nnn=''
  if(necesitan>1){sss='s'; nnn='n'}
  if(necesitan<=0){
	cad02+='<i class="zmdi zmdi-check"></i> '+ ''+' '+ todos.factor
	cad01='';
	sa[a][b].necesitoCoches=0;
	sa[a][b].check=true;
  }else{
	sa[a][b].necesitoCoches=necesitan;
	cad02 += 'Hay '+ asignados+' coche'+ss+'. Se necesita'+nnn+' '+(ncoches-asignados)+' coche'+sss+' m&aacute;s<br>'+''+'  '+todos.factor
  }
  
  return cad01+cad+cad02
}

// FIN SEGUNDA LEY



// PRIMERA LEY
//Primera ley :-) Usan coche los conductores que van solos en la entrada o en la salida.

function buscaConductoresSolosEntrada(cuantos){
  var nsomos = 0;
  for (var a = 0; a < en.length; a++) {
	for (var b = 0; b < en[a].length; b++) {
          	for (var c = 0; c < en[a][b].personas.length; c++) {
           		if(en[a][b].personas.length==cuantos) {
    				usuario[en[a][b].personas[c]][diasn[a]].usacoche=true
					usuario[en[a][b].personas[c]].viajes++
					en[a][b].asignados++;
				}		
    		}
  	}
  }	

}

function buscaConductoresSolosSalida(cuantos){
  var nsomos = 0;
  var marca=[]
  for (var a = 0; a < sa.length; a++) {
	for (var b = 0; b < sa[a].length; b++) {
          	for (var c = 0; c < sa[a][b].personas.length; c++) {
           		if(sa[a][b].personas.length==cuantos) {
    				marca.push(a+','+b+','+c+','+ sa[a][b].personas[c])
					usuario[sa[a][b].personas[c]].viajes++
					sa[a][b].asignados++;
				}		
    		}
  	}
  }	
  for(var j=0;j<marca.length;j++){
	   var m=marca[j].split(',')
	  usuario[m[3]][diasn[m[0]]].usacoche=true
     
  }
}

//  FIN PRIMERA LEY


/////////////////////////
// UTILIDADES PRINCIPALES
/////////////////////////

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
	var cad='<table width="40%" border="0px">'
	for (var a = 0; a < usuariosYviajes.length; a++) {
		var v=''
		var diast=''
		for(var i=0;i<usuariosYviajes[a].viajes; i++){
			v+='<i class="zmdi zmdi-car"></i>'
		}
		for(var j=1;j<=5; j++){
		if(usuario[usuariosYviajes[a].id][diasn[j]].usacoche){
			diast+=diass[j]+'';
		}
		}
		//cad+='<tr><td style="width:10%;border-style:solid; border-width:0px;text-align:left;">'+(usuariosYviajes[a].id)+'</td><td style="width:50%; border-style:solid; border-width:0px;text-align:left;"><i class="zmdi zmdi-account"></i> '+usuario[usuariosYviajes[a].id].nombre+ '</td><td style="width:30%;border-style:solid; border-width:0px;text-align:left;"><div id="nviajes'+(a+1)+'">'+v+' ('+usuariosYviajes[a].viajes+')</div></td></tr>'
	    cad+='<tr><td style="width:30%; border-style:solid; border-width:0px;text-align:left;">'+usuariosYviajes[a].id+'<i class="zmdi zmdi-account"></i>  '+usuario[usuariosYviajes[a].id].nombre+ '</td><td style="width:70%;border-style:solid; border-width:0px;text-align:left;"><div id="nviajes'+(a+1)+'">'+v+' ('+usuariosYviajes[a].viajes+') '+diast+'</div></td></tr>'

	}
	cad+='</table><br>'
	 //$('#usuarios').prepend(cad)
	 $('#usuarios').html(cad)
}

function ordenaSegunViajes() {
  usuariosYviajes.sort(function(a, b){return a.viajes - b.viajes});
  llenaUsuariosOrden();
}


function llena(dia){
		completo=diaEstaCompleto(dia) 
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

// FIN DE UTILIDADES PRINCIPALES







/////////////////////////
// INICIO

/*
// Primera ley :-) Usan coche los conductores que van solos en la entrada o en la salida.
// Segunda ley :-) Cada hora de salida tiene que tener los coches suficientes.
		buscaNumCochesEnCadaHora()
// Tercera ley :-) Los que tienen la misma hora de entrada y salida se pueden intercambiar, o pueden suplirse
*/



$(document).ready(function(){
	// BASICO: Rellena las matrices auxiliares de entradas y salidas. Reset
	llenaSalidasYentradas()
	///
	

	// CUMPLE LA PRIMERA LEY
	buscaConductoresSolosEntrada(1)
	buscaConductoresSolosSalida(1)
	//
	
	
	
	//
	
	//SHOW 1
	llenaTabla()
	llenaUsuarios()
	ordenaSegunViajes()
	
	

	
		//$(document).click(function(){	
		//var us=en[clickDia][clickHora].personas
    for(var a=0;a<80;a++){
		var us=quienHayLibreDiaHoraEnOrdenViajes(clickDia,clickHora,clickES[clickContES])
		for(var u=0;u<us.length;u++){
			 if(u<estadisticaDiaHora(clickDia,clickHora,clickES[clickContES]).cochesTeorico){
				if(estadisticaDiaHora(clickDia,clickHora,clickES[clickContES]).correcto=='faltan'){
					ponCocheUsuarioDia(us[u].id,clickDia)
					llenaTabla()
					llenaUsuarios()
					ordenaSegunViajes()
					
				}
				
			}
			
		}
		var t=tablaColor(clickDia,clickHora,clickES[clickContES])
	 if(t)break
		clickDia++
		if(clickDia>5){clickDia=1;clickHora++;}
		if(clickHora>7){
			clickDia=1;clickHora=1;clickContES++;
			if(clickContES>=clickES.length){clickContES=0}
		}
	
   //})
	}
	
	
	
// EL PRINCIPAL: 
//BUSCANCO COCHES NECESARIOS POR HORA SEGUN NUMERO DE USUSARIOS (SEGUNDA LEY)
//Y ASIGNANDO COCHES  (POR DÍA)
/*
 var dia=1;
 var completo=false
 //$(document).click(function(){
	 for(var a =0; a<30;a++){
	 if(dia<6){
		 llena(dia)
		  completo=diaEstaCompleto(dia) 
		  if(completo){dia++; enLista=0}
	 }
   }
   
 */
 
 //FILTRO ARTESANAL :-)
 //A partir de aquí OPTIMIZAR Y UN LAVADO
//quitaCocheUsuarioDia(2,3)
//llenaTabla();
//llenaUsuarios()
//ordenaSegunViajes()
//quitaCocheDia(2)


/* 
quitaCocheDia(3)
quitaCocheUsuarioDia(6,2)
for(var b=0;b<3;b++){
//$(document).click(function(){
	usuariosYviajes.stackR()
	llenaUsuariosOrden()
}//)

*/

// CUMPLE LA TERCERA LEY
for(var dia =1; dia<=5;dia++){
	reuneIgualesDia(dia)
}

/*

*/


});

	var clickDia=1
	var clickHora=1
	var clickES=['entrada','salida']
	var clickContES=0


/*
Prueba con esto
	var clickDia=1
	var clickHora=4
	var clickES=['salida','entrada']
	var clickContES=0
*/	
	