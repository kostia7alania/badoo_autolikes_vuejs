<template>
        <div class="container" id="app">
          <h2>Page: 1</h2>
           <p>Лайков поставлено:<span> {{likes}}</span></p>
           <button @click="LIKE_INC">++</button>
           <button @click="LIKE_DEC">--</button>
           <button @click="timeout">timeout</button>
            <button class="btn btn-xs btn-danger start" @click="start()">Start</button>
            <button class="btn btn-xs btn-success Stop" @click="stop()">Stop</button>
        </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
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
    timeout() {
      setInterval(() => this.LIKE_INC(), 1000);
    },
    LIKE_INC() {
      this.$store.commit('LIKE_INC');
    },
    LIKE_DEC() {
      this.$store.commit('LIKE_DEC');
    },
    start() {
      chrome.tabs.create({ url: 'https://badoo.com/encounters?start' });
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
