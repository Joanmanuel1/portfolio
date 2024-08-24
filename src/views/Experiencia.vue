<template>
  <section
    id="experiencia"
    class="experiencia my-12 p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500"
  >
    <div class="header flex items-center w-full mb-6">
      <div class="header-content flex items-center w-full relative">
        <h2
          class="text-2xl sm:text-3xl font-extrabold mb-4 pb-3 border-4 border-blue-500 rounded-lg bg-blue-50 shadow-md text-blue-600 flex-1 text-center relative"
          style="margin-top: 0"
        >
          Experiencia
          <Button
            icon="pi pi-chevron-down"
            @click="toggleContent"
            class="p-button-text absolute right-2 top-1/2 transform -translate-y-1/2"
            aria-label="Toggle Content"
          />
        </h2>
      </div>
    </div>

    <div
      id="content"
      :class="{'hidden': isContentHidden, 'block': !isContentHidden}"
      class="flex flex-col md:flex-row md:justify-between gap-4"
    >
      <div
        class="education-item p-6 bg-blue-50 shadow-lg rounded-lg border border-blue-300 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
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
        class="education-item p-6 bg-blue-50 shadow-lg rounded-lg border border-blue-300 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
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
        class="education-item p-6 bg-blue-50 shadow-lg rounded-lg border border-blue-300 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
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

</style>
