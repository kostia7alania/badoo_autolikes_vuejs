<template>
  <div class="vue-container"
    :style="{
      'position': 'absolute',
      'z-index': 99999999999999999999,
      'border-radius': '5px',
      'box-shadow': '0 0 10px rgba(0,0,0,0.5)',
      'bottom': 0,
      'display':'flex',
      'align-items': 'flex-end',
      'width': '100%',
      'text-align': 'center',
      'justify-content': 'center'
    }"
  >
  <!--
  <div>
      <button
      :style="{ 'color': active=='Actions'?'red':''}"
      @click="push_rout('Actions')">Actions</button>
    <button
      :style="{ 'color': active=='Status'?'red':''}"
      @click="push_rout('Status')">Status</button>
  </div>
  -->
    <transition name="bounce">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'Actions',
    };
  },
  mounted() {
    window.e = this;
  },
  watch: {
    $router(to, from) {
      console.log(to, from);
    },
  },
  methods: {
    push_rout(name) {
      this.$router.push({ name });
      this.active = name;
    },
  },
};
</script>

<style >
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
