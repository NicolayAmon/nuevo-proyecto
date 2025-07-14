import React, { useState } from "react";
import "./App.css";

const recetas = [
  {
    id: 1,
    nombre: "Empanadas de Pino",
    descripcion: "Empanadas rellenas de carne picada, cebolla, huevo, aceitunas y pasas.",
    ingredientes: [
      "500g de carne molida o picada",
      "2 cebollas grandes",
      "Aceitunas negras",
      "Huevos duros",
      "Pasas",
      "Masa para empanadas",
      "Aliños (comino, ají de color, sal, pimienta)",
    ],
    preparacion:
      "Cocina la carne con la cebolla y aliños. Arma las empanadas con huevo, aceituna y pasas. Hornea hasta dorar.",
    imagen: "empanada.jpg", 
  },
  {
    id: 2,
    nombre: "Cazuela",
    descripcion: "Sopa tradicional con carne, papas, zapallo, arroz y verduras.",
    ingredientes: [
      "1 trozo de carne (pollo o vacuno)",
      "2 papas",
      "1 trozo de zapallo",
      "1 zanahoria",
      "1/4 taza de arroz",
      "Porotos verdes",
      "Sal, orégano y pimienta",
    ],
    preparacion:
      "Hierve la carne con sal y verduras. Agrega el arroz y cocina hasta que todo esté blando. Sirve caliente.",
    imagen: "cazuela.jpg",  
  },
  {
    id: 3,
    nombre: "Pastel de Choclo",
    descripcion: "Pastel horneado con pino y una capa de choclo molido endulzado.",
    ingredientes: [
      "500g de carne molida",
      "2 cebollas",
      "1 tarro de choclo o choclo molido",
      "Albahaca",
      "Azúcar para espolvorear",
      "Huevos duros",
      "Aceitunas negras",
      "Pasas",
    ],
    preparacion:
      "Cocina el pino con cebolla. Licúa el choclo con albahaca. En una fuente, pon el pino, huevo, aceitunas y cubre con choclo. Hornea y espolvorea azúcar.",
    imagen: "pasteldechoclo.jpg",  
  },
  {
    id: 4,
    nombre: "Charquicán",
    descripcion: "Guiso tradicional chileno con carne seca, papas, zapallo y verduras.",
    ingredientes: [
      "300g charqui o carne seca",
      "2 papas",
      "1 trozo de zapallo",
      "1 cebolla",
      "1 zanahoria",
      "Choclo desgranado",
      "Aceite, sal y pimienta",
    ],
    preparacion:
      "Remoja y cocina el charqui. Sofríe las verduras y mezcla con la carne. Cocina todo junto hasta que espese. Sirve caliente.",
    imagen: "charquican.jpg",  
  },
  {
    id: 5,
    nombre: "Porotos con Riendas",
    descripcion: "Porotos con tallarines, longaniza y zapallo, plato casero muy popular, (opcional cebolla en escabeche).",
    ingredientes: [
      "250g porotos (frijoles) remojados",
      "100g tallarines",
      "1 longaniza",
      "Zapallo picado",
      "Cebolla y ajo",
      "Aceite, sal y pimienta",
    ],
    preparacion:
      "Cocina los porotos hasta que estén blandos. Sofríe el tocino, cebolla y ajo. Agrega el zapallo y tallarines. Mezcla todo y cocina unos minutos.",
    imagen: "porotos.jpg",  
  },
  {
    id: 6,
    nombre: "Chorrillana",
    descripcion: "Plato con papas fritas, cebolla, carne y huevo frito.",
    ingredientes: [
      "Papas fritas",
      "Carne en tiras (vacuno o pollo)",
      "Cebolla en pluma",
      "Huevos",
      "Aceite, sal y pimienta",
    ],
    preparacion:
      "Fríe las papas. Sofríe la carne con cebolla. Coloca todo en una fuente y corona con huevos fritos. Sirve inmediatamente.",
    imagen: "chorrillana.jpg",  
  },
  {
    id: 7,
    nombre: "Mote con Huesillo",
    descripcion: "Postre tradicional con trigo cocido y duraznos secos en almíbar.",
    ingredientes: [
      "Mote cocido (trigo pelado)",
      "Huesillos (duraznos secos)",
      "Agua",
      "Azúcar",
      "Canela en rama",
      "Clavos de olor",
    ],
    preparacion: "Cocina el mote. Hierve los huesillos con agua, azúcar, canela y clavo hasta formar almíbar. Sirve frío.",
    imagen: "moteconhuesillo.jpg",
  },
  {
    id: 8,
    nombre: "Calzones Rotos",
    descripcion: "Dulce frito, típico de celebraciones, hecho con masa frita y espolvoreado con azúcar flor.",
    ingredientes: [
      "2 tazas de harina",
      "2 huevos",
      "1 cucharada de azúcar",
      "1 pizca de sal",
      "Aceite para freír",
      "Azúcar flor para espolvorear",
    ],
    preparacion: "Mezcla harina, huevos, azúcar y sal hasta formar una masa. Estira, corta en formas y fríe hasta dorar. Espolvorea con azúcar flor.",
    imagen: "calzonesrotos.jpg",
  },
  {
    id: 9,
    nombre: "Sopaipillas",
    descripcion: "Frituras de masa de zapallo, muy populares como snack o acompañamiento.",
    ingredientes: [
      "1 taza de zapallo cocido y hecho puré",
      "2 tazas de harina",
      "1 cucharadita de polvos de hornear",
      "Sal al gusto",
      "Aceite para freír",
    ],
    preparacion: "Mezcla zapallo, harina, polvos y sal hasta formar una masa. Estira y corta en discos. Fríe hasta que inflen y doren.",
    imagen: "sopaipillas.jpg",
  },
  {
    id: 10,
    nombre: "Curanto en hoyo",
    descripcion: "Preparación tradicional que cocina mariscos, carnes y verduras en un hoyo con piedras calientes.",
    ingredientes: [
      "Mariscos variados (choritos, almejas, cholgas)",
      "Carnes (pollo, cerdo, vacuno)",
      "Papas, chapaleles y milcaos",
      "Hojas de nalca o repollo",
    ],
    preparacion: "En un hoyo en la tierra, pon piedras calientes, luego capas de ingredientes cubiertos con hojas y tierra. Cocina varias horas al vapor.",
    imagen: "curantoenhoyo.jpg",
  },
  {
    id: 11,
    nombre: "Pebre",
    descripcion: "Salsa picante tradicional para acompañar carnes y pan.",
    ingredientes: [
      "Tomates picados",
      "Cebolla picada",
      "Cilantro picado",
      "Ají verde picado",
      "Aceite de oliva",
      "Vinagre",
      "Sal y pimienta",
    ],
    preparacion: "Mezcla todos los ingredientes. Ajusta sal y vinagre al gusto. Sirve fresco.",
    imagen: "pebre.jpg",
  },
  {
    id: 12,
    nombre: "Chacarero",
    descripcion: "Sándwich tradicional chileno con carne, porotos verdes, tomate y ají verde.",
    ingredientes: [
      "Pan frica o marraqueta",
      "Carne de vacuno en tiras",
      "Porotos verdes cocidos",
      "Tomate en rodajas",
      "Ají verde en rodajas",
      "Mayonesa (opcional)",
    ],
    preparacion: "Arma el sándwich con todos los ingredientes frescos y la carne cocida.",
    imagen: "chacarero.jpg",
  },
  {
    id: 13,
    nombre: "Completo",
    descripcion: "Versión chilena del hot dog, con palta, tomate, mayonesa y otros ingredientes según el tipo.",
    ingredientes: [
      "Pan de hot dog",
      "Vienesas o salchichas",
      "Palta molida",
      "Tomate en cubitos",
      "Mayonesa",
      "Opcional: chucrut, salsa americana, mostaza, ketchup",
    ],
    preparacion: "Cocina las vienesas, abre el pan y agrega palta, tomate y mayonesa encima. Puedes añadir chucrut o salsas al gusto.",
    imagen: "completo.jpg",
  },
  {
    id: 14,
    nombre: "Arrollado de Huaso",
    descripcion: "Carne de cerdo adobada y enrollada, cocida y servida fría o caliente.",
    ingredientes: [
      "Carne de cerdo (pulpa o costillar)",
      "Ajo, ají de color, comino, orégano",
      "Sal y pimienta",
      "Cuerda de cocina",
    ],
    preparacion: "Adoba la carne, enróllala firmemente y amarra con cuerda. Cocina en agua o al horno. Sirve en rodajas.",
    imagen: "arrolladodehuaso.jpg",
  },
  {
    id: 15,
    nombre: "Pan Amasado",
    descripcion: "Pan casero tradicional, ideal para once o acompañar comidas.",
    ingredientes: [
      "1 kg de harina",
      "30g de levadura",
      "Agua tibia",
      "Sal",
      "Manteca o aceite",
    ],
    preparacion: "Haz una masa con harina, sal, levadura y manteca. Amasa, deja reposar, forma bollos y hornea hasta dorar.",
    imagen: "pan.jpg",
  },
];

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [seleccionada, setSeleccionada] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [topRecetas, setTopRecetas] = useState([]);

  const recetasFiltradas = recetas.filter((receta) =>
    receta.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const toggleFavorito = (receta) => {
    const yaEsFavorito = favoritos.find((fav) => fav.id === receta.id);
    if (yaEsFavorito) {
      setFavoritos(favoritos.filter((fav) => fav.id !== receta.id));
    } else {
      setFavoritos([...favoritos, receta]);
      const existeEnTop = topRecetas.find((r) => r.id === receta.id);
      if (!existeEnTop) {
        setTopRecetas([...topRecetas, receta]);
      }
    }
  };

  return (
    <div className="pagina">
      <div className="banderas-container">
        <img src="/banderas.png" alt="Banderas" className="banderas" />
      </div>

      <div className="contenido">
        <h1>Recetas Chilenas</h1>

        <input
          type="text"
          placeholder="Buscar una receta..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        {seleccionada ? (
          <div className="detalle-receta">
            <button onClick={() => setSeleccionada(null)}>← Volver</button>
            <h2>{seleccionada.nombre}</h2>

            {seleccionada.imagen && (
              <img
                src={seleccionada.imagen}
                alt={seleccionada.nombre}
                className="imagen-receta"
              />
            )}

            <button onClick={() => toggleFavorito(seleccionada)} className="btn-fav">
              {favoritos.some((fav) => fav.id === seleccionada.id)
                ? "💔 Quitar de favoritos"
                : "❤️ Agregar a favoritos"}
            </button>

            <p>{seleccionada.descripcion}</p>
            <h3>Ingredientes:</h3>
            <ul>
              {seleccionada.ingredientes.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <h3>Preparación:</h3>
            <p>{seleccionada.preparacion}</p>
          </div>
        ) : (
          <>
            <h2>Top Recetas ❤️</h2>
            <ul className="top-recetas">
              {topRecetas.map((receta) => (
                <li key={receta.id} onClick={() => setSeleccionada(receta)}>
                  {receta.nombre}
                </li>
              ))}
            </ul>

            <h2>Todas las Recetas</h2>
            <ul className="lista-recetas">
              {recetasFiltradas.map((receta) => (
                <li key={receta.id} onClick={() => setSeleccionada(receta)}>
                  {receta.nombre}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;



