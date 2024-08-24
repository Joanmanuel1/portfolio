<template>
  <section
    id="educacion"
    class="education my-12 p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500"
  >
    <div class="header flex items-center w-full mb-6">
      <!-- Contenedor para el h2 y el botón -->
      <div class="header-content flex items-center w-full relative">
        <h2
          class="text-2xl sm:text-3xl font-extrabold mb-4 pb-3 border-4 border-blue-500 rounded-lg bg-blue-50 shadow-md text-blue-600 flex-1 text-center relative"
          style="margin-top: 0"
        >
          Educación
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
      class="grid grid-cols-1 sm:grid-cols-2 gap-8"
    >
      <!-- Primer ítem de educación -->
      <div
        class="education-item p-6 bg-blue-50 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <h3 class="text-xl font-bold mb-2 text-blue-600">
          Universidad Nacional de La Matanza
        </h3>
        <p class="text-lg">
          <strong class="font-semibold">Título:</strong> Licenciado en Gestión
          de la Tecnología
        </p>
      </div>

      <!-- Segundo ítem de educación -->
      <div
        class="education-item p-6 bg-blue-50 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <h3 class="text-xl font-bold mb-2 text-blue-600">
          Instituto de Formación Técnica Superior N° 11
        </h3>
        <p class="text-lg">
          <strong class="font-semibold">Título:</strong> Analista de Sistemas
        </p>
      </div>

      <!-- Añade más ítems de educación aquí -->
    </div>
  </section>
</template>

<script>
export default {
  name: "EducacionMia",

  data() {
    return {
      isContentHidden: false, // Inicialmente oculto
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
