# -*- coding: utf-8 -*-
import re#libreria de expresiones regulares

path = "patrones.txt"

try:
	archivo = open(path,'r')
except:
	print("El archivo no se encuentra")
	quit()

texto = ""
 
for linea in archivo:
	texto += linea


print ("\nSentencia de asignación")
patron = r"([a-z0-9]+\s*=\s*[a-z0-9+]+)"
resultado = re.findall(patron,texto)
print ("Resultado de Busqueda\n", resultado)

print ("\nOperaciones aritmeticas")
patronA = r"([A-Za-z0-9-_]+\s*[=]+\s*[A-Za-z0-9-_|0-9.0-9]+\s*[\+,\-,\*,\/,\%]+\s*[A-Za-z0-9-_|0-9.0-9]+)"
resultadoA = re.findall(patronA,texto)
print ("Resultado de Busqueda\n", resultadoA)


print ("\nOperaciones booleanas")
patronC = r"([A-Za-z0-9|a-z0-9]+\s*[=|<|>|!|<=|>=]+\s*[A-Za-z0-9|a-z0-9]+)"
resultadoC = re.findall(patronC, texto)
print ("Resultado de Busqueda\n", resultadoC)

print ("\nOperaciones de encabezado FOR,WHILE,IF,TRY")
patronF= r'(for+\s*[A-Za-z0-9-_]+\s*[in]+\s*[A-Za-z0-9-_]+\s*:)'
patronW = r'(while+\s*[A-Za-z0-9-_]+\s*[|<|>|!|<=|>=]=+\s*[A-Za-z0-9-_]+\s*:)'
patronI = r'(if+\s*[A-Za-z0-9-_]+\s*[|<|>|!|<=|>=]=+\s*[A-Za-z0-9-_]+\s*:)'
patronT = r'(try:+\s*[A-Za-z0-9-_]+\s*except+\s*[A-Za-z0-9-_]+\s*:)'
resultadoF = re.findall(patronF, texto)
resultadoW = re.findall(patronW,texto)
resultadoI = re.findall(patronI,texto)
resultadoT = re.findall(patronT,texto)
print ("Resultado de Busqueda\n", resultadoF)
print ("Resultado de Busqueda\n", resultadoW)
print ("Resultado de Busqueda\n", resultadoI)
print ("Resultado de Busqueda\n", resultadoT)

print ("\nFormulas complejas")
patronCO = r'([A-Za-z0-9]+\s*=+\s*[A-Za-z0-9]+\s*[|<|>|!|<=|>=|\+|\-\*\/]\s*[(]+\s*[A-Za-z0-9]+\s*[|<|>|!|<=|>=|\+|\-\*\/]+\s*[A-Za-z0-9]+\s*[)])'
resultadoCO = re.findall(patronCO,texto)
print ("Resultado de Busqueda\n", resultadoCO)
