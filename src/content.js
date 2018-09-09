window.count = 0;
window.started = false;

function start() {
    console.log('start');
    if (!started) {
        started = true;
        window.badooInterval = setInterval(e => {
            window.document.querySelectorAll('.profile-action--yes')[0].click()
            let limit = document.querySelectorAll('.ovl__content');
            if (limit.length > 0 && eval(`limit[0].innerText.search("You're out of votes!") > -1`)) {
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

window.createDiv = () => {
    if (document.querySelectorAll('.handler>span').length == 0) {

        var div = document.createElement('div')
        div.classList.add('handler')
        div.style.display = 'flex';
        div.style.justifyContent = 'space-evenly';
        var map = ['start', 'stop'].map(e => {
            var span = document.createElement('span');
            span.innerText = e;
            span.style.padding = "3px";
            span.style.cursor = 'pointer';
            span.style.border = "3px white solid";
            span.style.borderRadius = "30px";
            span.addEventListener('click', eval(e));
            span.onmouseenter = function (e) {
                this.style.background = "red";
                this.style.border = "3px solid red";
            }
            span.onmouseleave = function (e) {
                this.style.background = "unset";
                this.style.border = "3px white solid";
            }
            return span
        })
        div.appendChild(map[0]);
        div.appendChild(map[1]);
        var s = setInterval(e => {
            if (document.querySelectorAll('.big-photo').length > 0) {
                document.querySelector('.big-photo').appendChild(div);
                clearInterval(s);
            }
        });
    }
}
window.onload = createDiv;