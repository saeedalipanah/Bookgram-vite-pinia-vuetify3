<template>
  <div class="books">
    <Books />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

// Components
import Books from '@/components/home/books/Books.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Books
  }
})
</script>
