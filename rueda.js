
var usuario = []
usuario.push({
  nombre: 'Juan',
  lunes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  },
  martes: {
    entrada: 1,
    salida: 5,
    usacoche: false
  },
  miercoles: {
    entrada: 1,
    salida: 6,
    usacoche: false
  },
  jueves: {
    entrada: 2,
    salida: 5,
    usacoche: false
  },
  viernes: {
    entrada: 2,
    salida: 5,
    usacoche: false
  },
})

usuario.push({
  nombre: 'Pedro',
  lunes: {
    entrada: 1,
    salida: 6,
    usacoche: false
  },
  martes: {
    entrada: 2,
    salida: 6,
    usacoche: false
  },
  miercoles: {
    entrada: 1,
    salida: 4,
    usacoche: false
  },
  jueves: {
    entrada: 2,
    salida: 5,
    usacoche: false
  },
  viernes: {
    entrada: 2,
    salida: 4,
    usacoche: false
  },
})

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
var cad = ''
var diass = ['', 'l', 'm', 'x', 'j', 'v']
function llena(){
var nsomos = 0;
for (var a = 1; a < 6; a++) {
  nsomos = e[a][1].length
  cad = recopilaEntrada(a, 1, nsomos)
  $('#' + diass[a] + '1').html(cad)
  nsomos = e[a][2].length
  cad = recopilaEntrada(a, 2, nsomos)
  $('#' + diass[a] + '2').html(cad)
  nsomos = e[a][3].length
  cad = recopilaEntrada(a, 3, nsomos)
  $('#' + diass[a] + '3').html(cad)

  nsomos = s[a][4].length
  cad = recopilaSalida(a, 4, nsomos)
  $('#' + diass[a] + '4').html(cad)
  nsomos = s[a][5].length
  cad = recopilaSalida(a, 5, nsomos)
  $('#' + diass[a] + '5').html(cad)
  nsomos = s[a][6].length
  cad = recopilaSalida(a, 6, nsomos)
  $('#' + diass[a] + '6').html(cad)

}
}
function recopilaEntrada(a, b, n) {
  var cad = ''
  var cssprev = '<u><b>'
  var cssend = '</b></u>'
  if (n == 0) {
    return ''
  }
  cad += '(' + n + ')<br>'
  var css0 = '';
  var css1 = ''
  for (var i = 0; i < e[a][b].length; i++) {
    css0 = '';
    css1 = ''
    if (n == 1) {
      usuario[e[a][b][i]].usacoche = true;
      css0 = cssprev;
      css1 = cssend
    }
    cad += css0 + usuario[e[a][b][i]].nombre + css1 + '<br>'
  }
  return cad
}

function recopilaSalida(a, b, n) {
  var cad = ''
  var cssprev = '<u><b>'
  var cssend = '</u></u>'
  if (n == 0) {
    return ''
  }
  cad += '(' + n + ')<br>'
  var css0 = '';
  var css1 = ''
  for (var i = 0; i < s[a][b].length; i++) {
    css0 = '';
    css1 = ''
    if (n == 1) {
      usuario[s[a][b][i]].usacoche = true;
      css0 = cssprev;
      css1 = cssend
    }
    cad += css0 + usuario[s[a][b][i]].nombre + css1 + '<br>'
  }
  return cad
}

$(document).ready(function(){
llena()
});
