<template>
  <section
    id="habilidades"
    class="education my-12 p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500"
  >
  <h2
      class="text-3xl font-extrabold mb-6 pb-3 border-4 border-blue-500 rounded-lg bg-blue-50 text-center shadow-md text-blue-600"
    style="margin-top: 0;">
      Habilidades
    </h2>
    <div class="skills-rotating p-6 bg-blue-50 shadow-lg rounded-lg">
      <!-- Contenedor para rotación en 3D -->
      <div class="skills-wrapper">
        <!-- Comunicación Efectiva -->
        <div class="skill-card">
          <div class="skill-inner">
            <div
              class="skill-front bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-comments fa-4x"></i>
            </div>
            <div
              class="skill-back bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <h3 class="skill-title">Comunicación Efectiva</h3>
            </div>
          </div>
        </div>
        <!-- Trabajo en Equipo -->
        <div class="skill-card">
          <div class="skill-inner">
            <div
              class="skill-front bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-users fa-4x"></i>
            </div>
            <div
              class="skill-back bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <h3 class="skill-title">Trabajo en Equipo</h3>
            </div>
          </div>
        </div>
        <!-- Resolución de Problemas -->
        <div class="skill-card">
          <div class="skill-inner">
            <div
              class="skill-front bg-gradient-to-r from-red-500 to-red-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-tools fa-4x"></i>
            </div>
            <div
              class="skill-back bg-gradient-to-r from-red-500 to-red-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <h3 class="skill-title">Resolución de Problemas</h3>
            </div>
          </div>
        </div>
        <!-- Adaptabilidad -->
        <div class="skill-card">
          <div class="skill-inner">
            <div
              class="skill-front bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-sync-alt fa-4x"></i>
            </div>
            <div
              class="skill-back bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <h3 class="skill-title">Adaptabilidad</h3>
            </div>
          </div>
        </div>
        <!-- Gestión del Tiempo -->
        <div class="skill-card">
          <div class="skill-inner">
            <div
              class="skill-front bg-gradient-to-r from-purple-500 to-purple-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-clock fa-4x"></i>
            </div>
            <div
              class="skill-back bg-gradient-to-r from-purple-500 to-purple-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <h3 class="skill-title">Gestión del Tiempo</h3>
            </div>
          </div>
        </div>
        <!-- Atención al Detalle -->
        <div class="skill-card">
          <div class="skill-inner">
            <div
              class="skill-front bg-gradient-to-r from-teal-500 to-teal-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-search fa-4x"></i>
            </div>
            <div
              class="skill-back bg-gradient-to-r from-teal-500 to-teal-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <h3 class="skill-title">Atención al Detalle</h3>
            </div>
          </div>
        </div>
        <!-- Pensamiento Crítico -->
        <div class="skill-card">
          <div class="skill-inner">
            <div
              class="skill-front bg-gradient-to-r from-gray-500 to-gray-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-brain fa-4x"></i>
            </div>
            <div
              class="skill-back bg-gradient-to-r from-gray-500 to-gray-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <h3 class="skill-title">Pensamiento Crítico</h3>
            </div>
          </div>
        </div>
        <!-- Creatividad -->
        <div class="skill-card">
          <div class="skill-inner">
            <div
              class="skill-front bg-gradient-to-r from-orange-500 to-orange-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-lightbulb fa-4x"></i>
            </div>
            <div
              class="skill-back bg-gradient-to-r from-orange-500 to-orange-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <h3 class="skill-title">Creatividad</h3>
            </div>
          </div>
        </div>
        <!-- Empatía -->
        <div class="skill-card">
          <div class="skill-inner">
            <div
              class="skill-front bg-gradient-to-r from-pink-500 to-pink-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-heart fa-4x"></i>
            </div>
            <div
              class="skill-back bg-gradient-to-r from-pink-500 to-pink-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <h3 class="skill-title">Empatía</h3>
            </div>
          </div>
        </div>
        <!-- Aprendizaje Continuo -->
        <div class="skill-card">
          <div class="skill-inner">
            <div
              class="skill-front bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <i class="fas fa-book fa-4x"></i>
            </div>
            <div
              class="skill-back bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-4 rounded-lg flex items-center justify-center"
            >
              <h3 class="skill-title">Aprendizaje Continuo</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HabilidadesMia", // Nombre del componente, puede ser usado para referencia

  mounted() {
    document.querySelectorAll(".skill-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const { offsetWidth: width, offsetHeight: height } = card;
        const { offsetX: x, offsetY: y } = e;
        const moveX = (x / width) * 30 - 15;
        const moveY = (y / height) * 30 - 15;

        card.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `rotateY(0) rotateX(0)`;
      });
    });
  },
};
</script>
<style>
.skills-container {
  perspective: 1000px; /* Añade perspectiva para el efecto 3D */
}

.skills-rotating {
  position: relative;
  width: 100%;
  height: 200px; /* Ajusta la altura según sea necesario */
  overflow: hidden;
}

.skills-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  animation: rotate 20s linear infinite;
  transform-style: preserve-3d; /* Asegura que los elementos se mantengan en 3D */
}

.skill-card {
  flex: 0 0 auto;
  width: 150px; /* Ajusta el tamaño según sea necesario */
  height: 150px;
  margin: 0 10px; /* Ajusta el espacio entre tarjetas */
  transform: rotateY(
    calc(360deg / 8)
  ); /* Ajusta el ángulo de rotación según el número de tarjetas */
  transform-style: preserve-3d; /* Asegura que la rotación se mantenga en 3D */
}

.skill-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; /* Asegura que la rotación se mantenga en 3D */
  transition: transform 0.6s;
}

.skill-card:hover .skill-inner {
  transform: rotateY(180deg);
}

.skill-front,
.skill-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Oculta la parte trasera cuando está en su estado no girado */
  border-radius: 10px;
}

.skill-front {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(
    0deg
  ); /* Mantiene la parte frontal en su posición normal */
}

.skill-back {
  transform: rotateY(
    180deg
  ); /* Mantiene la parte trasera en la posición correcta cuando está girada */
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
