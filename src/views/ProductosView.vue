<template>
  <section class="container" id="productos">
    <h1 class=" text-center">Nuestros Productos</h1>
    <div class="row">
      <!-- primera -->
      <div class="col-sm-4 col-12 px-5 mb-4">

        <div class="card">
          <img :src="imagen" class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{nombre}}</h5>
            <p class="card-text">{{descripcion}}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: ${{ precio }}</li>
            <li class="list-group-item">Cantidad: {{ cantidad }}</li>
          </ul>
          <div class="card-body">
            <router-link to="/contacto" class="card-link">Comprar</router-link>
            <router-link to="/" class="card-link">Volver...</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Productos',
  props: {
    nombre: String,
    descripcion: String,
    precio: Number,
    cantidad: String,
    imagen: String
  }
}
</script>

<style scoped>
.card {
  width: 18rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}
.card-img-top {
  width: 100%;
  height: auto;
}
.card-body {
  padding: 10px;
}
.card-title {
  font-size: 1.25rem;
  margin-bottom: 10px;
}
.card-text {
  margin-bottom: 10px;
}
.card-link {
  color: #007bff;
  text-decoration: none;
}
.card-link:hover {
  text-decoration: underline;
}
</style>
