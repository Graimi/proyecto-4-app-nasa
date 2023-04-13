# APP NASA

## <a href="https://www.notion.so/graimi/Proyecto-4-App-NASA-e1c8dc09bd08495f97724a206dd114ee?pvs=4">PROYECTO 4: APP NASA 🛰️</a>
## Descripción
En este proyecto vamos a crear una aplicación web con Vite y React consumiendo una de las API’s oficiales de la NASA con la que podremos consultar la fotografía astronómica del día. <br>
<br>

## Requerimentos
<ul>
<li> [✅] Página desplegada y de fácil acceso. Así como un repositorio de Github adjunto. </li> 
<li> [✅] Elemento img que muestre la imagen destacada por la NASA para hoy según su API con nombre APOD. </li>
<li> [✅] Poder leer el título, descripción y datos generales de la imagen junto a ésta. </li> 
<li> [✅] Encontrar un elemento input de tipo fecha que me permite seleccionar una fecha distinta a la de hoy y cambiar la imagen mostrada. </li>
<li> [✅] El input debe estar limitado para que no pueda elegir una fecha mayor a la de hoy. </li> 
<li> [✅] Si no es el caso y me permite elegir una fecha mayor, debo poder ver un mensaje en pantalla avisándome de que No hay fotografía disponible. </li> 
<li> [✅] La llamada a la API no debe haber ocurrido si me permite elegir una fecha mayor a la de hoy. </li> 
<li> [] Bonus: Tengo disponible un input de tipo select que me permite elegir entre las APIs APOD y Mars Rover Photos, de forma que puedo ver imágenes de ambos casos. </li> 
</ul>
<br>

## Instrucciones
<ol>
<li> [✅] Lo primero que tendremos que hacer antes de empezar es generar la `API Key` en el formulario de bienvenida, ya que gracias a esta podremos realizar las peticiones <a> https://api.nasa.gov/ </a> </li>

<li> [✅] Una vez tengamos a buen recaudo nuestra API Key podremos navegar hasta la sección de APOD (Astronomic Picture of the Day), inspeccionando tanto para lo que sirve como los endpoints y las queries que nos permite realizar: <br>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/826f462e-7dca-44e3-b980-91d8244bc553/Captura_de_Pantalla_2022-08-23_a_las_11.33.09.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230317T100436Z&X-Amz-Expires=86400&X-Amz-Signature=3306680d742c8be54aee80fbc0607fdfd146f61d6ee950ac3561861a90d69267&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Captura%2520de%2520Pantalla%25202022-08-23%2520a%2520las%252011.33.09.png%22&x-id=GetObject" width="400"/>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/80f9c537-9dcb-4663-bcba-db125849604b/Captura_de_Pantalla_2022-08-23_a_las_11.33.22.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230317T100515Z&X-Amz-Expires=86400&X-Amz-Signature=937a66110eeb873f4cc0dd3b89e6ca464d86791b6e6620201cad3e7777930054&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Captura%2520de%2520Pantalla%25202022-08-23%2520a%2520las%252011.33.22.png%22&x-id=GetObject" width="400">
</li>

<li> [✅] Como podemos observar, a la hora de realizar la petición tendremos que meterle dentro de la `query` nuestra `api_key` y podremos hacer uso de un parámetro llamado `date`. Esto nos será de mucha utilidad más adelante para poder recuperar fotografías de días anteriores que el actual, ya que el endpoint en sí nos devuelve la foto del día en el que se realice la petición.

```
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
```
</li>

<li> [✅] Una vez tenemos preparada la información que vamos a consumir y los endpoints preparados, crearemos un nuevo proyecto con Vite utilizando React como entorno de desarrollo. </li>

<li> [✅] Además de lo mencionado, recomendamos que instales `axios` para manejar la asincronía de las peticiones con esta librería, aunque la podéis realizar de las formas tradicionales que nos permite JavaScript, es decir, usando `fetch`. 
<a href="https://axios-http.com/es/docs/intro">Link</a> </li>

<li> [✅] Ahora que tienes todo listo, te pedimos lo siguiente: </li>

- [✅] Crea, en tu componente `App.jsx` el código necesario para recoger la fecha de hoy y guardarla en un `state`:
    
  ```jsx
  // Recuperamos la fecha actual en un formato ISO -> 2023-01-01
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  ```

