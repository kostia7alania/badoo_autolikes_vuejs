window.count=0;
function start() {
    console.log('start');
    window.a = setInterval(e=>{
        window.document.querySelectorAll('.profile-action--yes')[0].click()
        window.createDiv();  
        count++;
        console.log('Поставили лайков => '+count) 
    },1000);
}
function stop(){
    console.log('stop')
    clearInterval(window.a);
}
window.onload = function(){
    if(document.querySelectorAll('.handler').length==0){createDiv()}
}
    window.createDiv = () => {
    var div = document.createElement('div')
    div.classList.add('handler')
	div.style.display='flex';
	div.style.justifyContent='space-evenly';
    var map = ['START','STOP'].map(e=>{
        var span = document.createElement('span');
        span.innerText=e;
        span.style.cursor='pointer';
		span.style.border="3px white solid";
		span.style.borderRadius="30px";
		span.onmouseenter=function(e){this.style.background="red";this.style.border="3px solid red";}
		span.onmouseleave=function(e){this.style.background="unset";this.style.border="3px white solid";}
        return span
    })
    map[0].addEventListener('click',start);
    map[1].addEventListener('click',stop);
    div.appendChild(map[0]);
    div.appendChild(map[1]);
    var s = setInterval(e=>{
        if(document.querySelectorAll('.big-photo').length>0){
            document.querySelector('.big-photo').appendChild(div);
            clearInterval(s);
        }
    });
}

