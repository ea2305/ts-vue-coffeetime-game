<template>
  <div>
    <div class="hero">
      <div class="hero-body">
        <h3
          class="is-size-3 has-text-centered has-text-weight-bold is-capitalized has-text-success"
        >
          {{ winner }}
        </h3>
      </div>
    </div>
    <hr />
    <button
      class="button is-info is-fullwidth"
      :disabled="readyToPlay || locked"
      @click.prevent="play"
    >
      Play 🎲
    </button>
    <br />
    <button
      class="button is-gray is-fullwidth"
      :disabled="readyToPlay || locked"
      @click.prevent="clear"
    >
      Clean list 🧹
    </button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
const timer: number = 3

type RouletteState = {
  winner: string
  locked: boolean
}

export default Vue.extend({
  props: {
    users: {
      type: Array as PropType<Array<string>>,
      default: [],
    },
  },
  data(): RouletteState {
    return {
      winner: '',
      locked: false,
    }
  },
  computed: {
    readyToPlay(): boolean {
      return this.users.length < 2
    },
  },
  methods: {
    getResult(): Promise<number> {
      return new Promise<number>((resolve) => {
        setTimeout(() => {
          const winnerIndex = Math.round(
            Math.random() * (this.users.length - 1) + 0
          )
          resolve(winnerIndex)
        }, timer * 1000)
      })
    },
    async play(): Promise<number> {
      let count = timer
      let winnerIndex = 0
      this.locked = true
      this.winner = `${count--}`
      const localInterval = setInterval(() => {
        this.winner = `${count--}`
      }, 999)

      try {
        winnerIndex = await this.getResult()
        this.winner = this.users[winnerIndex]
      } catch (error) {
        this.winner = 'Woooops something went wrong :('
      } finally {
        clearInterval(localInterval)
        this.locked = false
      }
      return winnerIndex
    },
    clear(): void {
      this.winner = ''
      this.$emit('handleClear')
    },
  },
})
</script>
