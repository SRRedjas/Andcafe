

archivo = open("ids.csv")

linea = archivo.readline()

ids = []
while linea!='':	

	ids.append(linea)
	linea = archivo.readline()



mitad = int(len(ids)/2)

firstFile = open("firstFile.txt", "w")

for x in range(0, mitad):
	
	firstFile.write("UPDATE inventario SET estado = false WHERE id ="+ids[x])
	
print("Primer archivo de consultas realizado, salida como:firstFile.txt")
firstFile.close()

secondFile = open("secondFile.txt", "w")
for x in range(mitad, len(ids)):
	
	secondFile.write("UPDATE inventario SET estado = false WHERE id ="+ids[x])
print("segundo archivo de consultas realizado, salida como:secondFile.txt")
secondFile.close()


centenas =0
modulo = 0
	
sqlxcent = open("lotes.txt", "w")
	

	
for y in range(0,len(ids)):
	
	
	modulo = y%100
	if modulo == 0:
		if centenas==0:
			sqlxcent.write("UPDATE inventario SET estado = CASE id "+'\n')	
			sqlxcent.write(f" WHEN {ids[y]} THEN false"+'\n')
		else:

			sqlxcent.write("END"+'\n' + "UPDATE inventario SET estado = CASE id "+'\n')
			
	else:
		centenas+=1
		sqlxcent.write(f" WHEN {ids[y]} THEN false"+'\n')
	
print("Archivo de consultas por lote de 100 realizado, salida como:lotes.txt")
sqlxcent.write("END")	
	
	
	




	


		
	

