<template>
  <section
    id="proyectos"
    class="experiencia my-12 p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500"
    >
    <h2
      class="text-3xl font-extrabold mb-6 border-b-4 border-blue-500 pb-3 text-gray-800"
    >
      Proyectos
    </h2>

    <!-- Primer Proyecto -->
    <div class="project-item flex-1 p-6 bg-blue-50 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-blue-600 mb-2">Puro Fútbol</h3>
        <p class="text-lg mb-2">
          <strong>Fecha de comienzo:</strong> Enero 2023 -
          <strong>Fecha puesta en producción:</strong> Próximamente
        </p>
        <p class="text-lg mb-2">
          <strong>Descripción:</strong> Es una página que muestra los resultados
          en vivo de los partidos del fútbol argentino. Las tablas de posiciones
          y sus fixtures respectivamente.
        </p>
        <p class="text-lg mb-2">
          <strong>Tecnologías Utilizadas:</strong>
          Angular 17 con TypeScript. Datos brindados por API FOOTBALL. Bootstrap
          v5.3
        </p>
        <p class="text-lg mb-2">
          <strong>Acceso a demostración:</strong>
          <a
            href="https://purofutbol.netlify.app/argentina/primera"
            class="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
          >
            Presione sobre este link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 inline ml-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </p>
      </div>

      <!-- Imagen del Primer Proyecto -->
      <div class="image-container">
        <img
          src="../assets/liga1.png"
          alt="Imagen del proyecto Puro Fútbol"
          class="w-full object-contain rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110"
          style="height: 400px"
        />
      </div>
    </div>

    <!-- Segundo Proyecto -->
    <div class="project-item space-y-8 mb-12 p-6 bg-blue-50 shadow-lg rounded-lg">
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-blue-600 mb-2">
          Puro Futbol para Android
        </h3>
        <p class="text-lg mb-2">
          <strong>Fecha de comienzo:</strong> Abril 2024 -
          <strong>Fecha puesta en producción:</strong> Próximamente
        </p>
        <p class="text-lg mb-2">
          <strong>Descripción:</strong> Es una página que muestra los resultados
          en vivo de los partidos del fútbol argentino. Las tablas de posiciones
          y sus fixtures respectivamente para Android.
        </p>
        <p class="text-lg mb-2">
          <strong>Tecnologías Utilizadas:</strong>
          Ionic con TypeScript. Datos brindados por API FOOTBALL.
        </p>
        <p class="text-lg mb-2">
          <strong>Acceso a demostración:</strong>
          <a
            href="https://purofutbol.netlify.app/argentina/primera"
            class="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
          >
            Presione sobre este link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 inline ml-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </p>
      </div>

      <!-- Imagen del Segundo Proyecto -->
      <div class="image-container">
        <img
          src="../assets/android1.jpeg"
          alt="Imagen del proyecto Puro Futbol para Android"
          class="w-full object-contain rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110"
          style="height: 400px"
        />
      </div>
    </div>

    <!-- Tercer Proyecto -->
    <div class="project-item space-y-8 mb-12 p-6 bg-blue-50 shadow-lg rounded-lg">
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-blue-600 mb-2">Juego de Pokémon</h3>
        <p class="text-lg mb-2">
          <strong>Fecha de comienzo:</strong> Mayo 2024
        </p>
        <p class="text-lg mb-2">
          <strong>Descripción:</strong> Es un juego basado en la serie Pokémon,
          donde deberás adivinar qué Pokémon es.
        </p>
        <p class="text-lg mb-2">
          <strong>Tecnologías Utilizadas:</strong>
          Vue.js con TypeScript. Gráficos y datos brindados por PokéAPI
        </p>
        <p class="text-lg mb-2">
          <strong>Acceso a demostración:</strong>
          <a
            href="https://juego-de-pokemon-vue-js.netlify.app/"
            class="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
          >
            Presione sobre este link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 inline ml-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </p>
      </div>

      <!-- Imagen del Tercer Proyecto -->
      <div class="image-container">
        <img
          src="../assets/pokemon1.png"
          alt="Imagen del proyecto Juego de Pokémon"
          class="w-full object-contain rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110"
          style="height: 400px"
        />
      </div>
    </div>

    <!-- Cuarto Proyecto -->
    <div class="project-item space-y-8 mb-12 p-6 bg-blue-50 shadow-lg rounded-lg">
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-blue-600 mb-2">Nombre del Proyecto</h3>
        <p class="text-lg mb-2">
          <strong>Fecha de comienzo:</strong> Mes y Año
        </p>
        <p class="text-lg mb-2">
          <strong>Descripción:</strong> Breve descripción del proyecto.
        </p>
        <p class="text-lg mb-2">
          <strong>Tecnologías Utilizadas:</strong> Tecnologías utilizadas.
        </p>
        <p class="text-lg mb-2">
          <strong>Acceso a demostración:</strong>
          <a
            href="#"
            class="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
          >
            Presione sobre este link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 inline ml-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </p>
      </div>

      <!-- Imagen del Cuarto Proyecto -->
      <div class="image-container">
        <img
          src="../assets/adogtame1.png"
          alt="Imagen del Cuarto Proyecto"
          class="w-full object-contain rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110"
          style="height: 400px"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style scoped>
.projects {
  max-width: 1200px;
  margin: 0 auto;
}

.project-item img {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
