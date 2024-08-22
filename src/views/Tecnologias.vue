<template>
        <section
      id="tecnologia"
      class="technology my-12 p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500"
    >
      <h2
        class="text-3xl font-extrabold mb-6 border-b-4 border-blue-600 pb-3 text-gray-800"
      >
        Tecnología
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Tecnologías Formales -->
        <div
          class="experience-formal p-6 bg-blue-50 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <p class="text-lg mb-4 font-semibold text-blue-600">
            <span class="text-xl"
              >Tecnologías con las que trabajo formalmente:</span
            >
          </p>

          <ul class="list-disc list-inside mb-6 pl-5 space-y-2">
            <li>
              👉🏻
              <span class="font-semibold"
                >Vue.js con JavaScript para el desarrollo web</span
              >
              ✔️
            </li>
            <li>
              👉🏻
              <span class="font-semibold"
                >Vitest y Cypress para las pruebas unitarias</span
              >
              ✔️
            </li>
            <li>
              👉🏻
              <span class="font-semibold">
                Selenium y Robot Framework para pruebas funcionales
                automatizadas
              </span>
              ✔️
            </li>
            <li>
              👉🏻
              <span class="font-semibold">
                Tailwind y Vuetify para interfaces atractivas
              </span>
              ✔️
            </li>
            <li>
              👉🏻
              <span class="font-semibold"
                >GitLab como repositorio de código</span
              >
              ✔️
            </li>
            <li>
              👉🏻
              <span class="font-semibold"
                >Metodologías Ágiles para alcanzar objetivos</span
              >
              ✔️
            </li>
          </ul>
        </div>

        <!-- Tecnologías Personales -->
        <div
          class="experience-personal p-6 bg-blue-50 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <p class="text-lg mb-4 font-semibold text-blue-600">
            <span class="text-xl"
              >Tecnologías con las que trabajo en proyectos personales:</span
            >
          </p>

          <ul class="list-disc list-inside mb-6 pl-5 space-y-2">
            <li>
              👉🏻
              <span class="font-semibold"
                >Angular para mi página web de resultados de fútbol</span
              >
              ✔️
            </li>
            <li>
              👉🏻
              <span class="font-semibold"
                >Ionic para mi aplicación móvil de resultados de fútbol en
                Android</span
              >
              ✔️
            </li>
            <li>👉🏻 <span class="font-semibold">TypeScript</span> ✔️</li>
            <li>👉🏻 <span class="font-semibold">CSS / Sass</span> ✔️</li>
            <li>👉🏻 <span class="font-semibold">Bootstrap</span> ✔️</li>
            <li>
              👉🏻
              <span class="font-semibold"
                >GitHub como repositorio de código</span
              >
              ✔️
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "TecnologiaMia", // Nombre del componente, puede ser usado para referencia

  mounted() {
    
  },
};
</script>

<style>

</style>