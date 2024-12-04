<template>
  <div>
    <h1>Inicio</h1>
    <Card />
  </div>
</template>

<script>
// @ es un alias para /src
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>
