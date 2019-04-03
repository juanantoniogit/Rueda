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

var ciudadCiudad='0-0'
var usuario=[]
var cabenEnCoche = 4
var nDiasSemana=5
var nHorasEntrada=7
var nHorasSalida=7
var nombreUsuario=''
var contUsuarios=0;
var usuarioIni=[]
var direc=''

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
/////TABLA META
/////VIAJES SEMANA // VIAJES META
var numUsuarios=usuario.length;
var maxDiasSemana=5;
var META=[
{viajesSemana:0, meta:0},
{viajesSemana:1, meta:0},
{viajesSemana:2, meta:1},
{viajesSemana:3, meta:1},
{viajesSemana:4, meta:1},
{viajesSemana:5, meta:2}
]



var usuariosYviajes=[]
var diass = ['', 'l', 'm', 'x', 'j', 'v']
var diasn = ['', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes']

var enLista=0
//////
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


for (var a = 0; a < usuario.length; a++) {
	usuario[a].viajes=0;
	for(var b=1;b<=maxDiasSemana;b++){
		usuario[a][diasn[b]].igualQue=[]
	}
}

function numDiasQueViajaUsuario(a){
		var cont=0;
		for(var b=1;b<=maxDiasSemana;b++){
			if(usuario[a][diasn[b]].entrada>0){cont++}
		}
		return cont
}

function llenaSalidasYentradas(){
	var n=0;
	for (var a = 0; a < usuario.length; a++) {
		usuario[a].viajes=0;
		n=numDiasQueViajaUsuario(a)
		usuario[a].meta=META[n].meta
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

//  SEGUNDA LEY
//Segunda ley :-) Cada hora de salida y de entrada tiene que tener los coches suficientes.
//Debe aclarase ;-(

function recopilaEntrada(a, b, num) {
  var ncoches=Math.ceil(en[a][b].personas.length/cabenEnCoche);
  var s='',n=''
  if(ncoches>1){s='s';n='n'}
  var asignados=0;
  var sp='',np=''
  var personas=en[a][b].personas.length
  if(personas>1){sp='s';np='n'}
  var cad01 = '(' + personas  + ' persona'+sp+' necesita'+ np +' '+ Math.ceil(en[a][b].personas.length/cabenEnCoche)+' coche'+s+' )<br>'
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
      //css0 = cssprevConductor +' <i class="zmdi zmdi-car"></i> ';
	  css0 = cssprevConductor +'   &#x1f697;';
	  
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
	  //console.log('Estan todos el ' +diasn[a]+' a `hora '+b )
  }else{
	  //console.log('NO Estan todos ' +a+' '+b)
  }
  var necesitan=ncoches-asignados
  var sss='', nnn=''
  if(necesitan>1){sss='s'; nnn='n'}
  if(necesitan<=0){
	//cad02+='<i class="zmdi zmdi-check"></i>'+ '   '+ todos.factor
	cad02+='&#10004;'+ '   '+ todos.factor
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
 var ncoches=Math.ceil(sa[a][b].personas.length/cabenEnCoche);
  var s='',n=''
  if(ncoches>1){s='s';n='n'}
  var asignados=0;
  var sp='',np=''
  var personas=sa[a][b].personas.length
  if(personas>1){sp='s';np='n'}
  var cad01 = '(' + personas  + ' persona'+sp+' necesita'+ np +' '+ Math.ceil(sa[a][b].personas.length/cabenEnCoche)+' coche'+s+' )<br>'
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
      css0 = cssprevConductor +'  &#x1f697;';
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
	 //console.log('Estan todos el ' +diasn[a]+' a hora '+b )
  }else{
	  //console.log('NO Estan todos ' +a+' '+b)
  }
  
  var necesitan=ncoches-asignados
  var sss='', nnn=''
  if(necesitan>1){sss='s'; nnn='n'}
  if(necesitan<=0){
	//cad02+='<i class="zmdi zmdi-check"></i> '+ ''+' '+ todos.factor
	cad02+='&#10004;'+ '   '+ todos.factor
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
	// ENTRADAS
    nsomos = en[a][1].personas.length
    cad = recopilaEntrada(a, 1, nsomos)
    //$('#' + diass[a] + '1').append(cad)
	document.getElementById(diass[a] + '1').insertAdjacentHTML( 'beforeend', cad );
	
    nsomos = en[a][2].personas.length
    cad = recopilaEntrada(a, 2, nsomos)
    //$('#' + diass[a] + '2').append(cad)
	document.getElementById(diass[a] + '2').insertAdjacentHTML( 'beforeend', cad );
	
    nsomos = en[a][3].personas.length
    cad = recopilaEntrada(a, 3, nsomos)
    //$('#' + diass[a] + '3').append(cad)
	document.getElementById(diass[a] + '3').insertAdjacentHTML( 'beforeend', cad );
	
	 nsomos = en[a][4].personas.length
    cad = recopilaEntrada(a, 4, nsomos)
    //$('#' + diass[a] + '4').append(cad)
	document.getElementById(diass[a] + '4').insertAdjacentHTML( 'beforeend', cad );
	
	 nsomos = en[a][5].personas.length
    cad = recopilaEntrada(a, 5, nsomos)
    //$('#' + diass[a] + '5').append(cad)
	document.getElementById(diass[a] + '5').insertAdjacentHTML( 'beforeend', cad );
	
	 nsomos = en[a][6].personas.length
    cad = recopilaEntrada(a, 6, nsomos)
   //$('#' + diass[a] + '6').append(cad)
   document.getElementById(diass[a] + '6').insertAdjacentHTML( 'beforeend', cad );
	
	
	// SALIDAS
    nsomos = sa[a][4].personas.length
    cad = recopilaSalida(a, 4, nsomos)
    //$('#' + diass[a] + '4').append(cad)
	document.getElementById(diass[a] + '4').insertAdjacentHTML( 'beforeend', cad );
	
    nsomos = sa[a][5].personas.length
    cad = recopilaSalida(a, 5, nsomos)
    //$('#' + diass[a] + '5').append(cad)
	document.getElementById(diass[a] + '5').insertAdjacentHTML( 'beforeend', cad );
	
    nsomos = sa[a][6].personas.length
    cad = recopilaSalida(a, 6, nsomos)
    //$('#' + diass[a] + '6').append(cad)
	document.getElementById(diass[a] + '6').insertAdjacentHTML( 'beforeend', cad );
	
	 nsomos = sa[a][7].personas.length
    cad = recopilaSalida(a, 7, nsomos)
    //$('#' + diass[a] + '7').append(cad)
	document.getElementById(diass[a] + '7').insertAdjacentHTML( 'beforeend', cad );

  }
}



function llenaUsuarios(){
	//var cad='<table width="50%" border="0px">'
	usuariosYviajes=[]
	for (var a = 0; a < usuario.length; a++) {
		var v=''
		for(var i=0;i<usuario[a].viajes; i++){
			v+='&#x1f697;'
		}
		usuariosYviajes.push({id:a,viajes:usuario[a].viajes})
		//cad+='<tr><td style="width:10%;border-style:solid; border-width:0px;text-align:left;">'+(a)+'</td><td style="width:50%; border-style:solid; border-width:0px;text-align:left;"><i class="zmdi zmdi-account"></i> '+usuario[a].nombre+ '</td><td style="width:30%;border-style:solid; border-width:0px;text-align:left;"><div id="nviajes'+(a)+'">'+v+' ('+usuario[a].viajes+')</div></td></tr>'
	}
	//cad+='</table>'
	// $('#usuarios').html(cad)
}

function queHorasNoEstanCheckSemana(){
	var noEstanCheck=[]
	var cad=""
	for(var dia=1;dia<=5;dia++){
		for(var hora=1;hora<en[dia].length;hora++){
			//if(!en[dia][hora].check && en[dia][hora].personas.length>0){
			if(en[dia][hora].factor<1 && en[dia][hora].personas.length>0){
				noEstanCheck.push({dia:dia,hora:hora,ES:'Entrada'})
				cad+=en[dia][hora].factor +' '
			}else{
			cad+=sa[dia][hora].factor+' '
			}
		}
		for(var hora=1;hora<sa[dia].length;hora++){
			//if(!sa[dia][hora].check && sa[dia][hora].personas.length>0){
			if(sa[dia][hora].factor<1 && sa[dia][hora].personas.length>0){
				noEstanCheck.push({dia:dia,hora:hora,ES:'Salida'})
				cad+=sa[dia][hora].factor+' '
			}else{
			cad+=sa[dia][hora].factor+ ' '
			}
		}
	}	
	//console.log(noEstanCheck.join(' '))
	//alert(cad)
	return noEstanCheck
}

function llenaUsuariosOrden(){
	//VERIFICA SI ES COMPLETO
	var cad=""
	var noCheck=queHorasNoEstanCheckSemana()
	//alert(noCheck.length)
	
	if(noCheck.length>0){
		var pred='n'
		if(noCheck.length==1){pred=''}
		cad+='Queda'+pred+' sin completar: '
		for(var a=0;a<noCheck.length;a++){
			cad+='<span><b>'+diass[noCheck[a].dia].toUpperCase()+'</b>'+noCheck[a].hora+'</span> '
		}
	}
	cad+='<table width="100%" border="0px">'
	for (var a = 0; a < usuariosYviajes.length; a++) {
		var v=''
		var diast=''
		for(var i=0;i<usuariosYviajes[a].viajes; i++){
			v+='&#x1f697;'
		}
		for(var j=1;j<=5; j++){
		if(usuario[usuariosYviajes[a].id][diasn[j]].usacoche){
			var he=usuario[usuariosYviajes[a].id][diasn[j]].entrada
			var hs=usuario[usuariosYviajes[a].id][diasn[j]].salida
			
			diast+='<b>'+diass[j]+'</b>'+he+'/'+hs+' ';
		}
		}
		//cad+='<tr><td style="width:10%;border-style:solid; border-width:0px;text-align:left;">'+(usuariosYviajes[a].id)+'</td><td style="width:50%; border-style:solid; border-width:0px;text-align:left;"><i class="zmdi zmdi-account"></i> '+usuario[usuariosYviajes[a].id].nombre+ '</td><td style="width:30%;border-style:solid; border-width:0px;text-align:left;"><div id="nviajes'+(a+1)+'">'+v+' ('+usuariosYviajes[a].viajes+')</div></td></tr>'
	    //cad+='<tr><td style="width:30%; border-style:solid; border-width:0px;text-align:left;"><span style="color:#fff">'+usuariosYviajes[a].id+'</span> &#x1f464;  '+usuario[usuariosYviajes[a].id].nombre+ '</td><td style="width:70%;border-style:solid; border-width:0px;text-align:left;"><div id="nviajes'+(a+1)+'">'+v+' ('+usuariosYviajes[a].viajes+') '+diast+'</div></td></tr>'
		cad+='<tr><td style="width:30%; border-style:solid; border-width:0px;text-align:left;"> &#x1f464;  '+usuario[usuariosYviajes[a].id].nombre+ '</td><td style="width:70%;border-style:solid; border-width:0px;text-align:left;"><div id="nviajes'+(a+1)+'">'+v+' ('+usuariosYviajes[a].viajes+') '+diast.toUpperCase()+'</div></td></tr>'

	}
	cad+='</table><br>'
	 //$('#usuarios').prepend(cad)
	 //$('#usuarios').html(cad)
	 document.getElementById('usuarios').innerHTML=cad;
}

function ordenaSegunViajes() {
  usuariosYviajes.sort(function(a, b){return a.viajes - b.viajes});
  llenaUsuariosOrden();
}



/////////////////////////////////////
/// VERSION 2   DESDE ESQUEMA
//////////////////////////////////////

var posES={dia:1,hora:1, cont:0, ES:['entrada','salida']} 
var nVueltas=0
var nFilas=7, nColumnas=5;
var totalHoras=nFilas*nColumnas*2; //35 const 
var horasSinAsignar = totalHoras
var horasAsignadasVuelta=0
var horasSinAsignarPrevia=totalHoras;
var asignaAlAzar=false
var completo=false

function pasaSiguiente(){
  var cierto=false;
  var hsa=35;
   posES.dia++
		if(posES.dia>5){posES.dia=1;posES.hora++;}
		if(posES.hora>7){
			cierto=true;
			posES.dia=1;posES.hora=1;
			posES.cont++;
			nVueltas++
			var s=nHorasEScheck()
			horasSinAsignar=totalHoras-s
			
			horasAsignadasVuelta= horasSinAsignarPrevia-horasSinAsignar
			horasSinAsignarPrevia=horasSinAsignar;
			if(posES.cont>=posES.ES.length){posES.cont=0}
			//$('#info').html('<h2>VUELTA: '+nVueltas+';   SinAsignar:'+horasSinAsignar+'; AsignadasEnUltimaVuelta:'+horasAsignadasVuelta+'</h2>')
			if(horasAsignadasVuelta==0){ asignaAlAzar=true; }else{ asignaAlAzar=false; }
			if(horasSinAsignar<=0){
				    //llenaTabla()
					//llenaUsuarios()
					//ordenaSegunViajes()
					//todoBlanco()
				    completo=true;
		  }
		}
		
  return {ultimaDeLaSemana:cierto}
}

function factor(dia,hora,ES){

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

	if(numUsuariosEstaHora>0){
		factor = numCochesAsignados * cabenEnCoche / numUsuariosEstaHora
			}
	
	if(ES=='entrada'){
		en[dia][hora].factor=factor.toFixed(2)
	}
	if(ES=='salida'){
		sa[dia][hora].factor=factor.toFixed(2)
	}
   
	return factor;
}

function nUsuariosDiaHora(dia,hora,ES){
	var ids=[]
	var numero=0
	if(ES=='entrada'){ids=en[dia][hora].personas.clone()}
	if(ES=='salida'){ids=sa[dia][hora].personas.clone()}
	return {numero:ids.length,ids:ids}
}

function  nViajesUsuariosDiaHora(dia,hora,ES){
	var usuariosLibres=[]
	var cierto=false
	var usacoche;
	var usacocheNum
	var contNoUsanCoche;
	var nudh={numero:0,ids:[]}
	nudh=nUsuariosDiaHora(dia,hora,ES)
	if(nudh.numero>0){
		cierto=true;
		for(var a=0;a<nudh.ids.length;a++){
			usacohe=usuario[nudh.ids[a]][diasn[dia]].usacoche
			if(!usacohe){
				usacocheNum=0;
				contNoUsanCoche++		
				usuariosLibres.push({id:nudh.ids[a], nViajes:usuario[nudh.ids[a]].viajes} )
			}else{
				usacocheNum=1
			}
		}
	}
	
return {cierto:cierto, nUsuariosLibres:contNoUsanCoche, usuariosLibres:usuariosLibres}
      
}



function esUnicoMenorUsuarios(dia,hora,ES,userLibres){
	var id=-1;
	if(typeof userLibres===undefined){ return {cierto:false,id:id}	}
	
	if(userLibres.length>1){
		userLibres.sort(function(a, b){return a.nViajes - b.nViajes});
		if(typeof userLibres[1]===undefined  || userLibres[1].nViajes===undefined ){
			return {cierto:false,id:id}	
		}else{
			if(userLibres[0].nViajes!=userLibres[1].nViajes){
				
				id=userLibres[0].id;
				return {cierto:true,id:id}	
			}else{
				return {cierto:false,id:id}	
			}
			
		}
	}else{
		return {cierto:false,id:id}	
	}
	
}

function necesitamosCocheEnTuEntradaOsalida(dia,hora,userLibres,ES){
	var cierto=false
	var ids=[];
	var horaESusuario=0
	var personasES=[]
	var numero=0
	if(typeof userLibres===undefined || userLibres.length<=1){return {numero:numero,ids:ids} ; }
	if(ES=='entrada'){
		for(var a=0;a<userLibres.length;a++){
			horaESusuario=usuario[userLibres[a].id][diasn[dia]].salida
			userLibres[a].horaES=horaESusuario;
			userLibres[a].factor=sa[dia][horaESusuario].factor
		}
		//userLibres.sort(function(a, b){return a.factor - b.factor});
		userLibres.sort(function(a, b){return a.nViajes - b.nViajes});
		//if(userLibres[0].factor!=userLibres[1].factor && userLibres[0].factor<1){
		if(userLibres[0].nViajes!=userLibres[1].nViajes && userLibres[0].factor<1){
			cierto=true
			ids[0]={id:userLibres[0].id,factorES:factor,nViajes:userLibres[0].nViajes}
			ids[1]={id:userLibres[1].id,factorES:factor,nViajes:userLibres[1].nViajes}
			numero=1
		}
		//if(userLibres[0].factor==userLibres[1].factor && userLibres[0].factor<1){
		if(userLibres[0].nViajes==userLibres[1].nViajes && userLibres[0].factor<1){
			cierto=true
			ids[0]={id:userLibres[0].id,factorES:factor,nViajes:userLibres[0].nViajes}
			ids[1]={id:userLibres[1].id,factorES:factor,nViajes:userLibres[1].nViajes}
			numero=2
		}
	}

	if(ES=='salida'){
		for(var a=0;a<userLibres.length;a++){
			horaESusuario=usuario[userLibres[a].id][diasn[dia]].entrada
			userLibres[a].horaES=horaESusuario;
			userLibres[a].factor=en[dia][horaESusuario].factor
			
		}
		//userLibres.sort(function(a, b){return a.factor - b.factor});
		userLibres.sort(function(a, b){return a.nViajes - b.nViajes});
		//if(userLibres[0].factor!=userLibres[1].factor && userLibres[0].factor<1){
		if(userLibres[0].nViajes=userLibres[1].nViajes && userLibres[0].factor<1){
			cierto=true
			ids[0]={id:userLibres[0].id,factorES:factor,nViajes:userLibres[0].nViajes}
			ids[1]={id:userLibres[1].id,factorES:factor,nViajes:userLibres[1].nViajes}
			numero=1
		}
		//if(userLibres[0].factor==userLibres[1].factor && userLibres[0].factor<1){
		if(userLibres[0].nviajes==userLibres[1].nviajes && userLibres[0].factor<1){
			cierto=true
			ids[0]={id:userLibres[0].id,factorES:factor,nViajes:userLibres[0].nViajes}
			ids[1]={id:userLibres[1].id,factorES:factor,nViajes:userLibres[1].nViajes}
			numero=2
		}
	}
	return {numero:numero,ids:ids}	
}

function esLaUltima(){
	
}
function nHorasEScheck(){
	var estanCheck=0
	for(var dia=1;dia<=5;dia++){
		for(var hora=1;hora<=7;hora++){
			if(en[dia][hora].check ){
				estanCheck++
			}
			if(sa[dia][hora].check ){
				estanCheck++
			}
			
		}
	}
	return estanCheck
}



function conduceUsuario(user,dia,hora,ES){
	usuario[user][diasn[dia]].usacoche=true
	usuario[user].viajes++
	if(ES=='entrada'){
		var horaSalidaUsuario=usuario[user][diasn[dia]].salida
		en[dia][hora].asignados++;
		sa[dia][horaSalidaUsuario].asignados++;
		en[dia][hora].factor=factor(dia,hora,'entrada')
		sa[dia][hora].factor=factor(dia,horaSalidaUsuario,'salida')
		en[dia][hora].check=true
		//$('#'+diass[dia]+hora+'chte').html('1')
		
	}
	if(ES=='salida'){
		var horaEntradaUsuario=usuario[user][diasn[dia]].entrada
		en[dia][horaEntradaUsuario].asignados++;
		sa[dia][hora].asignados++;
		en[dia][hora].factor=factor(dia,horaEntradaUsuario,'entrada')
		sa[dia][hora].factor=factor(dia,hora,'salida')
		sa[dia][hora].check=true
		//$('#'+diass[dia]+hora+'chts').html('1')
		
	}
	//var s=nHorasEScheck()
	//horasSinAsignar=totalHoras-s
	//horasAsignadasVuelta++
	return true
		   
}


// FUNCION PRINCIPAL DESDE ESQUEMA

function evaluaDiaHora(dia, hora, ES) {

  var f = factor(dia, hora, ES);

  if (f >= 1) {

    return {evaluacion:'yaAsignada',id:-1};

  } else { // f < 1

    var nudh = {
      numero: 0,
      ids: []
    }
    nudh = nUsuariosDiaHora(dia, hora, ES);
    if (nudh.numero == 1) {

      return {evaluacion:'asignarUsuario', id:nudh.ids[0]};
	  
    }
	
    if (nudh.numero == 0) {
      //Creo que no es necesaria;
	  return {evaluacion:'enBlanco', id:-1};
    }

    if (nudh.numero > 1) {
      
      var nvu = {cierto:false, nUsuariosLibres:0, usuariosLibres:[]} // nvu.usuariosLibres.id nvu.usuariosLibres.nViajes
      nvu = nViajesUsuariosDiaHora(dia,hora,ES);
     if (nvu.nUsuariosLibres==1) {

        //pasaSiguiente();
		 return {evaluacion:'asignarUsuario', id: nvu.usuariosLibres[0].id};

      } else {

        var esumu = {
          cierto: false,
          id: -1
        }
		
        esumu = esUnicoMenorUsuarios(dia, hora, ES, nvu.usuariosLibres)
		 if (typeof esumu===undefined || typeof esumu.cierto===undefined) {
			  return {evaluacion:'dudas', id:-1};
		 }
        if (esumu.cierto) {

          if(usuario[esumu.id].viajes<usuario[esumu.id].meta){
			  return {evaluacion:'asignarUsuario', id:esumu.id}
			}else{
				    return {evaluacion:'dudas', id:-1};
			}  
        } else {

          var ncets = {
            numero: 0,
            ids: []
          }
         ncets= necesitamosCocheEnTuEntradaOsalida(dia, hora, nvu.usuariosLibres,ES)
          if (ncets.numero == 1) {
			if(usuario[ncets.ids[0].id].viajes<usuario[ncets.ids[0].id].meta){
					return {evaluacion:'asignarUsuario', id:ncets.ids[0].id}
			}else{
				    return {evaluacion:'dudas', id:-1};
			}
          }
          if (ncets.numero > 1) {

			  if(asignaAlAzar ){
				ncets.ids = shuffle(ncets.ids)
				if(usuario[ncets.ids[0].id].viajes<usuario[ncets.ids[0].id].meta){
					return {evaluacion:'asignarUsuario', id:ncets.ids[0].id}
				}else{
					return {evaluacion:'dudas', id:-1};
				}
			  }else{
				return {evaluacion:'dudas', id:-1};
			  }

          }
		  //estoTieneSentido? n
		  if (ncets.numero == 0) {
			//return {evaluacion:'dudas', id:-1};
			if(typeof nvu===undefined || nvu.usuariosLibres===undefined || nvu.usuariosLibres.length<=1){ return {evaluacion:'dudas', id:-1}; }
			 if(asignaAlAzar){
				nvu.usuariosLibres= shuffle(nvu.usuariosLibres)
				//nvu.usuariosLibres.sort(function(a, b){return a.nViajes - b.nViajes});
				if( usuario[nvu.usuariosLibres[0].id].viajes < usuario[nvu.usuariosLibres[0].id].meta  && nvu.usuariosLibres.length>0){
					return {evaluacion:'asignarUsuario', id: nvu.usuariosLibres[0].id }
				}else{
					return {evaluacion:'dudas', id:-1};
				}
			   //return {evaluacion:'dudas', id:-1};
			 }else{
				 return {evaluacion:'dudas', id:-1};
			 }
          }
        }
      }
    }
  }
  //return  {evaluacion:'dudas', id:-1};
}


////////////
/// FIN FUNCIONES ESQUEMA



/////////////////////////////////////



function repartoAcero(){
	META[1].meta=$('#pref1').val()
	META[2].meta=$('#pref2').val()
	META[3].meta=$('#pref3').val()
	META[4].meta=$('#pref4').val()
	META[5].meta=$('#pref5').val()
	usuariosYviajes=[]
    for (var a = 0; a < usuarioIni.length; a++) {
		usuarioIni[a].viajes=0;
		for(var b=1;b<=maxDiasSemana;b++){
			usuarioIni[a][diasn[b]].igualQue=[]
			usuarioIni[a][diasn[b]].usacoche=false;
		}
	}
	usuario=usuarioIni.clone()
	//alert(usuario.length)
	//usuarioIni=usuario.clone()
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
	
	 for (var a = 1; a < 6; a++) {
	  document.getElementById(diass[a] + '1').innerHTML =' ';
	  document.getElementById(diass[a] + '2').innerHTML =' ';
	  document.getElementById(diass[a] + '3').innerHTML =' ';
	  document.getElementById(diass[a] + '4').innerHTML =' ';
	  document.getElementById(diass[a] + '5').innerHTML =' ';
	  document.getElementById(diass[a] + '6').innerHTML =' ';
	  document.getElementById(diass[a] + '7').innerHTML =' ';
  }
	//llenaUsuarios()
	
}



function reparte(){
	
	llenaSalidasYentradas()
	///
	// CUMPLE LA PRIMERA LEY
	//buscaConductoresSolosEntrada(1)
	//buscaConductoresSolosSalida(1)
	//
	
	//llenaTabla()
	//llenaUsuarios()
	//ordenaSegunViajes()
	 //$('#info').html('<h1>BUSCANDO COINCIDENCIAS.... SinAsignar: '+horasSinAsignar+'</h1>');
	var maxNumEval=totalHoras*12
//while(!completo){
	for(var nEvaluaciones=0;nEvaluaciones<maxNumEval;nEvaluaciones++){
	
	//$(document).click(function(){	
	
	
		// ESQUEMA
	var quePasa = {evaluacion:'yaAsignada enBlanco asignarUsuario dudas',id:-1};
		quePasa = evaluaDiaHora(posES.dia, posES.hora, posES.ES[posES.cont]);
		
		if(quePasa.evaluacion=="yaAsignada"){
			//$('#info').html(quePasa.evaluacion+' SinAsignar:'+horasSinAsignar);
			
		}
		if(quePasa.evaluacion=='enBlanco'){
			if(posES.ES[posES.cont]=='entrada'){
				//if(en[posES.dia][posES.hora].check==false){
					en[posES.dia][posES.hora].check=true;
				//}
				//$('#'+diass[posES.dia]+posES.hora+'chte').html('X')
			}
			if(posES.ES[posES.cont]=='salida'){
				//if(sa[posES.dia][posES.hora].check==false){
					sa[posES.dia][posES.hora].check=true
					//horasSinAsignar--
					//horasAsignadasVuelta++
				//}
				//$('#'+diass[posES.dia]+posES.hora+'chts').html('X')
			}
		   //var s=nHorasEScheck()
			//horasSinAsignar=totalHoras-s
			//horasAsignadasVuelta++
			//$('#info').html(quePasa.evaluacion+' SinAsignar:'+horasSinAsignar);
		
		}
		
		if(quePasa.evaluacion=="asignarUsuario"){
		
			conduceUsuario(quePasa.id, posES.dia, posES.hora, posES.ES[posES.cont])
			//$('#info').html('Asignado '+ usuario[quePasa.id].nombre+' Sin asignar: ' +horasSinAsignar);
		}
		
		if(quePasa.evaluacion=="dudas"){
			//$('#info').html('DUDAS...!???? '+horasSinAsignar);
			var color01=355-(255*nEvaluaciones/maxNumEval)
			if(posES.ES[posES.cont]=='entrada'){
			// $('#'+ diass[posES.dia]+posES.hora+'chte').css('background-color','rgb('+color01+','+color01+','+color01+')')
			 //document.getElementById(diass[posES.dia]+posES.hora+'chte').style.backgroundColor = 'rgb('+color01+','+color01+','+color01+')';
			}
			if(posES.ES[posES.cont]=='salida'){
			 //$('#'+ diass[posES.dia]+posES.hora+'chts').css('background-color','rgb('+color01+','+color01+','+color01+')')
			 //document.getElementById(diass[posES.dia]+posES.hora+'chts').style.backgroundColor = 'rgb('+color01+','+color01+','+color01+')';
			}
		}
		
		//if(estadisticaDiaHora(posES.dia,posES.hora,posES.ES[posES.cont]).correcto=='completo'){
					//tablaColor(posES.dia,posES.hora,posES.ES[posES.cont])
			if(completo){		
					//completo=true
					// llenaTabla()
					// llenaUsuarios()
					// ordenaSegunViajes()
					// todoBlanco()
					
		}else{
			 
		}
		//$('#info').html('<h1>BUSCANDO COINCIDENCIAS.... SinAsignar:'+horasSinAsignar+'</h1>');
		var ps = {ultimaDeLaSemana:false }
		ps = pasaSiguiente();
		if(!ps.ultimaPorEvaluar){
		}
		
	} //end while
	
		llenaTabla()
		llenaUsuarios()
		ordenaSegunViajes()
		for(var a=1;a<=nDiasSemana;a++){
		  reuneIgualesDia(a)
		}
		//escribirCodigoResult()
		escribirCodigo()
}




// FIN DE FUNCIONES DE REPARTO



///////////////////////////
// FUNCIONES DE CONFIGURACION
/////////////////////

function limpiaEntrada(dia, hora){
	var el;
	for(var horasEntrada=1; horasEntrada <=nHorasEntrada; horasEntrada++){
		el=$('#hE'+dia+'_'+horasEntrada)
		if (el.hasClass("verde")) {
			el.addClass('blanco');
			el.removeClass('verde');
			break
		} 			
	}
	if(hora>0){
		el=$('#hE'+dia+'_'+hora)
		el.addClass('verde');
		el.removeClass('blanco');
	}
}

function limpiaSalida(dia, hora){
	var el;
	for(var horasEntrada=1; horasEntrada <=nHorasEntrada; horasEntrada++){
		el=$('#hS'+dia+'_'+horasEntrada)
		if (el.hasClass("rosa")) {
			el.addClass('blanco');
			el.removeClass('rosa');
			break
		} 			
	}	
	if(hora>0){
		el=$('#hS'+dia+'_'+hora)
		el.addClass('rosa');
		el.removeClass('blanco');
	}
}

function botonSensor(){
	$('.buttonHorasE').click(function(){

	   if( usuarioIni.length>0){
			var s1=this.id.substring(2)
			var s2=s1.split('_')
			limpiaEntrada(s2[0],s2[1])
			
			var entrada=usuarioIni[contUsuarios][diasn[s2[0]]].entrada
			//$('#'+diass[s2[0]]+entrada+'chte').html(' ')
			//$('#'+diass[s2[0]]+s2[1]+'chte').html(nombreUsuario)
			usuarioIni[contUsuarios][diasn[s2[0]]].entrada=s2[1]
			 repartoAcero()
			reparte()
		escribirCodigo()
		}
	})
	$('.buttonHorasS').click(function(){
		if( usuarioIni.length>0){
			var s1=this.id.substring(2)
			var s2=s1.split('_')
			limpiaSalida(s2[0],s2[1])
			
			var salida=usuarioIni[contUsuarios][diasn[s2[0]]].salida
			//$('#'+diass[s2[0]]+salida+'chts').html(' ')
			//$('#'+diass[s2[0]]+s2[1]+'chts').html(nombreUsuario)
			usuarioIni[contUsuarios][diasn[s2[0]]].salida=s2[1]
			 repartoAcero()
			reparte()
		escribirCodigo()
		}
	})
}

function rellenaBotones(n){
	if(n<0){
		var cad='';
		for(var diasSemana=1; diasSemana <=nDiasSemana; diasSemana++){
			cad=''
			for(var horasEntrada=1; horasEntrada <=nHorasEntrada; horasEntrada++){
				cad+='<button class="buttonHorasE" id="hE'+horasEntrada+'_'+diasSemana+'">'+horasEntrada+'</button>'
			}
			$('#'+diasSemana+'E').html(cad)
			 cad=''
			for(var horasSalida=1; horasSalida <=nHorasSalida; horasSalida++){
				cad+='<button class="buttonHorasS" id="hS'+horasSalida+'_'+diasSemana+'">'+horasSalida+'</button>'
			}
			$('#'+diasSemana+'S').html(cad)
			
		}
	}else{
		var cad='',cad1='';cad2='';
		 var entrada=0, salida=0;
		var buttColorClase=''
		nombreUsuario=usuarioIni[n].nombre
		$('#nombre').val(nombreUsuario)
		//alert(nombreUsuario)
		for(var diasSemana=1; diasSemana <=nDiasSemana; diasSemana++){
			//ENTRADAS
			cad=''
			$('#'+diasSemana+'E').html('')
			for(var horasEntrada=1; horasEntrada <=nHorasEntrada; horasEntrada++){
				
				cad1='<button class="buttonHorasE' 
				cad2='" id="hE'+diasSemana+'_'+horasEntrada+'">'+horasEntrada+'</button>'
				entrada=usuarioIni[n][diasn[diasSemana]].entrada
				if(entrada==horasEntrada){
					cad1+=' verde'
					//$('#'+diass[diasSemana]+horasEntrada+'chte').html(nombreUsuario)
				}else{cad1+=' blanco'}
				$('#'+diasSemana+'E').append(cad1+cad2)
			}
			//SALIDAS
			
			$('#'+diasSemana+'S').html('')
			for(var horasSalida=1; horasSalida <=nHorasSalida; horasSalida++){
				cad1='<button class="buttonHorasS' 
				cad2='" id="hS'+diasSemana+'_'+horasSalida+'">'+horasSalida+'</button>'
				//cad='<button class="buttonHorasS" id="hS'+horasSalida+'_'+diasSemana+'">'+horasSalida+'</button>'
				salida=usuarioIni[n][diasn[diasSemana]].salida
				if(salida==horasSalida){
					cad1+=' rosa'
					//$('#'+diass[diasSemana]+horasSalida+'chts').html(nombreUsuario)
					
				}else{cad1+=' blanco'}
				$('#'+diasSemana+'S').append(cad1+cad2)
			}

			
		}
		
	}	
	
	botonSensor()
}

function rellenaNombres(){
	var cad='';
	//alert(usuarioIni.length)
	for(var a=0;a<usuarioIni.length;a++){
		cad+='<button id="u_'+a+'" onclick="contUsuarios='+a+';rellenaBotones('+a+')">'+usuarioIni[a].nombre+'</button>'
	}
	$('#nombresUsuarios').html(cad)
}

function escribirCodigo(){
	//$('#codigoConfig').val(JSON.stringify(usuarioIni))

	$('#codigoConfig').val('{"salida":"'+json.salida+'","destino":"'+json.destino+'","fechaHora":'+JSON.stringify($('#fechaHora').html())+',"cabenEnCoche":'+cabenEnCoche+',"META":'+JSON.stringify(META)+',"usuario":'+JSON.stringify(usuarioIni)+',"usuariosYviajes":'+JSON.stringify(usuariosYviajes) + ',"en":'+JSON.stringify(en)+ ',"sa":'+JSON.stringify(sa)+'}')
}

function escribirCodigoResult(){
	$('#codigoResult').val(JSON.stringify(usuario))
}
///////
//FIN DE FUNCIONES DE CONFIGURACION
///////



///////
// OTRAS FUNCIONES DE USO
///////

function capitaliza(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}

Array.prototype.clone = function() {
    return this.slice(0);
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
		factor = numCochesAsignados * cabenEnCoche / numUsuariosEstaHora
		cochesTeorico=Math.ceil(numUsuariosEstaHora/cabenEnCoche)
		asientosLibres=numCochesAsignados*cabenEnCoche-numUsuariosEstaHora
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

function reuneIgualesDiaVer(dia){
	var ESuser=[0,0]
	igualesDia[dia]=[]
	var contIguales=0;

   for (var n = 0; n < usuario.length; n++) {
	   igualesDia[dia].push(usuario[n][diasn[dia]].igualQue.clone())
   } 
   var cad='<h7>'+diasn[dia].toUpperCase()+'</h7><ul><li style="margin-left:-10px;">',cad1=''
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
		  cad+='</li><li style="margin-left:-10px;">'}
   }
    //cad = cad.slice(0, -4);
	   cad = cad.slice(0, -31);
	var t=''
	//if(cad1.length>8){t='No pueden rotar:<br> '+cad1}
   $('#R'+dia).html(cad+'</ul>'+ t)
	//return cad+'</ul>'+ t;
	//document.getElementById('R'+dia).innerHTML =cad+'</ul>'+ t;
    //document.getElementById('R'+dia).innerHTML =cad+'</ul>'+ t;
  
   //Solo Firefox
   //console.log(igualesDia[dia].toSource())
}



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
   var cad='<h7>'+diasn[dia].toUpperCase()+'</h7><ul><li style="margin-left:-10px;">',cad1=''
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
		  cad+='</li><li style="margin-left:-10px;">'}
   }
    //cad = cad.slice(0, -4);
	   cad = cad.slice(0, -31);
	var t=''
	//if(cad1.length>8){t='No pueden rotar:<br> '+cad1}
   //$('#R'+dia).html(cad+'</ul>'+ t)
    
  	document.getElementById('R'+dia).innerHTML =cad+'</ul>'+ t;
   //Solo Firefox
   //console.log(igualesDia[dia].toSource())
}



