const express = require('express');
 const app = express();
 const port = 3000;

 app.get('/', (req, res) => res.send('Hello World!'));

 app.get('/recipes', (req, res) => {
     const recipes = [
      {
        id: 1,
        recipeName: "Arroz con pollo",
        servings: 4,
        preparationTime: 45,
        stepbyStep: [
          "1. En una olla, calentar aceite y freír el pollo hasta dorar.",
          "2. Agregar el arroz y mezclar bien.",
          "3. Añadir el caldo y los condimentos.",
          "4. Cocinar a fuego medio hasta que el arroz esté tierno.",
          "5. Servir caliente."
        ],
        imageName: "https://imgur.com/a/RxKHRj3"
      },
      {
        id: 2,
        recipeName: "Spaghetti a la bolognesa",
        servings: 6,
        preparationTime: 60,
        stepbyStep: [
          "1. En una sartén, calentar aceite y sofreír la cebolla y el ajo.",
          "2. Agregar la carne molida y cocinar hasta que esté dorada.",
          "3. Añadir la salsa de tomate y los condimentos.",
          "4. Cocinar a fuego lento durante 30 minutos.",
          "5. Cocinar la pasta según las instrucciones del paquete.",
          "6. Servir la pasta con la salsa bolognesa encima."
        ],
         "ImageName": "receta_2_espagueti_a_la_bolonesa.jpg"
      },
      {
        id: 3,
        recipeName: "Ensalada César",
        servings: 2,
        preparationTime: 15,
        stepbyStep: [
          "1. Lavar y picar la lechuga en trozos pequeños.",
          "2. En un tazón grande, mezclar la lechuga con el aderezo César.",
          "3. Agregar los croutones y el queso parmesano.",
          "4. Mezclar bien todos los ingredientes.",
          "5. Servir frío."
        ],
        "ImageName": "receta_3_ensalada_cesar.jpg"
      },
      {
        id: 4,
        recipeName: "Tacos de carne asada",
        servings: 8,
        preparationTime: 30,
        stepbyStep: [
          "1. Cortar la carne en tiras delgadas.",
          "2. En una sartén, calentar aceite y freír la carne hasta que esté dorada.",
          "3. Calentar las tortillas en un comal o sartén.",
          "4. Rellenar las tortillas con la carne asada y agregar salsa y guarniciones al gusto.",
          "5. Servir caliente."
        ],
        "ImageName": "receta_4_tacos_de_carne.jpg"
      },
      {
        id: 5,
        recipeName: "Hamburguesa casera",
        servings: 4,
        preparationTime: 30,
        stepbyStep: [
          "1. En un tazón grande, mezclar la carne molida con los condimentos.",
          "2. Formar las hamburguesas y refrigerar durante 1 hora.",
          "3. En una sartén o parrilla, cocinar las hamburguesas a fuego medio-alto durante 4-5 minutos por cada lado.",
          "4. Tostar los panes y montar las hamburguesas con los ingredientes deseados.",
          "5. Servir caliente."
        ],
        "ImageName": "receta_5_hamburguesa_casera.jpg"
      }
      ];
     res.json(recipes);
 });

 app.listen(port, () => {
     console.log(`Example app listening on port ${port}! http://localhost:${port}/`);
 });