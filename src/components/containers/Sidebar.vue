<template>
  <v-navigation-drawer
    v-model="drawer"
    class="py-5"
  >
    

    <v-img
      src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/280229742/original/dfa2d1d3e52b1168a02b8b1e791717577b436bc8/draw-minimalist-flat-line-vector-avatar-of-you-within-24h.jpg"
      width="80%"
      aspect-ratio="1"
      class="profile mx-auto"
      cover
    ></v-img>

    <v-list density="compact" nav class="sidebar-list">
      <v-list-item
        prepend-icon="mdi-book-open-page-variant"
        title="Books"
        value="books"
        class="sidebar-list-item"
        @click="GoToNavigation('home')"
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group"
        title="Authors"
        value="authors"
        class="sidebar-list-item"
        @click="GoToNavigation('authors')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['outterDrawer'],
  data: () => ({
    drawer: true,
  }),
  watch: {
    outterDrawer(value) {
      this.drawer = value
    },
    drawer(val){
      this.$emit('drawerModified',val)
    }
  },
  methods: {
    GoToNavigation(routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>
