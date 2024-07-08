const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 4000

//============== Middleware =============
app.use(express.static(path.join(__dirname, 'public'))); //acceso absoluto en cualquier sistema operativo 
//app.use(express.static(__dirname + '/public')); acceso absoluto al directorio
//app.use(express.static('public')); //directori standar para los archivos estaticos
app.use(express.json()); //Habilita el recibo de archivos json para su lectura en req.body

//============== Routes ==================
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get("/hola", function(request, response){
    response.send('Hola mundo')
});

app.get('/descargar', (request, response) => {
    const apkPath = path.join(__dirname, 'apk', 'naturetrustbank.apk');

    // Configurar headers para la descarga
    response.setHeader('Content-Disposition', 'attachment; filename=naturetrustbank.apk');
    response.sendFile(apkPath, (err) => {
        if (err) {
            console.error('Error al enviar el archivo:', err);
            response.status(err.status).end();
        } else {
            console.log('Se descargó el archivo');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)
});