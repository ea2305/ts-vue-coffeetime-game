<template>
  <div class="section">
    <div class="container">
      <figure class="image is-128x128">
        <img src="/coffee.svg" alt="Logo page" />
      </figure>
      <h1 class="title">Coffee time</h1>
      <h2 class="subtitle">Who will make the coffee today?</h2>
      <hr />
      <user-input @handleAdd="handleAdd" />
      <list-viewer :users="list" @handleDelete="handleDelete" />
      <hr />
      <roulette :users="list" @handleClear="handleClear" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserInput from '~/components/UserInput.vue'
import ListViewer from '~/components/ListViewer.vue'
import Roulette from '~/components/Roulette.vue'

type IndexState = {
  list: Array<string>
}

export default Vue.extend({
  components: {
    UserInput,
    ListViewer,
    Roulette,
  },
  data(): IndexState {
    return {
      list: [],
    }
  },
  methods: {
    handleAdd(element: string): void {
      this.list.push(element)
    },
    handleDelete(index: number): void {
      this.list.splice(index, 1)
    },
    handleClear(): void {
      this.list = []
    },
  },
})
</script>

<style></style>
