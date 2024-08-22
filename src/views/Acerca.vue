<template>
  <section
    id="acerca"
    class="personal-info my-12 p-8 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500"
  >
    <div class="header flex items-center justify-between mb-6">
      <h2
        class="text-3xl font-extrabold mb-6 border-b-4 border-blue-500 pb-3 text-gray-800"
      >
        Acerca de mí
      </h2>
      <!-- Botón para contraer/expandir -->
      <button
        id="toggleButton"
        class="flex items-center text-blue-600 font-semibold transition-transform transform hover:scale-110 focus:outline-none"
      >
        <span id="buttonText" class="mr-2">Contraer</span>
        <svg
          id="toggleIcon"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition-transform transform rotate-0 duration-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 00-.707 1.707l5 5a1 1 0 001.414-1.414l-5-5A1 1 0 0010 3zM10 17a1 1 0 00.707-1.707l-5-5a1 1 0 00-1.414 1.414l5 5A1 1 0 0010 17z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      id="content"
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
                  href="https://tailwindcss.com/"
                  target="_blank"
                  class="text-blue-600 hover:underline"
                  >Tailwind CSS</a
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
      <!-- Contenedor de foto -->
      <div class="photo-container w-1/4 flex justify-center items-center">
        <img
          src="../assets/IMG-20240624-WA0098.jpg"
          alt="Foto de presentación"
          class="profile-photo w-3/4 h-auto object-cover rounded-full transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          style="outline: 4px solid #3b82f6; outline-offset: 4px"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilo para el botón */
#toggleButton {
  background-color: #f0f4f8; /* Color de fondo moderno */
  border: 2px solid #d1d5db; /* Borde sutil */
  border-radius: 8px; /* Bordes redondeados */
  padding: 8px 12px; /* Espaciado interno */
  display: flex;
  align-items: center;
  transition: background-color 0.3s, transform 0.3s;
}

#toggleButton:hover {
  background-color: #e2e8f0; /* Color de fondo al pasar el cursor */
  transform: scale(1.1); /* Efecto de escalado */
}

#toggleButton svg {
  margin-left: 4px; /* Espacio entre el texto y el ícono */
}

#toggleIcon {
  transition: transform 0.3s; /* Transición para rotación */
}

#toggleIcon.rotate-90 {
  transform: rotate(90deg); /* Rotación del ícono */
}
.header {
  text-align: center;
}
.profile-photo-container {
  display: flex;
  justify-content: center; /* Centra la imagen horizontalmente */
  margin-top: 1rem;
}

.profile-photo {
  width: 300px; /* Ajusta el tamaño según sea necesario */
  height: 300px;
  border-radius: 50%; /* Redondeo para formato circular */
  object-fit: cover; /* Asegura que la imagen se recorte adecuadamente */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra sutil para profundidad */
  border: 3px solid #ddd; /* Borde sutil para un acabado elegante */
}
</style>

<script>
export default {
  name: "AcercaDeMi", // Nombre del componente, puede ser usado para referencia

  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      const toggleButton = document.getElementById("toggleButton");
      const content = document.getElementById("content");
      const buttonText = document.getElementById("buttonText");
      const toggleIcon = document.getElementById("toggleIcon");

      toggleButton.addEventListener("click", () => {
        if (content.classList.contains("hidden")) {
          content.classList.remove("hidden");
          buttonText.textContent = "Contraer";
          toggleIcon.classList.remove("rotate-90");
        } else {
          content.classList.add("hidden");
          buttonText.textContent = "Expandir";
          toggleIcon.classList.add("rotate-90");
        }
      });
    });
  },
};
</script>
