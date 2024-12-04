<template>
  <div class="contact-container">
    <h1>Contacto</h1>
    <p>Si tienes alguna pregunta, no dudes en enviarnos un mensaje usando el formulario a continuación.</p>
    
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>

    <router-link to="/" class="back-link">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
  name: 'Contacto',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Aquí puedes agregar la lógica para enviar el formulario, como una solicitud HTTP.
      console.log('Formulario enviado:', this.form)
      // Reiniciar el formulario
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
      alert('Tu mensaje ha sido enviado con éxito.')
    }
  }
}
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

p {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: block;
  width: 50%; /* Reducir el ancho del botón */
  padding: 10px;
  margin: 0 auto; /* Centrar el botón horizontalmente */
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 12px; /* Redondear más las esquinas */
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.back-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #17a2b8;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
