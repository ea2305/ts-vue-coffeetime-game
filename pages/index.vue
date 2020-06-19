<template>
  <div class="section">
    <div class="container">
      <p>logo here...</p>
      <h1 class="title">Coffe time</h1>
      <h2 class="subtitle">Who will make the coffee today?</h2>
      <hr />
      <user-input @handleList="handleList" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserInput from '~/components/UserInput.vue'

type IndexState = {
  list: Array<string>
}

export default Vue.extend({
  components: {
    UserInput,
  },
  methods: {
    handleList(list: Array<string>): void {
      console.log(list)
    },
  },
})
</script>

<style></style>
