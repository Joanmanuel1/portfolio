<template>
  <section
    id="proyectos"
    class="experiencia my-12 p-8 bg-white shadow-xl rounded-lg transition-transform transform duration-500"
  >
    <h2
      class="text-3xl font-extrabold mb-6 pb-3 border-4 border-blue-500 rounded-lg text-center shadow-md text-blue-600 bg-blue-50"
      style="margin-top: 0"
    >
      Proyectos
    </h2>
    <div class="flex flex-wrap gap-8">
      <!-- Primer Proyecto -->
      <div
        class="project-item flex-1 w-full md:w-1/2 p-6 mb-8 border-b-4 border-blue-500 bg-blue-50 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-blue-600 mb-2">Puro Fútbol</h3>
          <p class="text-lg mb-2">
            <strong>Fecha de comienzo:</strong> Enero 2023 -

            <strong>Fecha puesta en producción:</strong> Próximamente
          </p>
          <p class="text-lg mb-2">
            <strong>Descripción:</strong> Es una página que muestra los
            resultados en vivo de los partidos del fútbol argentino. Las tablas
            de posiciones y sus fixtures respectivamente.
          </p>
          <p class="text-lg mb-2">
            <strong>Frontend: </strong>Angular 17 con TypeScript.
          </p>
          <p class="text-lg mb-2">
            <strong>Backend: </strong>Datos brindados por API FOOTBALL.
          </p>
          <p class="text-lg mb-2"><strong>Diseño: </strong>Bootstrap v5.3</p>
          <p class="text-lg mb-2">
            <strong>Acceso a demostración:</strong>
            <a
              href="https://purofutbol.netlify.app/argentina/primera"
              class="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
            >
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
              Presione sobre este link
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
        class="project-item flex-1 w-full md:w-1/2 p-6 mb-8 border-b-4 border-blue-500 bg-blue-50 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
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
            <strong>Frontend: </strong>Ionic con TypeScript.
          </p>
          <p class="text-lg mb-2">
            <strong>Backend: </strong>Datos brindados por API FOOTBALL.
          </p>
          <p class="text-lg mb-2"><strong>Diseño: </strong>Bootstrap v5.3</p>
          <p class="text-lg mb-2">
            <strong>Acceso a demostración:</strong>
            <a
              href="https://play.google.com/store/apps/details?id=com.example.purofutbol"
              class="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
            >
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
              Presione sobre este link
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
    </div>
    <div class="flex flex-wrap gap-8">
      <!-- Tercer Proyecto -->
      <div
        class="project-item flex-1 w-full md:w-1/2 p-6 mb-8 border-b-4 border-blue-500 bg-blue-50 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-yellow-600 mb-2">Juego Pokémon</h3>
          <p class="text-lg mb-2">
            <strong>Fecha de comienzo:</strong> Marzo 2023 -
            <strong>Fecha puesta en producción:</strong> Finalidad educativa
          </p>
          <p class="text-lg mb-2">
            <strong>Descripción:</strong> Juego interactivo para adivinar cual
            es el pokemon.
          </p>
          <p class="text-lg mb-2">
            <strong>Frontend: </strong>Bue con JavaScript.
          </p>

          <p class="text-lg mb-2">
            <strong>Acceso a demostración:</strong>
            <a
              href="https://www.example.com/juego-pokemon"
              class="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
            >
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
              Presione sobre este link
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
        class="project-item flex-1 w-full md:w-1/2 p-6 mb-8 border-b-4 border-blue-500 bg-blue-50 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-red-600 mb-2">Adogtame</h3>
          <p class="text-lg mb-2">
            <strong>Fecha de comienzo:</strong> Marzo 2021 -
            <strong>Fecha puesta en producción:</strong> Finalidad educativa
          </p>
          <p class="text-lg mb-2">
            <strong>Descripción:</strong> Aplicacion web para dar y adoptar
            animales.
          </p>
          <p class="text-lg mb-2">
            <strong>Frontend: </strong> Angular 11 con TypeScript.
          </p>
          <p class="text-lg mb-2">
            <strong>Backend: </strong>Node JS.
          </p>
          <p class="text-lg mb-2">
            <strong>Base de datos: </strong>SQL.
          </p>
          <p class="text-lg mb-2"><strong>Diseño: </strong>Bootstrap v4</p>
          <p class="text-lg mb-2">
            <strong>Acceso a demostración:</strong>
            <a
              href="https://www.example.com/nombre-proyecto"
              class="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
            >
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
              Presione sobre este link
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
        :numVisible="numVisible"
        :thumbnailsPosition="position"
        containerStyle="max-width:100%"
        :showItemNavigators="true"
      >
        <template #item="slotProps">
          <img
            :src="require(`@/assets/${slotProps.item.source}`)"
            :alt="slotProps.item.alt"
            :style="{
              width: currentProject === 'puroFutbolAndroid' ? '400px' : '90%',
              display: 'block',
              height: '700px',
              backgroundSize: 'contain',
            }"
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
        style="cursor: pointer"
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
const currentProject = ref("");

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
    { source: "liga3.png", alt: "Imagen del proyecto Puro Fútbol 3" },
    { source: "liga4.png", alt: "Imagen del proyecto Puro Fútbol 4" },
    { source: "liga5.png", alt: "Imagen del proyecto Puro Fútbol 5" },
    { source: "liga6.png", alt: "Imagen del proyecto Puro Fútbol 6" },
    { source: "liga7.png", alt: "Imagen del proyecto Puro Fútbol 7" },
    { source: "liga8.png", alt: "Imagen del proyecto Puro Fútbol 8" },
    { source: "liga9.png", alt: "Imagen del proyecto Puro Fútbol 9" },
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
    {
      source: "android3.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 3",
    },
    {
      source: "android4.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 4",
    },
    {
      source: "android5.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 5",
    },
    {
      source: "android6.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 6",
    },
    {
      source: "android7.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 7",
    },
    {
      source: "android8.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 8",
    },
    {
      source: "android9.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 9",
    },
    {
      source: "android10.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 10",
    },
    {
      source: "android11.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 11",
    },
    {
      source: "android12.jpeg",
      alt: "Imagen del proyecto Puro Fútbol Android 12",
    },
  ],
  juegoPokemon: [
    { source: "pokemon1.png", alt: "Imagen del proyecto Juego de Pokémon 1" },
    { source: "pokemon2.png", alt: "Imagen del proyecto Juego de Pokémon 2" },
    { source: "pokemon3.png", alt: "Imagen del proyecto Juego de Pokémon 3" },
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
  currentProject.value = project;
  galleryVisible.value = true;
};
</script>

<style scoped>
button {
  z-index: 100;
}
.w-400px {
  width: 400px;
}
</style>
