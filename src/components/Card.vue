<template lang="">
  <!-- cartas -->
  <section class="container" id="productos">
    <h1 class=" text-center">Nuestros Productos</h1>
    <div class="row">
      <!-- primera -->
      <div class="col-sm-4 col-12 px-5 mb-4">

        <div class="card">
          <img src="../assets/img/colaciones.jpg" class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">Colaciones</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <router-link to="/productos" class="card-link">Ver más</router-link>
            <router-link to="/contacto" class="card-link">Comprar</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>