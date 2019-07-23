<template>
  <div class="container" id="status">
    <p>Лайков поставлено:<span> {{likes}}</span></p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log('mounted Status ');
  },
  computed: {
    likes() {
      return this.$store.state.likes;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
