<template>
        <div class="container" id="actions">
            <span>Like clicked: {{likes}}</span>
            <button class="btn btn-xs btn-danger start"
              :disabled="intervalID"
              @click="start()">Start</button>
            <button class="btn btn-xs btn-success Stop"
              :disabled="!intervalID"
              @click="stop()">Stop</button>
            <button class="btn btn-xs btn-success refresh" @click="reset()">Reset</button>
            <input
              :disabled="intervalID"
              placeholder="timeout in msec"
              v-model.number="timeout"
              type="number"
              :style="{
                'background': 'rgba(54, 33, 33, 0.12)',
                'max-width': '60px',
              }"
            >
            <span>Closed popups: {{popups}}</span>
        </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      intervalID: null,
      timeout: 1000,
      popups: 0,
    };
  },
  mounted() {
    console.log('mounted Actions ');
  },
  computed: {
    likes() {
      return this.$store.state.likes;
    },
  },
  mounted() {
    if (333 < this.$store.state.timeout) this.timeout = this.$store.state.timeout;
    if (this.$store.state.popups) this.popups = this.$store.state.popups;
  },
  watch: {
    popups(neww, old) {
      this.$store.commit('SET_POPUPS', count);
    },
  },
  methods: {
    LIKE_INC() {
      this.$store.commit('LIKE_INC');
    },
    LIKE_DEC() {
      this.$store.commit('LIKE_DEC');
    },
    start() {
      let timeout = this.timeout;
      timeout = 333 < parseInt(timeout) ? timeout : 1000;
      this.timeout = timeout;
      this.$store.commit('SET_TIMEOUT', timeout);

      this.intervalID = setInterval(() => {
        const pop = document.querySelector('[data-qa-icon-name="navigation-bar-close"]');
        pop && pop.click() && this.popups++;

        const pcSelector = '.profile-action--yes';
        const mobSelector = '.profile-action>[data-qa-icon-name="floating-action-yes"]';
        const el = document.querySelectorAll(mobSelector);
        if (!el.length) console.log('нету лайка');
        else {
          el[1].click();
          this.LIKE_INC();
        }
      }, timeout);
    },
    stop() {
      clearInterval(this.intervalID);
      this.intervalID = false;
    },
    reset() {
      this.$store.commit('LIKE_NULL');
      this.$store.commit('SET_TIMEOUT', 1000);
      this.timeout = 1000;
      this.popups = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
.refresh {
  color: red;
  border: none;
}
</style>
