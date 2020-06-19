<template>
  <div class="field">
    <label for="inputText" class="label is-size-4">{{ label }}</label>
    <div class="control">
      <input
        v-model="inputText"
        @keydown.enter="storeInputName"
        class="input"
        type="text"
        placeholder="A name bro"
      />
    </div>
    <p>Raw debug: {{ participants }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type UserInputState = {
  inputText: string
  participants: Array<string>
}

export default Vue.extend({
  props: {
    label: {
      type: String,
      default: `Hello yo 👋, Write the participant's names:`,
    },
  },
  data(): UserInputState {
    return {
      inputText: '',
      participants: [],
    }
  },
  methods: {
    storeInputName(): void {
      this.participants.push(this.inputText)
      this.inputText = ''
      this.$emit('handleList', this.participants)
    },
  },
})
</script>
