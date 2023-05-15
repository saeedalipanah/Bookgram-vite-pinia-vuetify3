<template>
  <v-container class="h-100">
    <v-row class="h-100" justify="center" align="center">
      <v-col cols="12" sm="6" md="5">
        <v-img :src="certainBook.coverImage" max-height="400px"></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="5">
        <h1>{{ certainBook.name }}</h1>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col><h4>Author</h4></v-col>
            <v-col
              ><h4 class="font-weight-light">{{ certainBook.author }}</h4></v-col
            >
          </v-row>
          <v-row>
            <v-col><h4>ISBN</h4></v-col>
            <v-col
              ><h4 class="font-weight-light">{{ certainBook.isbn }}</h4></v-col
            >
          </v-row>
          <v-row>
            <v-col><h4>Gener</h4></v-col>
            <v-col
              ><h4 class="font-weight-light">{{ certainBook.gener }}</h4></v-col
            >
          </v-row>
          <v-row>
            <v-col><h4>Nubmer of pages</h4></v-col>
            <v-col
              ><h4 class="font-weight-light">{{ certainBook.pageNumber }}</h4></v-col
            >
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'pinia'
import { useBooksStore } from '../../stores/books'
export default {
  data: () => ({}),
  computed: {
    ...mapState(useBooksStore, ['books']),
    certainBook() {
      return this.books.find((element) => element.id == this.$route.params.id)
    }
  }
}
</script>

<style></style>
