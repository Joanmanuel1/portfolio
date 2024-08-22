<template>
  <div class="home bg-gray-100 min-h-screen p-8">
    <nav
      class="navbar bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg fixed w-full top-0 left-0 z-50"
    >
      <div class="container mx-auto flex justify-between items-center p-4">
        <a
          href="#acerca"
          class="flex items-center text-white text-xl font-semibold space-x-2 hover:text-gray-200 transition duration-300"
        >
          <i class="fas fa-user"></i>
          <span>Acerca de mí</span>
        </a>
        <a
          href="#experiencia"
          class="flex items-center text-white text-xl font-semibold space-x-2 hover:text-gray-200 transition duration-300"
        >
          <i class="fas fa-briefcase"></i>
          <span>Experiencia</span>
        </a>
        <a
          href="#educacion"
          class="flex items-center text-white text-xl font-semibold space-x-2 hover:text-gray-200 transition duration-300"
        >
          <i class="fas fa-graduation-cap"></i>
          <span>Educación</span>
        </a>
        <a
          href="#tecnologia"
          class="flex items-center text-white text-xl font-semibold space-x-2 hover:text-gray-200 transition duration-300"
        >
          <i class="fas fa-laptop-code"></i>
          <span>Tecnología</span>
        </a>
        <a
          href="#habilidades"
          class="flex items-center text-white text-xl font-semibold space-x-2 hover:text-gray-200 transition duration-300"
        >
          <i class="fas fa-lightbulb"></i>
          <span>Habilidades</span>
        </a>
        <a
          href="#proyectos"
          class="flex items-center text-white text-xl font-semibold space-x-2 hover:text-gray-200 transition duration-300"
        >
          <i class="fas fa-project-diagram"></i>
          <span>Proyectos</span>
        </a>
      </div>
    </nav>

    <AcercaDeMi />
    <ExperienciaMia />
    <EducacionMia />
    <TecnologiaMia />
    <HabilidadesMia />
    <ProyectosMIo />
  </div>
</template>

<script>
import AcercaDeMi from "./Acerca.vue";
import ExperienciaMia from "./Experiencia.vue";
import HabilidadesMia from "./Habilidades.vue";
import EducacionMia from "./Educacion.vue";
import ProyectosMIo from "./Proyectos.vue";
import TecnologiaMia from "./Tecnologias.vue";

export default {
  name: "HomePage",
  components: {
    AcercaDeMi,
    ExperienciaMia,
    HabilidadesMia,
    EducacionMia,
    ProyectosMIo,
    TecnologiaMia,
  },

  mounted() {},
};
</script>

<style scoped></style>
