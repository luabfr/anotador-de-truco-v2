# ================================================================
# ================================================================
# Para ejecutar al App en local
> npx expo start




# ================================================================
# ================================================================
# INFO IMPORTANTE: ===============================================
> PARA SUBIR LA APP COMPILADA (.AAB) A LA PLAY STORE, 
> ES NECESARIO CAMBIAR EL "version code:" en el archivo "app.json":
"android": {
 	"versionCode": 6, /* cambiar el numero conforme aumente la version*/

"expo": {
	"version": "6.0.0", /* corroborar que el numero de version haya cambiado tambien el numero conforme aumente la version*/


Para aumentar el numero de la version del parche de la App (ej: v1.0.3 > v1.0.4)
 > npm version patch

Para aumentar el numero de la version del parche de la App (ej: v1.2.0 > v1.3.0)
 > npm version minor

Para aumentar el numero de la version de la App (ej: v1.2.0 > v2.0.0)
 > npm version major



# ================================================================
# ================================================================
# IMPORTANTE: COMANDOS PARA COMPILAR =============================
Para compilar un .APK con EXPO:
 > eas build -p android --profile preview

PRODUCCION: 
 - Para compilar un .AAB (bundle para subir a la PlayStore) con EXPO:
 > eas build --platform android


# MODO DEVELOPMENT -----------------------------
Genera APK para desarrollo.
> eas build -p android --profile development
Levanta el server de prueba (¿?¿?¿?) o algo asi
> npx expo start --dev-client


# ================================================================
# ================================================================
# IMPORTANTE: PLAY STORE =========================================
Una vez que se compila el ".aab", en PLAY CONSOLE, 
hay que crear una "PRUEBA INTERNA" con la nueva version y subir ahi el ".aab".
Luego, se puede "copiar el enlace" y pasarmelo por whatsapp al telefono.




