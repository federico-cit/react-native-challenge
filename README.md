## Get started

1. Instalar dependencias

   ```bash
   npm install
   ```

2. Iniciar la app

   ```bash
   npx expo start
   ```

3. Iniciar en emulador (a) android o version web (w)

🧠 Ejercicio Técnico
🎯 Objetivo
Desarrollar una aplicación en React Native que consuma una API pública y permita visualizar, marcar como favoritos y consultar comentarios sobre publicaciones.

✅ Tareas

1. Listado de publicaciones
   Consumir la API pública https://jsonplaceholder.typicode.com/posts y mostrar las publicaciones en la pestaña "Posts".
2. Funcionalidad de favoritos
   Implementar un mecanismo para que cada publicación pueda marcarse o desmarcarse como favorita mediante un botón (funcionalidad tipo toggle).
   Las publicaciones marcadas deberán visualizarse en la pestaña "Favoritos".
3. Visualización de comentarios
   Al seleccionar una publicación, se deberá abrir un modal que muestre los comentarios asociados.
   Para ello, se deberá consumir:
   https://jsonplaceholder.typicode.com/posts/{postId}/comments.
4. Estilos
   Se pueden aplicar estilos mínimos para facilitar la visualización de la información.
   La funcionalidad es la prioridad. Los estilos son secundarios.

ℹ️ Consideraciones

- Se permite el uso de cualquier manejador de estado (Context API, Redux, Zustand, etc.).
  El proyecto cuenta con un boilerplate para uso de Context API, eliminarlo si se decide usar otro global state manager.
  (Carpeta contexts e importación en /app/\_layout.tsx)
- No se requiere persistencia de datos. El manejo en memoria es suficiente.
- Se evaluará principalmente la correcta implementación funcional de los requisitos.
- Debe resolverse en orden