/////////////////////////
// INICIO

/*
// Primera ley :-) Usan coche los conductores que van solos en la entrada o en la salida.
// Segunda ley :-) Cada hora de salida tiene que tener los coches suficientes.
		buscaNumCochesEnCadaHora()
// Tercera ley :-) Los que tienen la misma hora de entrada y salida se pueden intercambiar, o pueden suplirse
*/
function borraUsuario(){
 var c=0;
		 if(contUsuarios==usuarioIni.length-1){c=1}
	     usuarioIni.splice(contUsuarios,1)
		 if(usuarioIni.length==0){nombreUsuario=''; $('#nombre').val(' ')}
		if(c==1){contUsuarios--}
		//escribirCodigo()
			rellenaNombres()
		rellenaBotones(contUsuarios)
	
		 repartoAcero()
		reparte()
		escribirCodigo()
}		
		
function iniciaEnBlanco(){
		$('#botonesGuardar').show()
		$('#botonesEditar').hide()
	   usuario={}
	   var script
	     var d='0-0.js'
		var script = document.createElement('script');
		script.onload = function () {
			var f = new Date(); var d = new Date();
			$('#fechaHora').html(f.getDate() + " / " + (f.getMonth() + 1) + " / " + f.getFullYear() + " | " +d.getHours() + " : " + d.getMinutes());
			$('#ruedaFuncion').html(capitaliza(queFuncion))
            //contUsuarios=1
		
			var c0= $('#ciudadSalida').val();//capitaliza(ciudadCiudadAguardar[0])
			var c1= $('#ciudadLlegada').val();// capitaliza(ciudadCiudadAguardar[1])
			//var ciudadCiudadAguardar=c.split('-')
			var ciudadCiudadAguardar=[c0,c1]
			ciudadCiudad=c0+'-'+c1
			jsonCiudades={"salida":c0,"destino":c1}
			$('#ciudadCiudad').html(c0+' - '+c1)
			
			
			//nombreUsuario=''; 
			//$('#nombre').val(' ')
			json.salida=$('#ciudadSalida').val()
			json.destino=$('#ciudadLlegada').val()
			usuario = json.usuario
			usuario.salida=$('#ciudadSalida').val()
			usuario.destino=$('#ciudadLlegada').val()
			usuario.fechaHora=$('#fechaHora').html()
			//$.getJSON(direc+'datos.php?action=nueva', function(json) {
				
			
			//if(queFuncion=='editar'){
			//usuario = json.usuario
			//}
			//$('#botonesEditar').hide()
			for (var a = 0; a < usuario.length; a++) {
				usuario[a].viajes=0;
				for(var b=1;b<=maxDiasSemana;b++){
					usuario[a][diasn[b]].igualQue=[]
				}
			}
			
			
			usuarioIni=usuario.clone()
			rellenaBotones(contUsuarios)
			rellenaNombres()
			repartoAcero()
			reparte()
			escribirCodigo()
			borraUsuario()
			$('#modal').hide();
			
		};
		script.onerror = function() {	};
		script.src = d;
		document.head.appendChild(script);
	}
	
	
	      
