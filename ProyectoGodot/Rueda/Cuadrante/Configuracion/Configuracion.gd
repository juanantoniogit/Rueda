extends Control

onready var user = load("res://Cuadrante/configuracion de usuario/Config Usuario.tscn").instance()
var nombre = null
var numUser = 0

func _ready():

	pass

#func _process(delta):

#	pass


func _on_NuevoUsuario_pressed():
	numUser += 1
	$VBoxContainer/Usuarios/HBoxContainer.add_child(user)
	user.set_name(nombre)	
	
	pass # replace with function body


func _on_N_horasDia_text_changed(new_text):
	nombre = new_text
	pass # replace with function body
