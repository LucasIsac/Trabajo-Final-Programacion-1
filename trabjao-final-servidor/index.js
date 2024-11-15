// Importar express y mysql2
const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Usuario de tu base de datos MySQL
  password: '', // Contraseña de tu base de datos MySQL
  database: 'reserva' // Nombre de tu base de datos
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta de prueba para obtener datos
app.get('/api/usuarios', (req, res) => {
  const query = 'SELECT * FROM usuarios'; // Cambia 'usuarios' por el nombre de tu tabla

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results);
  });
});


app.get('/api/habitaciones', (req, res) => {
    const query = 'SELECT * FROM habitaciones'; // Cambia 'usuarios' por el nombre de tu tabla
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al realizar la consulta:', err);
        res.status(500).send('Error en el servidor');
        return;
      }
      res.json(results);
    });
  });

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

