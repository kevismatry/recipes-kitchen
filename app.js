const express = require('express');
 const app = express();
 const port = 3000;

 app.get('/', (req, res) => res.send('Hello World!'));

 app.get('/recipes', (req, res) => {
     const recipes = [
      {
        id: 1,
        RecipeName: "Arroz con pollo",
        servings: "4",
        PreparationTime: "45",
        StepbyStep: [
          "1. En una olla, calentar aceite y freír el pollo hasta dorar.",
          "2. Agregar el arroz y mezclar bien.",
          "3. Añadir el caldo y los condimentos.",
          "4. Cocinar a fuego medio hasta que el arroz esté tierno.",
          "5. Servir caliente."
        ]
      },
      {
        id: 2,
        RecipeName: "Spaghetti a la bolognesa",
        servings: 6,
        PreparationTime: 60,
        StepbyStep: [
          "1. En una sartén, calentar aceite y sofreír la cebolla y el ajo.",
          "2. Agregar la carne molida y cocinar hasta que esté dorada.",
          "3. Añadir la salsa de tomate y los condimentos.",
          "4. Cocinar a fuego lento durante 30 minutos.",
          "5. Cocinar la pasta según las instrucciones del paquete.",
          "6. Servir la pasta con la salsa bolognesa encima."
        ]
      },
      {
        id: 3,
        RecipeName: "Ensalada César",
        servings: 2,
        PreparationTime: 15,
        StepbyStep: [
          "1. Lavar y picar la lechuga en trozos pequeños.",
          "2. En un tazón grande, mezclar la lechuga con el aderezo César.",
          "3. Agregar los croutones y el queso parmesano.",
          "4. Mezclar bien todos los ingredientes.",
          "5. Servir frío."
        ]
      },
      {
        id: 4,
        RecipeName: "Tacos de carne asada",
        servings: 8,
        PreparationTime: 30,
        StepbyStep: [
          "1. Cortar la carne en tiras delgadas.",
          "2. En una sartén, calentar aceite y freír la carne hasta que esté dorada.",
          "3. Calentar las tortillas en un comal o sartén.",
          "4. Rellenar las tortillas con la carne asada y agregar salsa y guarniciones al gusto.",
          "5. Servir caliente."
        ]
      },
      {
        id: 5,
        RecipeName: "Hamburguesa casera",
        servings: 4,
        PreparationTime: 30,
        StepbyStep: [
          "1. En un tazón grande, mezclar la carne molida con los condimentos.",
          "2. Formar las hamburguesas y refrigerar durante 1 hora.",
          "3. En una sartén o parrilla, cocinar las hamburguesas a fuego medio-alto durante 4-5 minutos por cada lado.",
          "4. Tostar los panes y montar las hamburguesas con los ingredientes deseados.",
          "5. Servir caliente."
        ]
      }
      ];
     res.json(recipes);
 });

 app.listen(port, () => {
     console.log(`Example app listening on port ${port}! http://localhost:${port}/`);
 });