//});	

function nueva(){
          
		
		   // $('#modal').show();
			
		
	}

function editar(){
	
		//$.getJSON(direc+'datos.php?action=descarga&ciudadCiudad='+ciudadCiudad, function(json) { 
			var f = new Date(); var d = new Date();
			$('#fechaHora').html(f.getDate() + " / " + (f.getMonth() + 1) + " / " + f.getFullYear() + " | " +d.getHours() + " : " + d.getMinutes());
 
			$('#ruedaFuncion').html(capitaliza(queFuncion))
			$('#botonesGuardar').show()
			$('#botonesEditar').hide()
			META=json.META
			$('#pref1').val(META[1].meta)
			$('#pref2').val(META[2].meta)
			$('#pref3').val(META[3].meta)
			$('#pref4').val(META[4].meta)
			$('#pref5').val(META[5].meta)
			cabenEnCoche=json.cabenEnCoche
			$('#usCoche').val(cabenEnCoche)
			usuario = json.usuario
			for (var a = 0; a < usuario.length; a++) {
				usuario[a].viajes=0;
				for(var b=1;b<=maxDiasSemana;b++){
					usuario[a][diasn[b]].igualQue=[]
				}
			}
			usuarioIni=usuario.clone()
			rellenaBotones(contUsuarios)
			rellenaNombres()
			repartoAcero()
			reparte()
			escribirCodigo()
		//});	
	
}


	
	
