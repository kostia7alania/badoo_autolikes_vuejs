<template>
  <div>
    <router-view></router-view>
    <p>app=> {{app}}</p>
    <button @click="app++">app++</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      app:1
    };
  },
};
</script>
