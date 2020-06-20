<template>
  <div class="field">
    <label for="inputText" class="label is-size-4">{{ label }}</label>
    <div class="control">
      <input
        id="inputText"
        v-model="inputText"
        class="input"
        type="text"
        placeholder="Press enter to add bro "
        @keydown.enter="storeInputName"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type UserInputState = {
  inputText: string
}

export default Vue.extend({
  props: {
    label: {
      type: String,
      default: `Hello 👋, Write the participant's names, and click play!`,
    },
  },
  data(): UserInputState {
    return {
      inputText: '',
    }
  },
  methods: {
    storeInputName(): void {
      this.$emit('handleAdd', this.inputText)
      this.inputText = ''
    },
  },
})
</script>
