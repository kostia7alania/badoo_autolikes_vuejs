import Vue from 'vue';
import App from './App';
import store from '../store';
import router from './router';

/* eslint-disable no-new */

/*

window.count = 0;
window.started = false;

function start() {
  console.log('start');
  if (!started) {
    started = true;
    window.badooInterval = setInterval(e => {
      window.document.querySelectorAll('.profile-action--yes')[0].click()
      let limit = document.querySelectorAll('.ovl__content');
      if (!limit.length && eval(`limit[0].innerText.search("You're out of votes!") > -1`)) {
        console.log('усе! концерт окончен.!. приходите завтра,1,')
        clearInterval(window.badooInterval);
        console.log('Успели поставить лайков => ' + count);
      } else {
        window.createDiv();
        count++;
        console.log('Поставили лайков => ' + count);
      }

    }, 1000);
  }
}

function stop() {
  console.log('stop')
  clearInterval(window.badooInterval);
  started = false;
}
function mouseEnter(e) {
  e.target.style.background = 'red'
  e.target.style.border = "3px solid red"
}
function mouseLeave(e) {
  e.target.style.background = 'unset'
  e.target.style.border = "3px solid white"
}
*/
window.createDiv = () => {
  /*
   if (!document.querySelectorAll('.handler>span').length) {
       window.div = document.createElement('div');
       div.innerHTML = `
       <div class="handler" style="display:flex;justifyContent:'space-evenly'">
           <span style="padding:3px;border:'3px white solid';borderRadius:'30px'"
                onclick="start()"
                onmouseenter="mouseEnter()"
           >Start</span>
           <span style="padding:3px;border:'3px white solid';borderRadius:'30px'"
                onclick="stop()"
                onmouseenter="mouseEnter()"
           >Stop</span>
       </div>
       `

       const id = setInterval(e => {
           const el = document.querySelectorAll('.big-photo')
           if (el.length) {
               el[0].appendChild(div);
               clearInterval(id);
           }
       }, 2500);
   }*/

  const div = document.createElement('div');
  div.classList.add('vue-app');
  document.querySelector('body').appendChild(div);
  new Vue({
    el: '.vue-app',
    store,
    router,
    render: h => h(App),
    mounted() {
      console.warn('MOUNTEEEEEDDD>!>>!!');
    },
  });
};
window.onload = createDiv;
