<template>
        <div class="container" id="app">
            <h2>Page: 2</h2>
            <p>Лайков поставлено:<span> {{likes}}</span></p>
          </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log('mounted pages=== index ');
  },
  computed: {
    likes() {
      return this.$store.state.likes;
    },
  },
  methods: {
    start() {
      debugger;
      window.console.log('start');
      window.a = window.setInterval(e => window.document.querySelectorAll('.profile-action--yes')[0].click(), 1000);
    },
    stop() {
      console.log('stop');
      clearInterval(window.a);
    },
  },
};
console.log('console.log(this)', this);
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
