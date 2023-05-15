<template>
  <v-container>
    <v-table density="comfortable" hover>
      <template v-slot:top>
        <header class="v-table__header"><h1>Books list</h1></header>
        <v-row class="mb-2 px-3">
          <v-col cols="4" md="2" class="d-flex justify-center align-center"
            ><v-icon>mdi-filter</v-icon>
            <h3>Filter by</h3></v-col
          >
          <v-col cols="8" md="4">
            <v-text-field
              density="compact"
              variant="solo"
              label="Search books (name)"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              v-model.trim="enteredBook"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              density="compact"
              variant="solo"
              label="Search authors (name)"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              v-model.trim="enteredAuthor"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              density="compact"
              variant="solo"
              label="Search ISBN"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              v-model.trim="enteredIsbn"
            ></v-text-field>
          </v-col>
        </v-row>
      </template>
      <thead>
        <tr>
          <th class="text-center">Image</th>
          <th class="text-left">Name</th>
          <th class="text-left">Autor</th>
          <th class="text-left">ISBN</th>
          <th class="text-left">Gener</th>
          <th class="text-left">Pages</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in exsistingPageItems" :key="book.name" @click="showBookDetails(book)">
          <td><v-img :src="book.coverImage" :aspect-ratio="2 / 3" class="mx-auto my-1"></v-img></td>
          <td>{{ book.name }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.isbn }}</td>
          <td>{{ book.gener }}</td>
          <td>{{ book.pageNumber }}</td>
        </tr>
      </tbody>
      <template v-slot:bottom>
        <footer class="v-table__footer">
          <pagination
            :lastPage="lastPage"
            :total="books.length"
            @onPageChange="onPageChange"
          ></pagination>
        </footer>
      </template>
    </v-table>
  </v-container>
</template>

<script>
import { mapState } from 'pinia'
import { useBooksStore } from '../../../stores/books'
export default {
  data: () => ({
    exsistingPageItems: [],
    //paginations
    page: 1,
    total: 0,
    lastPage: 1,
    startIndex: 0,
    endIndex: 6,
    //filters
    enteredBook: '',
    enteredAuthor: '',
    enteredIsbn: null
  }),
  computed: {
    ...mapState(useBooksStore, ['books']),
    lastPage() {
      return Math.ceil(this.books.length / 6)
    },
    hasFilter() {
      return this.enteredAuthor || this.enteredBook || this.enteredIsbn
    }
  },
  watch: {
    enteredBook(val) {
      if (this.hasFilter) {
        this.exsistingPageItems = this.books.filter((element) =>
          element.name.toLowerCase().includes(val.toLowerCase())
        )
      } else this.onPageChange(this.page)
    },
    enteredAuthor(val) {
      if (this.hasFilter) {
        this.exsistingPageItems = this.books.filter((element) =>
          element.author.toLowerCase().includes(val.toLowerCase())
        )
      } else this.onPageChange(this.page)
    },
    enteredIsbn(val) {
      if (this.hasFilter) {
        this.exsistingPageItems = this.books.filter((element) => element.isbn.includes(val))
      } else this.onPageChange(this.page)
    }
  },
  created() {
    this.onPageChange(1)
  },
  methods: {
    onPageChange(page) {
      this.page = page
      this.startIndex = (page - 1) * 6
      this.endIndex = this.startIndex + 6
      this.exsistingPageItems = this.books.slice(this.startIndex, this.endIndex)
    },
    showBookDetails(book) {
      this.$router.push({ name: 'book', params: { id: book.id } })
    }
  }
}
</script>