- [✅] Añade un input de tipo fecha que cambie la fecha del input, esto tendrás que guardarlo en un estado de React (cuyo nombre habrás decidido antes). La función `onChange` que recibe el input de tipo fecha será algo parecido a esto:
    
  ```jsx
  // Crearemos una función que setee la fecha a través de un input en el formato 
  // necesario (igual que el formato de today)
  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString()); // .toLocaleString() sirve para formatear la fecha
  };
  ```
    
- [✅] Ahora crea una constante fuera del componente con la URL de la NASA y otra con tu API key. Usarás estas constantes para luego crear una URL para consumir el endpoint GET con tu key y la fecha:

  ```jsx
  // Almacenamos en una constante la URL de la NASA
  const NASA_URL = "https://api.nasa.gov/";
  // Almacenamos en una constante nuestra API Key, esto es recomendable almacenarlo en una variable de entorno
  const NASA_API_KEY = "*************************";

  // Cuando hagas el fetch, utiliza la URL con la fecha anterior que creaste de una forma similar a esto:
  `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
  ```

<li> [✅] Ahora tu trabajo será crear un `useEffect` en el componente App para pedir los datos APOD de la API. Analiza bien su formato y la información que llega, porque tendrás que conseguir lo siguiente: </li>

- [] Un título que diga: “Imagen astronómica del día”.
- [] Un mensaje que diga: “Esta imagen corresponde con la fecha **{valor_de_tu_estado_date}**”.
- [✅] Un input para cambiar la fecha del estado date que hiciste antes con el código que te recomendamos usar.
- [✅] Un componente aparte, llámalo `Figure` o similar, que reciba props con el valor recibido de la API APOD de la NASA de forma que puedas renderizar:
    - [✅] Una imagen con la imagen del día de la NASA.
    - [✅] El título que tiene la imagen en la respuesta de la API.
    - [✅] Una caja que contenga los detalles de la fecha y copyright que recibes en la respuesta de la API.
    - [✅] Un texto con la explicación acerca de la imagen, recibirás también este valor de la API.
</ol>
<br>

## Bonus: Mars Rover Photos 👽
Esto es una tarea para l@s más valientes, si te ves con ganas de practicar más y usar un nuevo `state`, te animamos a que lo consigas para dominar React 💪. <br>
En la API de la NASA, podemos encontrar también una API muy parecida a la que has usado, pero en este caso muestra imágenes del **Mars Rover** (un robot que recorre Marte).
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8f8efbe0-e591-4314-8739-fd5c88af1281/Captura_de_pantalla_2023-01-24_a_las_22.34.09.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230317T102323Z&X-Amz-Expires=86400&X-Amz-Signature=819392933921d8606cf223fbcb985380ee702d0698b5252a0033c2959323f211&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Captura%2520de%2520pantalla%25202023-01-24%2520a%2520las%252022.34.09.png%22&x-id=GetObject" width="400">
<ol>
<li> [✅] Tendrás que conseguir añadir un elemento select junto al input de fechas para poder permitir al usuario seleccionar entre la API APOD o la API Mars Rovers para cargar fotos. </li>
<li> [✅] Por defecto tendrás siempre APOD como la API principal, pero si seleccionas Mars Rovers cargarás la foto del día para el Mars Rovers, y cuando el input cambie mostrarás la foto de la misma. Es decir, replicarás todo el proceso anterior (reutiliza el componente y auméntalo con mas props!), creando una página muy completa y dinámica 🚀 </li>
</ol>
<br>

## Pasos
<ol>
<li> [✅] General </li>
[✅] Borrador en Canva <br>
[✅] Astronomic view <br>
[✅] Rover view <br>
[✅] Elementos organizados <br>
[✅] Comentarios añadidos <br>
[✅] Código sobrante eliminado <br>

<li> [✅] HTML </li>
[✅] Metadatos <br>

<li> [✅] REACT </li>
[✅] App <br>
[✅] Header <br>
[✅] Astronomical <br>
[✅] Rover <br>
[✅] Error <br>
[✅] Footer <br>

<li> [✅] CSS </li>
[✅] Index <br>
[✅] App <br>
[✅] Header <br>
[✅] Astronomical <br>
[✅] Rover <br>
[✅] Rover <br>
[✅] Footer <br>
</ol>
<br>