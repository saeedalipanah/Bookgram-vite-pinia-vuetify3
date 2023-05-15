<template>
  <v-container class="h-100">
    <v-row class="h-100 bg-white" justify="center" align="center">
      <v-col cols="12" sm="6" md="5">
        <v-img :src="certainAuthor.coverImage"></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="5">
        <h1>{{ certainAuthor.fullName }}</h1>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col><h4>Born in</h4></v-col>
            <v-col
              ><h4 class="font-weight-light">{{ certainAuthor.born }}</h4></v-col
            >
          </v-row>
          <v-row>
            <v-col><h4>Written books</h4></v-col>
            <v-col
              ><ul>
                <li
                  v-for="(book, i) in certainAuthor.writtenBooks"
                  :key="i"
                  class="font-weight-light"
                >
                  {{ book }}
                </li>
              </ul></v-col
            >
          </v-row>
          <v-row>
            <v-col><h4>Geners</h4></v-col>
            <v-col
              ><ul>
                <li v-for="(gener, i) in certainAuthor.geners" :key="i" class="font-weight-light">
                  {{ gener }}
                </li>
              </ul></v-col
            >
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'pinia'
import { useAuthorsStore } from '../../stores/authors'
export default {
  data: () => ({}),
  computed: {
    ...mapState(useAuthorsStore, ['authors']),
    certainAuthor() {
      return this.authors.find((element) => element.id == this.$route.params.id)
    }
  }
}
</script>

<style></style>
