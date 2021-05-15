<template>
  <div class="card card-body m-4">
    <h3>Options API + Vuex</h3>
    <h5 class="text-center">{{ counter }} x 2 = {{ times2 }}</h5>
    <button class="btn btn-primary" @click="inc">Increment</button>
  </div>
</template>

<script>

export default {
  computed: {
    counter() {
      return this.$store.state.counter
    },
    times2() {
      return this.$store.getters.times2
    }
  },
  methods: {
    inc() {
      this.$store.commit('setCounter', this.counter + 1)
    }
  }
}
</script>
