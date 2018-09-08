<template>
        <div class="container" id="app">
           <p>Лайков поставлено:<span> {{likes}}</span></p>
                <button class="btn btn-xs btn-danger start" onclick="start()">Start</button>
                <button class="btn btn-xs btn-success Stop" onclick="stop()">Stop</button> 
        </div>
</template>

<script>
 
export default {
  data() {
    return {
      likes: 0
    }
  },
  mounted(){
    console.log('mounted pages===')
  }
};
 
    function start(){
        console.log('start')
        window.a = window.setInterval(e=>window.document.querySelectorAll('.profile-action--yes')[0].click(),1000);
    }
    function stop(){
        console.log('stop')
        clearInterval(window.a);
    }
    console.log('console.log(this)',this) 

</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
