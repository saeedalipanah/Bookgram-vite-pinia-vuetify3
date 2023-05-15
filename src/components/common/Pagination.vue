<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-pagination
          v-model="page"
          active-color="#276d7f"
          elevation="2"
          border
          rounded="circle"
          class="my-4"
          :length="lastPage"
          :total-visible="5"
        ></v-pagination>
        <h4 class="text-center">{{ total }} Result(s)</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['lastPage', 'total'],
  data: () => ({
    page: 1
  }),
  watch: {
    page(val) {
      this.$emit('onPageChange', val)
    }
  }
}
</script>
