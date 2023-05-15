<template>
  <v-container>
    <h1 class="text-center" style="color: #179baa">Authors list</h1>
    <!-- search bar -->
    <v-row
      ><v-col>
        <v-text-field
          density="compact"
          variant="solo"
          label="Search authors (name)"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          v-model.trim="enteredSearch"
        ></v-text-field> </v-col
    ></v-row>
    <!-- search bar -->
    <v-row style="min-height: 80vh">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(author, i) in exsistingPageItems"
        :key="i"
        class="col"
      >
        <v-card
          class="author-card text-center d-flex flex-column align-center py-8"
          @click="showAuthor(author)"
        >
          <v-img
            :src="author.coverImage"
            aspect-ratio="1"
            width="60%"
            cover
            class="avatar mx-auto my-1"
          ></v-img>

          <v-card-title class="py-2">{{ author.fullName }}</v-card-title>

          <v-card-actions>
            <v-icon left>mdi-linkedin</v-icon>
            <v-icon left class="mx-2">mdi-github</v-icon>
            <v-icon left>mdi-whatsapp</v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- pagination -->
    <pagination
      :lastPage="lastPage"
      :total="authors.length"
      @onPageChange="onPageChange"
    ></pagination>
    <!-- pagination -->
  </v-container>
</template>

<script>
import { mapState } from 'pinia'
import { useAuthorsStore } from '../../../stores/authors.js'
export default {
  data: () => ({
    exsistingPageItems: [],
    //paginations
    page: 1,
    total: 0,
    lastPage: 1,
    startIndex: 0,
    endIndex: 8,
    //search
    enteredSearch: ''
  }),
  computed: {
    ...mapState(useAuthorsStore, ['authors']),
    lastPage() {
      return Math.ceil(this.authors.length / 8)
    }
  },
  watch: {
    enteredSearch(val) {
      if (val) {
        this.exsistingPageItems = this.authors.filter((element) =>
          element.fullName.toLowerCase().includes(val.toLowerCase())
        )
      } else this.onPageChange(this.page)
    }
  },
  created() {
    this.onPageChange(1)
  },
  methods: {
    onPageChange(page) {
      this.page = page
      this.startIndex = (page - 1) * 8
      this.endIndex = this.startIndex + 8
      this.exsistingPageItems = this.authors.slice(this.startIndex, this.endIndex)
    },
    showAuthor(author) {
      this.$router.push({ name: 'author', params: { id: author.id } })
    }
  }
}
</script>
