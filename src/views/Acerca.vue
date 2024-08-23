<template>
  <section
    id="acerca"
    class="personal-info my-12 p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500"
  >
  <div class="header flex items-center justify-between mb-6">
      <!-- Contenedor para el h2 y el botón -->
      <div class="header-content flex items-center w-full">
        <!-- Contenedor para el h2 -->
        <h2
          class="text-3xl font-extrabold mb-6 pb-3 border-4 border-blue-500 rounded-lg bg-blue-50 shadow-md text-blue-600 flex-1 text-center relative"
          style="margin-top: 0"
        >
          Acerca de mí
          <!-- Botón de alternar dentro del h2 -->
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
      :class="{ hidden: isContentHidden, block: !isContentHidden }"
      class="content flex transition-all duration-500 ease-in-out"
    >
      <!-- Contenedor de texto -->
      <div class="text-container w-3/4 pr-8">
        <div
          class="education-item flex-1 p-6 bg-blue-50 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <!-- Parte superior que cubre el 100% del ancho -->
          <div class="mb-8">
            <p class="text-lg mb-4 leading-relaxed">
              ¡Hola! 💻⚡ Soy
              <span class="font-bold text-blue-600">Joan Manuel Romero</span>,
              Analista de Sistemas y Licenciado en Gestión de Tecnología 🚀.
            </p>

            <p class="text-lg mb-4 leading-relaxed">
              Soy un profesional apasionado por el aprendizaje continuo y el
              desarrollo de soluciones innovadoras para los desafíos que se
              presentan. Me considero una persona proactiva, con una fuerte
              orientación hacia la comunicación, la responsabilidad y la
              constancia en mi trabajo.
            </p>

            <p class="text-lg mb-4 leading-relaxed">
              Actualmente, continúo formándome de manera autodidacta,
              enfocándome principalmente en desarrollo front-end. Puedes
              explorar mis proyectos en la sección de
              <a
                href="#proyectos"
                class="text-blue-600 hover:underline font-semibold"
              >
                Proyectos
              </a>
              💻.
            </p>
            <p class="text-lg mb-4 leading-relaxed">
              Este portfolio fue desarrollado utilizando
              <strong
                ><a
                  href="https://vuejs.org/"
                  target="_blank"
                  class="text-blue-600 hover:underline"
                  >Vue 3</a
                ></strong
              >
              con
              <strong
                ><a
                  href="https://www.javascript.com/"
                  target="_blank"
                  class="text-blue-600 hover:underline"
                  >JavaScript</a
                ></strong
              >
              y
              <strong
                ><a
                  href="https://v3.primevue.org/"
                  target="_blank"
                  class="text-blue-600 hover:underline"
                  >Primevue3</a
                ></strong
              >
              , demostrando mi habilidad en el desarrollo frontend moderno.
            </p>

            <div class="flex space-x-4 justify-center">
              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/in/joanmanuelromero"
                target="_blank"
                aria-label="LinkedIn"
                class="text-blue-700 transition transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.25 12.27h-3v-5.5c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.52-2.24 3.08v5.6h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.58v6.48z"
                  />
                </svg>
              </a>

              <!-- GitHub -->
              <a
                href="https://github.com/Joanmanuel1"
                target="_blank"
                aria-label="GitHub"
                class="text-gray-900 transition transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.931 0-1.31.467-2.382 1.235-3.221-.123-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.553 3.295-1.23 3.295-1.23.655 1.649.243 2.872.12 3.176.77.839 1.233 1.911 1.233 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.814 1.102.814 2.221 0 1.606-.014 2.899-.014 3.293 0 .322.216.694.825.576 4.765-1.587 8.198-6.084 8.198-11.385 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Contenedor de foto a la derecha del texto -->
      <div class="photo-container w-1/4 flex justify-center items-center">
        <img
          src="../assets/IMG-20240624-WA0098.jpg"
          alt="Profile Photo"
          class="profile-photo rounded-full border-4 border-blue-500 shadow-lg transition transform hover:scale-110"
          style="width: 350px; height: 350px; background-image: contain"
        />
      </div>
    </div>
  </section>
</template>

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
  width: auto; /* Deja que el h2 se ajuste al contenido */
  position: relative; /* Para posicionar el botón dentro del h2 */
  padding-right: 3rem; /* Espacio para el botón */
}

.p-button-text {
  background-color: #f0f4f8;
  border: 2px solid #e0e7ff;
  border-radius: 50%;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0.5rem;
  font-size: 1.25rem; /* Tamaño del icono más grande */
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-button-text:hover {
  background-color: #e0e7ff;
  border-color: #cbd5e1;
}

.p-button-text .pi {
  font-size: 1.25rem; /* Tamaño del icono */
}

.profile-photo {
  width: 150px;
  height: 150px;
}

.text-container {
  display: flex;
  flex-direction: column;
  width: 75%;
}

.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
}
</style>


<script setup>
import { ref } from "vue";
import Button from "primevue/button";

// Estado para manejar la visibilidad del contenido
const isContentHidden = ref(false);

// Función para alternar la visibilidad del contenido
function toggleContent() {
  isContentHidden.value = !isContentHidden.value;
}
</script>
