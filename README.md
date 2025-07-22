# Pokédex de Valeria

Esta es una Pokédex interactiva creada desde cero con HTML, CSS y JavaScript, que se conecta a la PokéAPI para mostrar información detallada de cualquier Pokémon por nombre o ID.  
Cuenta con un diseño personalizado inspirado en una consola retro, una animación flotante de Pokébolas y un botón de "aleatorio".

---

## Características

- Búsqueda por nombre o ID.
- Botón para mostrar un Pokémon aleatorio.
- Muestra imagen, tipo, peso, altura e ID del Pokémon.
- Conexión directa con la PokéAPI.
- Interfaz personalizada con animaciones y fondo dinámico.

---

## Aprendí...

- Cómo consumir una API pública usando `fetch` y `async/await`.
- Manipulación avanzada del DOM con JavaScript puro.
- Diseño responsivo y estilizado con CSS moderno.
- Organización clara de archivos en un proyecto web.
- Cómo crear experiencias visuales atractivas sin frameworks.
- Buenas prácticas para subir proyectos a GitHub.
- Uso de **Node.js y Express** para servir archivos estáticos de forma local.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- PokéAPI
- Node.js + Express
- Git + GitHub Pages

## Versión en línea para muestra

Esta página fue adaptada para funcionar directamente desde GitHub Pages.  
Puedes verla abriendo el archivo `index.html` directamente o desde el enlace generado por GitHub Pages.

---

## Proyecto completo con backend

El archivo `pokedex.zip` contiene:

- Carpeta `server/` con Express configurado.
- Carpeta `public/` con el frontend servido por Express.
- `package.json` con las dependencias necesarias.
- `package-lock.json`.

### Cómo ejecutarlo localmente

1. Descarga y descomprime `pokedex.zip`.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta:

```bash
npm install
node server/index.js

- Abre tu navegador en:
http://localhost:3000