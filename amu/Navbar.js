var open = false;

function Drop(n) {
    var i;
    if (open == false) {
        for (i = 0; i < 5; i++) {
            Drp(i);
        }
        open = true;
    } else if (open == true) {
        for (i = 0; i < 5; i++) { Cls(i) }
        open = false;
    }

}

function Drp(n) {
    var element = document.getElementsByClassName("menu-con")[n];
    var position = -1 * window.innerHeight - n * 100;
    var id = setInterval(frame, 5);

    function frame() {
        if (position >= -10) {
            clearInterval(id);
            element.style.top = 0 + 'px';
        } else {
            position += 10;;
            element.style.top = position + 'px';
        }
    }
}

function Cls() {
    var elements = document.getElementsByClassName("menu-con")[n];
    var positions = 0;
    var ids = setIntervaal(frames, 5);

    function frames() {
        if (positions <= -1 * window.innerHeight) {

            clearInterval(ids);
            elements.style.top = -1 * window.innerHeight + 'px';
        } else {
            positions += -7 - n * 2;
            elements.style.top = positions + 'px';
        }
    }

}