const intialValue = 1000000;
const countText = document.getElementById('count');
const eggImg = document.getElementById('egg-img');
const tapSound = document.getElementById('tap-sound');
let count = localStorage.getItem('tapCount');
document.title = count + "回のたまご";


if (!localStorage.getItem('tapCount')) {
    count = intialValue;
    document.title = intialValue + "回のたまご";
}

countText.textContent = count;


eggImg.onclick = function() {
    count--;
    countText.textContent = count;
    localStorage.setItem('tapCount', count);
    document.title = count + "回のたまご";
    tapSound.currentTime = 0;
    tapSound.play();
    this.classList.add('egg-tap');
    setTimeout(function() {
        eggImg.classList.remove('egg-tap');
    }, 200);

    if (count <= 0) {
        countText.textContent = 'ワレルトオモウナヨ';
        this.src = 'img/cracked-egg.png';
        document.title = "ワレルトオモウナヨ";
        localStorage.removeItem('tapCount');
        return;
    }


};