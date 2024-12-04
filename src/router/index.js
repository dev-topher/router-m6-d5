import { createRouter, createWebHistory } from 'vue-router'

// Importa las vistas
const Home = () => import('@/views/HomeView.vue')
const Productos = () => import('@/views/ProductosView.vue')
const Contacto = () => import('@/views/ContactoView.vue')

const routes = [
  { path: '/', component: Home },
  { 
    path: '/productos', 
    component: Productos, 
    props: {
      nombre: 'Desayunos',
      descripcion: 'Contamos con desayunos nutritivos y deliciosos',
      precio: 2000,
      cantidad: 'Para dos personas',
      imagen: require('@/assets/img/desayunos.jpg') // Asegúrate de tener la ruta correcta de la imagen
    } 
  },
  { path: '/contacto', component: Contacto }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
