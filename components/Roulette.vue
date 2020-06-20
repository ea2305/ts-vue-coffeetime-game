<template>
  <div>
    <h3
      class="is-size-3 has-text-centered has-text-weight-bold is-capitalized has-text-success"
    >
      {{ winner }}
    </h3>
    <br />
    <button
      v-if="emptyWinner && !locked"
      class="button is-small is-danger is-fullwidth is-light"
      @click.prevent="deleteItem"
    >
      Remove name 👩‍💻
    </button>
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
  winnerId: number
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
      winnerId: 0,
      locked: false,
    }
  },
  computed: {
    readyToPlay(): boolean {
      return this.users.length < 2
    },
    emptyWinner(): boolean {
      return this.winner !== ''
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
      this.locked = true
      this.winner = `${count--}`
      const localInterval = setInterval(() => {
        this.winner = `${count--}`
      }, 999)

      try {
        this.winnerId = await this.getResult()
        this.winner = this.users[this.winnerId]
      } catch (error) {
        this.winner = 'Woooops something went wrong :('
      } finally {
        clearInterval(localInterval)
        this.locked = false
      }
      return this.winnerId
    },
    clear(): void {
      this.winner = ''
      this.$emit('handleClear')
    },
    deleteItem(): void {
      this.$emit('handleDelete', this.winnerId)
      this.winner = ''
      this.winnerId = 0
    },
  },
})
</script>
