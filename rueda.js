/*
///////////////
HTML ids usados
en la tabla

l1 m1 x1 j1 v1
l2 m2 x2 j2 v2
l3 m3 x3 j3 v3
l4 m4 x4 j4 v4
l5 m5 x5 j5 v5
l6 m6 x6 j6 v6
l7 m7 x7 j7 v7
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


// VARIABLES DE ENTRADA  e[0]..e[6] 
var e = []
e[0] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
e[1] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
e[2] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
e[3] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
e[4] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
e[5] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
e[6] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]

// VARIABLES DE SALIDA  s[0]..s[6] 
var s = []
s[0] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
s[1] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
s[2] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
s[3] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
s[4] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
s[5] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]


var diass = ['', 'l', 'm', 'x', 'j', 'v']
var diasn = ['', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes']

function llenaSalidasYentradas(){
	for (var a = 0; a < usuario.length; a++) {
		e[1][usuario[a].lunes.entrada].push(a)
		s[1][usuario[a].lunes.salida].push(a)
	 
		e[2][usuario[a].martes.entrada].push(a)
		s[2][usuario[a].martes.salida].push(a)
	  
		e[3][usuario[a].miercoles.entrada].push(a)
	  	s[3][usuario[a].miercoles.salida].push(a)
	  
		e[4][usuario[a].jueves.entrada].push(a)
	  	s[4][usuario[a].jueves.salida].push(a)
	  	
		e[5][usuario[a].viernes.entrada].push(a)
	  	s[5][usuario[a].viernes.salida].push(a)
	}
}


function recopilaEntrada(a, b, num) {
  var ncoches=Math.ceil(e[a][b].length/4);
  var s='',n=''
  if(ncoches>1){s='s';n='n'}
  var asignados=0;
  var sp='',np=''
  var personas=e[a][b].length
  if(personas>1){sp='s';np='n'}
  var cad = '(' + personas  + ' persona'+sp+' necesita'+ np +' '+ Math.ceil(e[a][b].length/4)+' coche'+s+' )<br>'
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
  for (var i = 0; i < e[a][b].length; i++) {
    css0 = '';
    css1 = ''
    if (usuario[e[a][b][i]][diasn[a]].usacoche) {
      css0 = cssprevConductor +' <i class="zmdi zmdi-car"></i> ';
      css1 = cssendConductor
	  asignados++;
	  
    }else{
	  css0 = cssprev;
      css1 = cssend
	}
    cad += css0 + usuario[e[a][b][i]].nombre + css1 + '<br>'
  }
  //cad += '</div>';
  var ss='', nn=''
  if(asignados>1 || asignados==0){ss='s'; nn='n'}
  
  var necesitan=ncoches-asignados
  var sss='', nnn=''
  if(necesitan>1){sss='s'; nnn='n'}
  if(necesitan<=0){
	cad+='COMPLETO <br>'
  }else{
	cad += 'Hay '+ asignados+' coche'+ss+'. Se necesita'+nnn+' '+(ncoches-asignados)+' coche'+sss+' m&aacute;s<br>'
  }
  return cad
}

function recopilaSalida(a, b, n) {
  var cad = ''
  var cssprev = '<span style="color:red">'
  var cssend = '</span>'
  var cssprevConductor = '<span style="color:red"><b>'
  var cssendConductor = '</b></span>'
  if (n == 0) {
    return ''
  }
  //cad += '(' + n + ')<br>'
  cad += '<div style="color:red">'
  var css0 = '';
  var css1 = ''
  for (var i = 0; i < s[a][b].length; i++) {
    css0 = '';
    css1 = ''
     if (usuario[s[a][b][i]][diasn[a]].usacoche) {
      css0 = cssprevConductor +' <i class="zmdi zmdi-car"></i> ';
      css1 = cssendConductor
    }else{
	  css0 = cssprev;
      css1 = cssend
	}
    cad += css0 + usuario[s[a][b][i]].nombre + css1 + '<br>'
  }
  cad += '</div>';
  return cad
}


function buscaConductoresSolosEntrada(){
  var nsomos = 0;
  for (var a = 0; a < e.length; a++) {
	for (var b = 0; b < e[a].length; b++) {
          	for (var c = 0; c < e[a][b].length; c++) {
           		if(e[a][b].length==1) {
    				usuario[e[a][b][c]][diasn[a]].usacoche=true
				}		
    		}
  	}
  }	

}

function buscaConductoresSolosSalida(){
  var nsomos = 0;
  var marca=[]
  for (var a = 0; a < s.length; a++) {
	for (var b = 0; b < s[a].length; b++) {
          	for (var c = 0; c < s[a][b].length; c++) {
           		if(s[a][b].length==1) {
    				marca.push(a+','+b+','+c+','+ s[a][b][c])
				}		
    		}
  	}
  }	
  for(var j=0;j<marca.length;j++){
	   var m=marca[j].split(',')
	  usuario[m[3]][diasn[m[0]]].usacoche=true
     
  }
}


function llenaTabla(){
  var nsomos = 0;
  for (var a = 1; a < 6; a++) {
	// ENTRADAS
    nsomos = e[a][1].length
    cad = recopilaEntrada(a, 1, nsomos)
    $('#' + diass[a] + '1').append(cad)
	
    nsomos = e[a][2].length
    cad = recopilaEntrada(a, 2, nsomos)
    $('#' + diass[a] + '2').append(cad)
	
    nsomos = e[a][3].length
    cad = recopilaEntrada(a, 3, nsomos)
    $('#' + diass[a] + '3').append(cad)
	
	 nsomos = e[a][4].length
    cad = recopilaEntrada(a, 4, nsomos)
    $('#' + diass[a] + '4').append(cad)
	
	 nsomos = e[a][5].length
    cad = recopilaEntrada(a, 5, nsomos)
    $('#' + diass[a] + '5').append(cad)
	
	 nsomos = e[a][6].length
    cad = recopilaEntrada(a, 6, nsomos)
    $('#' + diass[a] + '6').append(cad)
	
	// SALIDAS
    nsomos = s[a][4].length
    cad = recopilaSalida(a, 4, nsomos)
    $('#' + diass[a] + '4').append(cad)
	
    nsomos = s[a][5].length
    cad = recopilaSalida(a, 5, nsomos)
    $('#' + diass[a] + '5').append(cad)
	
    nsomos = s[a][6].length
    cad = recopilaSalida(a, 6, nsomos)
    $('#' + diass[a] + '6').append(cad)
	
	 nsomos = s[a][7].length
    cad = recopilaSalida(a, 7, nsomos)
    $('#' + diass[a] + '7').append(cad)

  }
}
/*
// Primera ley :-) Usan coche los conductores que van solos en la entrada o en la salida.
// Segunda ley :-) Cada hora de salida tiene que tener los coches suficientes.
		buscaNumCochesEnCadaHora()
*/

$(document).ready(function(){
	llenaSalidasYentradas()
	buscaConductoresSolosEntrada()
	buscaConductoresSolosSalida()
	llenaTabla()
});
