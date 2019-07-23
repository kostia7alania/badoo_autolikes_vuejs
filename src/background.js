import store from './store';

//alert(`Hello ${store.getters.foo}!`);
//alert(`Hello ${store.state.likes}!`);
console.log('hi frm background.js', chrome);
console.warn(chrome.commands);
//alert(JSON.stringify(window))

function handleShown() {
  console.log('panel is being shown');
}

function handleHidden() {
  console.log('panel is being hidden');
}

var openCount = 0;
chrome.runtime.onConnect.addListener(function(port) {
  if (port.name == 'devtools-page') {
    if (openCount == 0) {
      alert('DevTools window opening.');
    }
    openCount++;

    port.onDisconnect.addListener(function(port) {
      openCount--;
      if (openCount == 0) {
        alert('Last DevTools window closing.');
      }
    });
  }
});

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});
