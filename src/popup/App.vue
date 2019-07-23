<template>
  <div>
    <router-view></router-view>
    <p>app=> {{app}}</p>
    <button @click="plus">app++111</button>
    <button @click="$router.push({name:'first'})">first</button>
    <button @click="$router.push({name:'second'})">second</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      app: 1,
    };
  },
  mounted() {
    function onCreated(tab) {
      console.log(`Created new tab: ${tab.id}`);
    }

    function onError(error) {
      console.log(`Error: ${error}`);
    }

    chrome.tabs
      .create({
        url: 'https://badoo.com/encounters?start',
        active: false,
      })
      .then(onCreated, onError);
  },
  methods: {
    plus() {
      this.app++;
    },
  },
};
</script>
