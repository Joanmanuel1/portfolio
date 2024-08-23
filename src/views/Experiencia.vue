<template>
  <section
    id="experiencia"
    class="experiencia my-12 p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500"
  >
    <div class="header flex items-center w-full mb-6">
      <!-- Contenedor para el h2 y el botón -->
      <div class="header-content flex items-center w-full relative">
        <h2
          class="text-3xl font-extrabold mb-6 pb-3 border-4 border-blue-500 rounded-lg bg-blue-50 text-center shadow-md text-blue-600 flex-1"
          style="margin-top: 0"
        >
          Experiencia
          <!-- Botón de alternar dentro del h2 -->
          <button
            @click="toggleContent"
            class="p-button-text absolute right-2 top-1/2 transform -translate-y-1/2"
            aria-label="Toggle Content"
          >
            <i class="pi pi-chevron-down"></i> <!-- Ícono de PrimeVue -->
          </button>
        </h2>
      </div>
    </div>

    <div
      id="content"
      :class="{'hidden': isContentHidden, 'block': !isContentHidden}"
      class="flex justify-between gap-4"
    >
      <div
        class="education-item flex-1 p-6 bg-blue-50 shadow-lg rounded-lg border border-blue-300 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <h3 class="text-xl font-bold mb-2 text-blue-600">
          Desarrollador Frontend
        </h3>
        <p class="text-lg">
          <strong>Empresa:</strong> Ministerio Público Fiscal
        </p>
        <p class="text-lg">
          <strong>Duración:</strong> Abril de 2022 - Actualidad
        </p>
        <p class="text-lg">
          <strong>Descripción:</strong> Migración de un sistema sin Frontend a
          uno con Vue 3.
        </p>
      </div>
      <div
        class="education-item flex-1 p-6 bg-blue-50 shadow-lg rounded-lg border border-blue-300 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <h3 class="text-xl font-bold mb-2 text-blue-600">Analista Funcional</h3>
        <p class="text-lg"><strong>Empresa:</strong> Uxor IT</p>
        <p class="text-lg">
          <strong>Duración:</strong> Julio de 2021 - Abril de 2022
        </p>
        <p class="text-lg">
          <strong>Descripción:</strong> Análisis, documentación, relevamientos
          de nuevos requisitos para la aplicación y mantenimiento del mismo.
        </p>
      </div>
      <div
        class="education-item flex-1 p-6 bg-blue-50 shadow-lg rounded-lg border border-blue-300 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <h3 class="text-xl font-bold mb-2 text-blue-600">Analista QA</h3>
        <p class="text-lg"><strong>Empresa:</strong> Nahual IT</p>
        <p class="text-lg">
          <strong>Duración:</strong> Mayo de 2018 - Julio de 2021
        </p>
        <p class="text-lg">
          <strong>Descripción:</strong> Testing funcional, testing de
          accesibilidad web y móvil tanto para Android como iOS y testing
          automatizado.
        </p>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "ExperienciaMia",

  data() {
    return {
      isContentHidden: false,
    };
  },

  methods: {
    toggleContent() {
      this.isContentHidden = !this.isContentHidden;
    },
  },
};
</script>


<style scoped>
.header {
  display: flex;
  justify-content: center; /* Centra el contenido horizontalmente */
  width: 100%;
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
}

h2 {
  position: relative; /* Para posicionar el botón dentro del h2 */
  width: auto; /* Deja que el h2 se ajuste al contenido */
  padding-right: 3rem; /* Espacio para el botón */
}

.p-button-text {
  background-color: #f0f4f8;
  border: 2px solid #e0e7ff;
  border-radius: 50%;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0.5rem;
  font-size: 1.5rem; /* Tamaño del icono más grande */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007bff; /* Color del ícono */
}

.p-button-text:hover {
  background-color: #e0e7ff;
  border-color: #cbd5e1;
}

.p-button-text .pi {
  font-size: 1.5rem; /* Tamaño del ícono */
}
</style>

