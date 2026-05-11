const data = [
  // CIENCIA
  {
    pregunta: "¿Cuál es el planeta más grande del sistema solar?",
    respuesta: "Júpiter",
    opciones: ["Saturno", "Júpiter", "Neptuno", "Tierra"],
  },
  {
    pregunta: "¿Cuántos huesos tiene el cuerpo humano adulto?",
    respuesta: "206",
    opciones: ["186", "206", "226", "256"],
  },
  {
    pregunta: "¿Cuál es el gas más abundante en la atmósfera terrestre?",
    respuesta: "Nitrógeno",
    opciones: ["Oxígeno", "Nitrógeno", "Argón", "Dióxido de carbono"],
  },
  {
    pregunta: "¿Cuál es el elemento químico de la sangre que transporta oxígeno?",
    respuesta: "Hierro",
    opciones: ["Calcio", "Hierro", "Magnesio", "Potasio"],
  },
  {
    pregunta: "¿Cuántos dedos tienen los humanos en total?",
    respuesta: "10",
    opciones: ["8", "10", "12", "20"],
  },

  // HISTORIA ARGENTINA
  {
    pregunta: "¿En qué año Argentina declara su independencia?",
    respuesta: "1816",
    opciones: ["1810", "1816", "1820", "1826"],
  },
  {
    pregunta: "¿Quién fue el libertador de América del Sur?",
    respuesta: "José de San Martín",
    opciones: ["Simón Bolívar", "José de San Martín", "Manuel Belgrano", "Juan Manuel de Rosas"],
  },
  {
    pregunta: "¿Cuál es la capital de Argentina?",
    respuesta: "Buenos Aires",
    opciones: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"],
  },
  {
    pregunta: "¿Quién fue el general que cruzó los Andes para liberar a Chile?",
    respuesta: "José de San Martín",
    opciones: ["Manuel Belgrano", "José de San Martín", "Simón Bolívar", "Güemes"],
  },
  {
    pregunta: "¿En qué año comienza la Guerra de la Independencia en Argentina?",
    respuesta: "1810",
    opciones: ["1808", "1810", "1812", "1816"],
  },

  // GEOGRAFÍA DE ARGENTINA
  {
    pregunta: "¿Cuál es el río más importante de Argentina?",
    respuesta: "Río de la Plata",
    opciones: ["Paraná", "Río de la Plata", "Río Negro", "Bermejo"],
  },
  {
    pregunta: "¿En qué provincia se encuentran las Cataratas del Iguazú?",
    respuesta: "Misiones",
    opciones: ["Jujuy", "Corrientes", "Misiones", "Entre Ríos"],
  },
  {
    pregunta: "¿Cuántos continentes hay en el mundo?",
    respuesta: "6",
    opciones: ["5", "6", "7", "8"],
  },
  {
    pregunta: "¿Cuál es la montaña más alta de Argentina?",
    respuesta: "Aconcagua",
    opciones: ["Tupungato", "Mercedario", "Aconcagua", "Nevado de Ruiz"],
  },
  {
    pregunta: "¿En qué región se encuentra la ciudad de Mendoza?",
    respuesta: "Cuyo",
    opciones: ["Patagonia", "Cuyo", "Litoral", "Noroeste"],
  },

  // CULTURA ARGENTINA
  {
    pregunta: "¿Cuál es la bebida tradicional argentina que se comparte entre amigos?",
    respuesta: "Mate",
    opciones: ["Café", "Tereré", "Mate", "Té"],
  },
  {
    pregunta: "¿Quién fue el cantante legendario del tango argentino?",
    respuesta: "Carlos Gardel",
    opciones: ["Julio Sosa", "Carlos Gardel", "Astor Piazzolla", "Osvaldo Pugliese"],
  },
  {
    pregunta: "¿Cuántos mundiales ganó Argentina en fútbol?",
    respuesta: "3",
    opciones: ["1", "2", "3", "4"],
  },
  {
    pregunta: "¿Cuál es el baile tradicional de Argentina?",
    respuesta: "Tango",
    opciones: ["Salsa", "Tango", "Folclore", "Chacarera"],
  },
  {
    pregunta: "¿Qué comida argentina es un corte de carne popular?",
    respuesta: "Asado",
    opciones: ["Empanada", "Milanesa", "Asado", "Choripán"],
  },

  // DEPORTES ARGENTINOS
  {
    pregunta: "¿Cuántas Copas América ha ganado Argentina?",
    respuesta: "15",
    opciones: ["12", "14", "15", "16"],
  },
  {
    pregunta: "¿En qué año ganó Argentina su primer Mundial?",
    respuesta: "1978",
    opciones: ["1974", "1978", "1982", "1986"],
  },

  // DIVERSIÓN Y CURIOSIDADES
  {
    pregunta: "¿Cuál es el animal terrestre más rápido?",
    respuesta: "Guepardo",
    opciones: ["Leona", "Guepardo", "Caballo", "Gacela"],
  },
  {
    pregunta: "¿Cuántas patas tiene una araña?",
    respuesta: "8",
    opciones: ["6", "8", "10", "12"],
  },
  {
    pregunta: "¿En qué país se originó el chocolate?",
    respuesta: "México",
    opciones: ["Suiza", "Bélgica", "México", "Italia"],
  },
  {
    pregunta: "¿Cuántas vidas tiene un gato según la leyenda?",
    respuesta: "9",
    opciones: ["5", "7", "9", "11"],
  },
  {
    pregunta: "¿Cuál es el animal más grande del mundo?",
    respuesta: "Ballena Azul",
    opciones: ["Elefante", "Jirafa", "Ballena Azul", "Hipopótamo"],
  },
  {
    pregunta: "¿Qué país inventó la pizza?",
    respuesta: "Italia",
    opciones: ["España", "Italia", "Francia", "Grecia"],
  },
  {
    pregunta: "¿Cuántos colores tiene el arco iris?",
    respuesta: "7",
    opciones: ["5", "6", "7", "8"],
  },
  {
    pregunta: "¿En qué continente viven los pingüinos?",
    respuesta: "Antártida",
    opciones: ["América del Sur", "África", "Antártida", "Australia"],
  },
];

// Función para mezclar array
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const preguntas = data.map((item) => ({
    pregunta: item.pregunta,
    respuesta: item.respuesta,
    opciones: shuffle(item.opciones),
  }));
  res.json(preguntas);
});

app.listen(process.env.PORT || 3000);
