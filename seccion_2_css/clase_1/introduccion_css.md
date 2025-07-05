# Qué es CSS y para qué sirve? **(Cascade Style Sheet)**
- CSS es el lenguaje universal de estilado en web.
    -HTML: Estructura de la web.
    -CSS: Dar apariencia a dicha estructura.
- No es un _lenguaje de programación_ pero sí un lenguaje de _estilado_.
- Estilado de la página.
- Para hacer animaciones.
- Para hacer presentaciones.
**- Para hacer sitios web responsivos.**
- Lo primero entender que CSS es un lenguaje y un tipo diferente de archivo.

## Cómo se usa CSS?
- Se puede utilizar en línea: 
    <h1 style="color: blue;">Título</h1>

- Interno (Dentro del head)
    <style>
        h1 {
            color: green;
        }
    </style>

- De forma externa (Con un archivo .css y haciendo un link con metadatos)
    ./style.css--
    h1 {
        color: green;
    }
    ./index.html--
    <link rel="stylesheet" href="./style.css">

## Sintaxis y selectores

¿A qué les suena sintáxis?
- La forma de escribir el código
**- La forma en que leemos el código**

¿Qué es un selector?
- Selecciona etiquetas, clases, ID's
- Le dicen al navegador qué elementos vamos a modificar de manera singular o plural

¿Qué tipos de selectores hay?
1. Etiquetas HTML
    ./index.html--
    <p>Me gusta el jugo de naranja</p>
    ./styles.css--
    p {
        color: orange;
    }

    Ventajas: NINGUNA
    Desventajas: 
    - No tenemos un control real sobre nuestro documento html
    - Se aplica de manera indistinta a todas las etiquetas
    - Es poco mantenible
    - No tiene especificidad

2. Selector de clases (.)
    ./index.html--
    <p class="descripcion_de_foto">Esta es una foto de una célula</p>
    <h1 class="descripcion_de_foto">Presentación de átomos</h1>
    ./styles.css--
    .descripcion_de_foto {
        font-size: 32px;
        color: blue;
    }

    Ventajas: 
    - Alta especificidad, es decir, tenemos completo control sobre los elementos que queremos estilar
    - Es reutilizable y modular
    - Es súper mantenible
    - Es fácil de leer y fácil de escribir
    Desventajas:
    - Es fácil de perder
    - No es del todo específico 

3. Selector de ID's (#)
    ./index.html--
    <p class="descripcion_de_foto" id="foto_ppv">Esta es una foto de una célula</p>
    <p class="descripcion_de_foto">Esta es una foto de un oso hormiguero</p>
    ./styles.css--
    .descripcion_de_foto {
        font-size: 32px;
        color: blue;
    }
    #foto_ppv {
        blur: 5px; 
    }

    Ventajas: 
    - Es único en todo el documento
    - Especificidad máxima
    - Solamente hay un uso lo que nos da mayor control sobe el elemento
    Desventajas: 
    - No es reutilizable ni es modular.
    - Castrante mantenimiento
    - No es generalizable (Tienes que ir uno por uno alv, que pinche estrés)

4. Selector universal (*)
    ./syles.css--
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


#### Mejor forma de trabajar: 
__Utilizar las clases en CSS__

5. Selectores múltiples (,)
    ./index.html--
    <h1 class="1">Soy un título normal</h1>
    <h2 class="2">Soy un título normal</h2>
    <h3 class="3">Soy un título normal</h3>
    ./styles.css--
    .1, .2, .3 {
        font-family: "Juro", sans-serif;
    }


## Propiedades
- Característica que tiene elementos
- Estilos que tienen los elementos
- Animaciones y transiciones de elementos 

| Propiedad          | Ejemplo                     | Qué hace                  |
| ------------------ | --------------------------- | ------------------------- |
| `color`            | `color: blue;`              | Cambia el color del texto |
| `background-color` | `background-color: yellow;` | Color de fondo            |
| `font-size`        | `font-size: 20px;`          | Tamaño del texto          |
| `font-family`      | `font-family: Arial;`       | Tipo de letra             |
| `padding`          | `padding: 10px;`            | Espacio interno           |
| `margin`           | `margin: 10px;`             | Espacio externo           |
| `border`           | `border: 1px solid black;`  | Borde del elemento        |
| `text-align`       | `text-align: center;`       | Alineación del texto      |

























