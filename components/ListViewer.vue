<template>
  <div>
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th><abbr title="Index">N</abbr></th>
          <th><abbr title="Name">Name</abbr></th>
          <th><abbr title="Action">👀</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) of users" :key="`list-name-${index}`">
          <th>{{ index }}</th>
          <th>{{ user }}</th>
          <th @click="removeElement(index)">
            ❌
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    users: {
      type: Array as PropType<Array<string>>,
      default: [],
    },
  },
  methods: {
    removeElement(index: number): void {
      this.$emit('handleDelete', index)
    },
  },
})
</script>