function ver(){

			$('#configurar').hide()
			$('#botonesGuardar').hide()
			$('#botonesEditar').show()
			//$.getJSON(direc+'datos.php?action=descarga&ciudadCiudad='+ciudadCiudad, function(json) {
				$('#fechaHora').html(json.fechaHora);
				META=json.META
				cabenEnCoche=json.cabenEnCoche
				$('#usCoche').val(cabenEnCoche)
				usuario = json.usuario
				en = json.en
				sa = json.sa
				usuariosYviajes= json.usuariosYviajes
				llenaUsuariosOrden()
				llenaTabla()
				for(var a=1;a<=nDiasSemana;a++){
					reuneIgualesDiaVer(a)
					
				}
		//});	
	}

	
var ciudadCiudadAguardar=[]
var queFuncion='';
var jsonCiudades=''
var nfile=1

function abre(n){
	if(n==0){
		
		$('#modal').show();
	}else{	
		var d='ruedas/'+n+'.js'
		nfile=n;
		var t
				var s = document.createElement('script');
				s.onload = function () {
					var c0= json.salida;//capitaliza(ciudadCiudadAguardar[0])
					var c1= json.destino;// capitaliza(ciudadCiudadAguardar[1])
					//var ciudadCiudadAguardar=c.split('-')
					var ciudadCiudadAguardar=[c0,c1]
					ciudadCiudad=c0+'-'+c1
					jsonCiudades={"salida":c0,"destino":c1}
					$('#ciudadCiudad').html(c0+' - '+c1)
					if(queFuncion=='editar'){editar()}
					if(queFuncion=='ver'){ver()}
					
				};
				s.src = d;
				document.head.appendChild(s);
		}
	}


