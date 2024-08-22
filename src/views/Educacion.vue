<template>
  <section
    id="educacion"
    class="education my-12 p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500"
  >
    <h2
      class="text-3xl font-extrabold mb-6 border-b-4 border-blue-500 pb-3 text-gray-800"
    >
      Educación
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
  name: "EducacionMia", // Nombre del componente, puede ser usado para referencia

  mounted() {},
};
</script>

<style></style>
