# -*- coding: utf-8 -*-
import re#libreria de expresiones regulares
path = "patrones.txt"

try:
    archivo = open(path,'r')
except:
    print ("el archivo que intentas abrir no existe")
    quit()

texto = ""

for linea in archivo:
    texto += linea



print ("\nVariables válidas")
patron = r'[A-Za-z0-9-]+\s+[=]+'
resultado = re.findall(patron,texto)
print ("Resultado de busqueda\n", resultado)


print ("\nEnteros y decimales")
patron = r"([0-9]+.[0-9]+|[0-9]+)"
result = re.findall(patron,texto) 
print ("Resultado de busqueda\n", result)

print ("\nOperadores aritméticos")
patron = r"[\+|\-|\*|\/]"
result = re.findall(patron,texto)
print ("Resultado de busqueda\n", result)

print ("\nOperadores relacionales")
patron = r"[|<|>|!=|<=|>=|=]+"
result = re.findall(patron,texto)
print ("Resultado de busqueda\n", result)

print ("\nPalabras reservadas")
patron = r"(else|for|import|class|try|while|False|def|if|raise|None|return )"
result = re.findall(patron,texto)
print ("Resultado de busqueda\n", result)
