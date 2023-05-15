<template>
  <v-app>
    <header>
      <Navbar />
    </header>
    <v-main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/containers/Footer.vue'
import Navbar from './components/containers/Navbar.vue'
export default {
  name: 'App',
  components: {
    Footer,
    Navbar
  }
}
</script>
