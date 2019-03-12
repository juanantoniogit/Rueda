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
	  //console.log('Estan todos el ' +diasn[a]+' a `hora '+b )
  }else{
	  //console.log('NO Estan todos ' +a+' '+b)
  }
  var necesitan=ncoches-asignados
  var sss='', nnn=''
  if(necesitan>1){sss='s'; nnn='n'}
  if(necesitan<=0){
	cad02+='<i class="zmdi zmdi-check"></i>'+ '   '+ todos.factor
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
	 //console.log('Estan todos el ' +diasn[a]+' a hora '+b )
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
				    llenaTabla()
					llenaUsuarios()
					ordenaSegunViajes()
					todoBlanco()
				    completo=true;
		  }
		}
		
  return {ultimaDeLaSemana:cierto}
}

function factor(dia,hora,ES){
    
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

	if(numUsuariosEstaHora>0){
		factor = numCochesAsignados * cavenEnCoche / numUsuariosEstaHora
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
	var cierto=false
	var id=-1;
	userLibres.sort(function(a, b){return a.nViajes - b.nViajes});
    if(userLibres[0].nViajes!=userLibres[1].nViajes){
		cierto=true;
		id=userLibres[0].id;
	}
	
	return {cierto:cierto,id:id}	
}

function necesitamosCocheEnTuEntradaOsalida(dia,hora,userLibres,ES){
	var cierto=false
	var ids=[];
	var horaESusuario=0
	var personasES=[]
	var numero=0
	if(ES=='entrada'){
		for(var a=0;a<userLibres.length;a++){
			horaESusuario=usuario[userLibres[a].id][diasn[dia]].salida
			userLibres[a].horaES=horaESusuario;
			userLibres[a].factor=sa[dia][horaESusuario].factor
			
		}
		userLibres.sort(function(a, b){return a.factor - b.factor});
		if(userLibres[0].factor!=userLibres[1].factor && userLibres[0].factor<1){
			cierto=true
			ids[0]={id:userLibres[0].id,factorES:factor,nViajes:userLibres[0].nViajes}
			ids[1]={id:userLibres[1].id,factorES:factor,nViajes:userLibres[1].nViajes}
			numero=1
		}
		if(userLibres[0].factor==userLibres[1].factor && userLibres[0].factor<1){
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
		userLibres.sort(function(a, b){return a.factor - b.factor});
		if(userLibres[0].factor!=userLibres[1].factor && userLibres[0].factor<1){
			cierto=true
			ids[0]={id:userLibres[0].id,factorES:factor,nViajes:userLibres[0].nViajes}
			ids[1]={id:userLibres[1].id,factorES:factor,nViajes:userLibres[1].nViajes}
			numero=1
		}
		if(userLibres[0].factor==userLibres[1].factor && userLibres[0].factor<1){
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
		
	}
	if(ES=='salida'){
		var horaEntradaUsuario=usuario[user][diasn[dia]].entrada
		en[dia][horaEntradaUsuario].asignados++;
		sa[dia][hora].asignados++;
		en[dia][hora].factor=factor(dia,horaEntradaUsuario,'entrada')
		sa[dia][hora].factor=factor(dia,hora,'salida')
		sa[dia][hora].check=true
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
        if (esumu.cierto) {

          return {evaluacion:'asignarUsuario', id:esumu.id}

        } else {

          var ncets = {
            numero: 0,
            ids: []
          }
         ncets= necesitamosCocheEnTuEntradaOsalida(dia, hora, nvu.usuariosLibres,ES)
          if (ncets.numero == 1) {

            return {evaluacion:'asignarUsuario', id:ncets.ids[0].id}

          }
          if (ncets.numero > 1) {

			  if(asignaAlAzar){
				ncets.ids = shuffle(ncets.ids)
				return {evaluacion:'asignarUsuario', id:ncets.ids[0].id}
			  }else{
				return {evaluacion:'dudas', id:-1};
			  }

          }
		  //estoTieneSentido? n
		  if (ncets.numero == 0) {
			//return {evaluacion:'dudas', id:-1};
			 if(asignaAlAzar){
				nvu.usuariosLibres= shuffle(nvu.usuariosLibres)
				
				//nvu.usuariosLibres.sort(function(a, b){return a.nViajes - b.nViajes});
			   //return {evaluacion:'asignarUsuario', id: nvu.usuariosLibres[0].id};
			   return {evaluacion:'dudas', id:-1};
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
	//buscaConductoresSolosEntrada(1)
	//buscaConductoresSolosSalida(1)
	//
	
	
	
	//
	
	//SHOW 1
	llenaTabla()
	llenaUsuarios()
	ordenaSegunViajes()
	 //$('#info').html('<h1>BUSCANDO COINCIDENCIAS.... SinAsignar: '+horasSinAsignar+'</h1>');
	var maxNumEval=1400
//while(!completo){
	for(var nEvaluaciones=0;nEvaluaciones<maxNumEval;nEvaluaciones++){
	
	//$(document).click(function(){	
	
	
		// ESQUEMA
	var quePasa = {evaluacion:'',id:-1};
		quePasa = evaluaDiaHora(posES.dia, posES.hora, posES.ES[posES.cont]);
		
		if(quePasa.evaluacion=="yaAsignada"){
			//$('#info').html(quePasa.evaluacion+' SinAsignar:'+horasSinAsignar);
			
		}
		if(quePasa.evaluacion=='enBlanco'){
			if(posES.ES[posES.cont]=='entrada'){
				if(en[posES.dia][posES.hora].check==false){
					en[posES.dia][posES.hora].check=true;
				}
			}
			if(posES.ES[posES.cont]=='salida'){
				if(sa[posES.dia][posES.hora].check==false){
					sa[posES.dia][posES.hora].check=true
					//horasSinAsignar--
					//horasAsignadasVuelta++
				}
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
			
			 $('#'+ diass[posES.dia]+posES.hora).css('background-color','rgb('+color01+','+color01+','+color01+')')
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
		//todoBlanco()
  });




	