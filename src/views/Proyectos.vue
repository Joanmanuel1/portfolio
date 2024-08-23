<template>
  <section
    id="proyectos"
    class="experiencia my-12 p-8 bg-white shadow-xl rounded-lg transition-transform transform duration-500"
  >
    <h2
      class="text-3xl font-extrabold mb-6 border-b-4 border-blue-500 pb-3 text-gray-800"
    >
      Proyectos
    </h2>

    <!-- Primer Proyecto -->
    <div
      class="project-item flex-1 p-6 mb-8 border-b-4 border-blue-500 bg-blue-50 shadow-lg rounded-lg transform transition duration-500"
    >
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
      <div class="image-container">
        <Button
          label="Ver Galería"
          icon="pi pi-images"
          @click="showGallery('puroFutbol')"
        />
      </div>
    </div>

    <!-- Segundo Proyecto -->
    <div
      class="project-item flex-1 p-6 mb-8 border-b-4 border-blue-500 bg-green-50 shadow-lg rounded-lg transform transition duration-500"
    >
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-green-600 mb-2">
          Puro Fútbol Android
        </h3>
        <p class="text-lg mb-2">
          <strong>Fecha de comienzo:</strong> Febrero 2023 -
          <strong>Fecha puesta en producción:</strong> Próximamente
        </p>
        <p class="text-lg mb-2">
          <strong>Descripción:</strong> Aplicación móvil para seguir los
          resultados en vivo del fútbol argentino y consultar tablas de
          posiciones.
        </p>
        <p class="text-lg mb-2">
          <strong>Tecnologías Utilizadas:</strong>
          Android Studio, Kotlin. Datos brindados por API FOOTBALL.
        </p>
        <p class="text-lg mb-2">
          <strong>Acceso a demostración:</strong>
          <a
            href="https://play.google.com/store/apps/details?id=com.example.purofutbol"
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
      <div class="image-container">
        <Button
          label="Ver Galería"
          icon="pi pi-images"
          @click="showGallery('puroFutbolAndroid')"
        />
      </div>
    </div>

    <!-- Tercer Proyecto -->
    <div
      class="project-item flex-1 p-6 mb-8 border-b-4 border-blue-500 bg-yellow-50 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
    >
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-yellow-600 mb-2">Juego Pokémon</h3>
        <p class="text-lg mb-2">
          <strong>Fecha de comienzo:</strong> Marzo 2023 -
          <strong>Fecha puesta en producción:</strong> Junio 2023
        </p>
        <p class="text-lg mb-2">
          <strong>Descripción:</strong> Juego interactivo para explorar y
          capturar Pokémon, con características especiales de combate y
          evolución.
        </p>
        <p class="text-lg mb-2">
          <strong>Tecnologías Utilizadas:</strong>
          Unity, C#. Recursos gráficos diseñados a mano.
        </p>
        <p class="text-lg mb-2">
          <strong>Acceso a demostración:</strong>
          <a
            href="https://www.example.com/juego-pokemon"
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
      <div class="image-container">
        <Button
          label="Ver Galería"
          icon="pi pi-images"
          @click="showGallery('juegoPokemon')"
        />
      </div>
    </div>

    <!-- Cuarto Proyecto -->
    <div
      class="project-item flex-1 p-6 mb-8 border-b-4 border-blue-500 bg-red-50 shadow-lg rounded-lg transform transition duration-500"
    >
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-red-600 mb-2">
          Nombre del Proyecto
        </h3>
        <p class="text-lg mb-2">
          <strong>Fecha de comienzo:</strong> Abril 2023 -
          <strong>Fecha puesta en producción:</strong> Octubre 2023
        </p>
        <p class="text-lg mb-2">
          <strong>Descripción:</strong> Descripción del proyecto, incluyendo su
          propósito, características clave y objetivos.
        </p>
        <p class="text-lg mb-2">
          <strong>Tecnologías Utilizadas:</strong>
          Tecnologías utilizadas en el proyecto, por ejemplo, React, Node.js,
          etc.
        </p>
        <p class="text-lg mb-2">
          <strong>Acceso a demostración:</strong>
          <a
            href="https://www.example.com/nombre-proyecto"
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
      <div class="image-container">
        <Button
          label="Ver Galería"
          icon="pi pi-images"
          @click="showGallery('nombreProyecto')"
        />
      </div>
    </div>
  </section>

  <!-- Galleria Modal -->
  <div
    v-if="galleryVisible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 overflow-hidden"
  >
    <div>
      <Galleria
        :value="galleryImages"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        :thumbnailsPosition="position"
        containerStyle="max-width:100%"
        :showItemNavigators="true"
      >
        <template #item="slotProps">
          <img
            :src="require(`@/assets/${slotProps.item.source}`)"
            :alt="slotProps.item.alt"
            style="
              width: 100%;
              display: block;
              height: 700px;
              background-size: contain;
            "
          />
        </template>
        <template #thumbnail="slotProps">
          <img
            :src="require(`@/assets/${slotProps.item.source}`)"
            :alt="slotProps.item.alt"
            style="
              width: 100%;
              display: block;
              background-size: cover;
              height: 100px;
            "
          />
        </template>
      </Galleria>
      <button
        @click="galleryVisible = false"
        class="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full z-10 transition-opacity duration-300 hover:opacity-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import Galleria from "primevue/galleria";

const galleryVisible = ref(false);
const galleryImages = ref([]);

const responsiveOptions = [
  { breakpoint: "1024px", numVisible: 5 },
  { breakpoint: "768px", numVisible: 3 },
  { breakpoint: "560px", numVisible: 1 },
];

const numVisible = ref(5);

const projectImages = {
  puroFutbol: [
    { source: "liga1.png", alt: "Imagen del proyecto Puro Fútbol 1" },
    { source: "liga2.png", alt: "Imagen del proyecto Puro Fútbol 2" },
    { source: "liga3.png", alt: "Imagen del proyecto Puro Fútbol 2" },
  ],
  puroFutbolAndroid: [
    {
      source: "android1.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 1",
    },
    {
      source: "android2.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 2",
    },
  ],
  juegoPokemon: [
    { source: "pokemon1.png", alt: "Imagen del proyecto Juego de Pokémon 1" },
    { source: "pokemon2.png", alt: "Imagen del proyecto Juego de Pokémon 2" },
  ],
  nombreProyecto: [
    {
      source: "adogtame1.png",
      alt: "Imagen del proyecto Nombre del Proyecto 1",
    },
    {
      source: "adogtame2.png",
      alt: "Imagen del proyecto Nombre del Proyecto 2",
    },
  ],
};

const showGallery = (project) => {
  galleryImages.value = projectImages[project];
  galleryVisible.value = true;
};
</script>

<style scoped>
button {
  z-index: 100;
}
</style>
