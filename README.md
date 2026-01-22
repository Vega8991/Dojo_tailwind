# DOJO Tailwind CSS

**conceptos básicos y avanzados de Tailwind** usando React y Vite.

---

## ejercicio 1: caja con utilities básicas

* crea un `div` con fondo gris claro (`bg-zinc-200`), padding de 6 (`p-6`), bordes redondeados (`rounded-lg`) y sombra (`shadow-md`).
* dentro coloca un párrafo con texto mediano y negrita.
* usa clases tailwind directamente en jsx.

---

## ejercicio 2: layout con flexbox

* crea un contenedor `div` con `flex` y `gap-4`.
* coloca 3 cajas (`div`) de 50x50px con colores rojo, azul y verde.
* centra vertical y horizontalmente las cajas.
* usa `items-center` y `justify-center`.

---

## ejercicio 3: botón con estados

* crea un botón con padding y bordes redondeados.
* al pasar el mouse cambia el color de fondo.
* al hacer focus aplica un `ring`.
* el texto debe ser blanco.
* clases `hover:bg-blue-600 focus:ring-4 focus:ring-blue-300`.

---

## ejercicio 4: tipografía

* crea 3 párrafos con tamaños distintos (`text-sm`, `text-lg`, `text-2xl`).
* usa diferentes pesos (`font-normal`, `font-medium`, `font-bold`).
* ajusta la altura de línea con `leading-relaxed`.

---

## ejercicio 5: responsive

* crea un `div` con un texto que sea:

  * `text-sm` en móviles
  * `text-lg` en tablets (`md:`)
  * `text-2xl` en desktops (`lg:`)
* cambia el color de fondo para cada breakpoint.

---

## ejercicio 6: componente card con imagen

* crea un componente `Card` que reciba `title`, `description` y `image` como props.
* muestra la imagen en la parte superior de la tarjeta con bordes redondeados.
* aplica padding, sombra y bordes redondeados al contenedor.
* el título debe ser grande y en negrita, el texto descriptivo gris.
* usa `max-w-sm bg-white rounded-xl shadow p-6` para el contenedor.
* para la imagen, usa `rounded-t-xl w-full h-48 object-cover`.

---

## ejercicio 7: botón que cambia de clase dinámicamente

* crea un botón que cambie de color al hacer clic.
* estado inicial: azul (`bg-blue-500`) con texto `Inactivo`.
* al hacer clic: verde (`bg-green-500`) y texto `Activo`.
* aplica transición de color.
* usa `useState` y template literals: ``className={`bg-${color} ...`}``

---

## ejercicio 8: lista de elementos con hover

* crea una lista de 5 elementos.
* aplica padding y bordes redondeados a cada item.
* al pasar el mouse cambia el fondo y el texto de color.
* usa `hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200`.

---

## ejercicio 9: navbar básica con responsive

* crea un `nav` con fondo azul (`bg-blue-500`) y padding.
* coloca un logo a la izquierda y 3 enlaces a la derecha.
* en móviles los enlaces deben apilarse verticalmente.
* usa flexbox y breakpoints.

---

## ejercicio 10: mini proyecto final

* crea una página de perfil simple con:

  * navbar responsive
  * card de usuario con foto, nombre y descripción
  * botón que cambia de estado
  * lista de actividades con efecto hover
* aplica spacing, tipografía, colores y transiciones.
* combina todos los ejercicios previos en un solo componente `App.jsx`.
* prueba los breakpoints y los efectos hover para int
