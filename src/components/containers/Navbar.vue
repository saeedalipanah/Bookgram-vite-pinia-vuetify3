<template>
  <header>
    <v-app-bar color="teal-darken-4 px-4">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title class="text-h5">
        <span class="font-weight-bold">BOOK</span>
        <span class="font-weight-lighter" style="color: orange">GRAM</span>
      </v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn icon v-for="(icon, i) in icons" :key="i">
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- navigation drawer -->
    <Sidebar :outterDrawer="drawer" @drawerModified="drawerModified" />
    <!-- navigation drawer -->
  </header>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
  data: () => ({
    drawer: true,
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
  }),
  components: {
    Sidebar
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    drawerModified(drawer){
      this.drawer = drawer
    }
  }
}
</script>
