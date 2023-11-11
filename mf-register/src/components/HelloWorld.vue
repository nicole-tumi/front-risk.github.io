<template>
  <div id="app" class="container mt-5">
    <div class="custom-card">
      <div class="card-header">
        <h2 class="text-center">Registrarse</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="crearUsuario">
          <div class="mb-3">
            <label for="usuario" class="form-label">Usuario:</label>
            <input
              v-model="usuario"
              type="text"
              class="form-control"
              id="usuario"
              required
            />
          </div>
          <div class="mb-3">
            <label for="pass" class="form-label">Contraseña:</label>
            <input
              v-model="pass"
              type="password"
              class="form-control"
              id="pass"
              required
            />
          </div>
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre:</label>
            <input
              v-model="nombre"
              type="text"
              class="form-control"
              id="nombre"
              required
            />
          </div>
          <div class="mb-3">
            <label for="correo" class="form-label">Correo:</label>
            <input
              v-model="correo"
              type="email"
              class="form-control"
              id="correo"
              required
            />
          </div>
          <button type="submit" class="btn btn-dark">Crear Usuario</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      pass: "",
      nombre: "",
      correo: "",
      error: null, // Para manejar errores
      loading: false, // Para mostrar una animación de carga
    };
  },
  methods: {
    async crearUsuario() {
      // Limpiar errores previos y marcar que la solicitud está en curso
      this.error = null;
      this.loading = true;

      try {
        const response = await fetch(
          "https://fv6cf6nkt8.execute-api.us-east-1.amazonaws.com/dev/usuario-crear",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Usuario: this.usuario,
              Pass: this.pass,
              Nombre: this.nombre,
              Correo: this.correo,
            }),
          }
        );

        if (!response.ok) {
          // Manejar respuestas no exitosas (fuera del rango 200)
          throw new Error(`Respuesta no exitosa: ${response.status}`);
        }

        const data = await response.json();
        console.log("Respuesta del servidor:", data);
      } catch (error) {
        this.error = error.message;
        console.error("Error al crear el usuario:", error);
      } finally {
        this.loading = false; // Marcar que la solicitud ha terminado
      }
    },
  },
};
</script>

<style>
.custom-card {
  border: 1px solid #000; /* Línea negra alrededor de la tarjeta */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  max-width: 400px; /* Ancho máximo de la tarjeta */
  margin: auto; /* Centrar la tarjeta en el contenedor */
  padding: 20px; /* Espaciado interno */
}

.custom-card .card-header {
  background-color: #343a40; /* Color de fondo del encabezado */
  color: #fff; /* Color del texto del encabezado */
  border-bottom: 1px solid #000; /* Línea negra en la parte inferior del encabezado */
  padding: 10px; /* Espaciado interno del encabezado */
}

.custom-card .card-body {
  padding: 20px 0; /* Espaciado interno del cuerpo */
}

.custom-card form {
  width: 100%; /* Ancho del formulario al 100% */
}

.custom-card label {
  display: block; /* Mostrar los labels como bloques para que estén encima de los inputs */
  margin-bottom: 8px; /* Espaciado entre los labels */
}
</style>