var maxActualFile=''
$(document).ready(function(){
	
	queFuncion=$.urlParam('funcion');
    var c=$.urlParam('ciudadCiudad');
	maxActualFile=$.urlParam('maxActualFile');
	if(queFuncion=='nueva'){$('#btn-saveNew').hide()}
	abre(c)
	
	cabenEnCoche = $('#usCoche').val()
    $('#usCoche').change(function(){
	cabenEnCoche = $('#usCoche').val()
	})
	
	$('#botonEditar').click(function(){
		location.href='rueda.html?funcion=editar&ciudadCiudad='+nfile+'&maxActualFile='+maxActualFile
		
	});
		
		
	 $('#borrarUsuario').click(function(){
		 var c=0;
		 if(contUsuarios==usuarioIni.length-1){c=1}
	     usuarioIni.splice(contUsuarios,1)
		 if(usuarioIni.length==0){nombreUsuario=''; $('#nombre').val(' ')}
		if(c==1){contUsuarios--}
		//escribirCodigo()
			rellenaNombres()
		rellenaBotones(contUsuarios)
	
		 repartoAcero()
		reparte()
		escribirCodigo()
	 }) 
	  $('#insertarUsuario').click(function(){
	  var n=prompt('Nombre del usuario')
		usuarioIni.push({
		  nombre: n,
		  lunes: {
			entrada: 0,
			salida: 0,
			usacoche: false
		  },
		  martes: {
			entrada: 0,
			salida: 0,
			usacoche: false
		  },
		  miercoles: {
			entrada: 0,
			salida: 0,
			usacoche: false
		  },
		  jueves: {
			entrada: 0,
			salida: 0,
			usacoche: false
		  },
		  viernes: {
			entrada: 0,
			salida: 0,
			usacoche: false
		  }
		})
		for (var a = 0; a < usuarioIni.length; a++) {
			usuarioIni[a].viajes=0;
			for(var b=1;b<=maxDiasSemana;b++){
				usuarioIni[a][diasn[b]].igualQue=[]
			}
		}
		contUsuarios=usuarioIni.length-1
		rellenaBotones(contUsuarios)
		rellenaNombres()
		
		repartoAcero()
		reparte()
		escribirCodigo()
	 }) 
	
		$('.nosale').click(function(){
		  var s= this.id.split('_')
		  usuarioIni[contUsuarios][diasn[s[1]]].salida=0;
		  usuarioIni[contUsuarios][diasn[s[1]]].entrada=0;
		  limpiaEntrada(s[1],0)
		  limpiaSalida(s[1],0)
		  repartoAcero()
		  reparte()
		  escribirCodigo()
		}) 
	
		$('#userMas').click(function(){
		   contUsuarios++
		   if(contUsuarios>=usuarioIni.length){contUsuarios=usuarioIni.length-1}
		   rellenaBotones(contUsuarios)
		   // repartoAcero()
			//reparte()
			//escribirCodigo()
		}) 
		$('#userMenos').click(function(){
		   contUsuarios--
		   if(contUsuarios<0){contUsuarios=0}
		   rellenaBotones(contUsuarios)
		   
		}) 
		
		
		///////
		
		function json2html(){
			var cadR=$('#repartoPage').html()
			return cadR
		}
	
		$('#verResult').click(function(){
			//var d = $('#fechaHora').html()
			var d = new Date();
			var cad='<html><title>RUEDA REPARTO '+d.getTime()+'</title><head><style> table,td,th { border-spacing: 0; vertical-align:top; border-collapse: collapse; padding:2px; border: 1;  border-style: solid;  border-width: 1px;} </style></head><body><center>'
			var j=$('#repartoPage').html()
			cad+= j+'</center></body></html>'
			var x= window.open();
			if(x){
			//x.open();
			x.document.write(cad);
			x.document.close();
			x.focus();
			} else {
				alert('Please allow popups for this website');
			}
			
			
			
			
		}) 
		

		$('#nuevoReparto').click(function(){
		    repartoAcero()
			reparte()
		})

          $('#guardarConfig').click(function(){
			  escribirCodigo()
			 //
			 
			 var t='var json='+$('#codigoConfig').val()
			 //alert(t)
			 if(queFuncion=='nueva'){
				 nfile=$.urlParam('maxActualFile')
			 }
			// if(queFuncion=='editar'){
				
	
			var d = new Date();
			//var cad='<html><title>RUEDA REPARTO '+d.getTime()+'</title><head><style> table,td,th { border-spacing: 0; vertical-align:top; border-collapse: collapse; padding:2px; border: 1;  border-style: solid;  border-width: 1px;} </style></head><body><center>'
			var cad=''
			//var j=$('#repartoPage').html()
			//cad+= j+'</center></body></html>'
			$("#textarea").val(t);
			var text = $("#textarea").val();
			var filename = $("#input-fileName").val()
			
			var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
			saveAs(blob, filename+".txt");
			/*
			var x= window.open('_blank');
			if(x){
			//x.open();
			    cad+='<p>Guarda el codigo </p><textarea style="width:100%;height:500px;" onclick="this.select()">'+t+'</textarea>'
				x.document.write(cad);
				x.document.close();
				x.focus();
			} else {
				alert('Please allow popups for this website');
			}
		
		
		
		var s = document.createElement('script'); s.onload = function () {};
		s.src = d;
		document.head.appendChild(s);
	 		
				
			 $.post(direc+"datos.php",
				  {  action:"graba",
					ciudadCiudad: nfile,
					datos: t
				  },
				  function(data, status){
					alert(data+"\r\n"+'Guardar en la carpeta "ruedas" para mantenerlo como permanente');
					//window.open('rueda.html?funcion=ver&ciudadCiudad='+ciudadCiudad,'_blank');
					window.open(direc+nfile+'.js','_blank');
				  });
			// }
			*/
		});			
		
		$('#verGuardado').click(function(){
			window.open('rueda.html?funcion=ver&ciudadCiudad='+ciudadCiudad,'_blank');
		
		});				
		$('#guardarResult').click(function(){
			var t = $('#codigoResult')
			t.select();
			// Work around Chrome's little problem
			t.mouseup(function() {
			// Prevent further mouseup intervention
				t.unbind("mouseup");
			return false;
			});		
		});		
	///////////
 
   $('#iniciar').click(function(){
	 	iniciaEnBlanco()
	});
 
	$('#cancelar').click(function(){
	    //$('#modal').fadeOut( "slow" );
		//$('#portada').show();
		location.href='index.html'
	});
	$("#btn-saveNew").click( function() {
		escribirCodigo()
		var t='var json='+$('#codigoConfig').val()
	    nfile=$.urlParam('maxActualFile')
	    $("#textarea").val(t);
		 $("#input-fileName").val(nfile)
  var text = $("#textarea").val();
  var filename = $("#input-fileName").val()
  //var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  var blob = new Blob([text], {type: "text/javascript"});
  saveAs(blob, filename+".js");
});
	
	$("#btn-save").click( function() {
		escribirCodigo()
		var t='var json='+$('#codigoConfig').val()
		if(queFuncion=='nueva'){
				 nfile=$.urlParam('maxActualFile')
	     }
		 $("#textarea").val(t);
		 $("#input-fileName").val(nfile)
  var text = $("#textarea").val();
  var filename = $("#input-fileName").val()
  //var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  var blob = new Blob([text], {type: "text/javascript"});
  saveAs(blob, filename+".js");
});
	//$('#nueva').click(function(){$('#portada').fadeOut( "slow" ); $('#modal').show();	});

 
 

		//resumenCheck()
		//todoBlanco()
  });




	