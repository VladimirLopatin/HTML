var elem_1 = document.getElementById('circle_1'),
    elem_2 = document.getElementById('circle_2');
    elem_3 = document.getElementById('circle_3');
    elem_4 = document.getElementById('circle_4');

function set_top_position(ball_top){
	// устанавливает вертикальную координату шарика
	elem_1.style.top = ball_top;
    elem_2.style.top = ball_top;
    elem_3.style.top = ball_top;
    elem_4.style.top = ball_top;
}
(function () {

    var el_1 = document.getElementById('circle_1');
    
    el_1.onclick = function () {
        this.style.background =  "red";
        this.style.height = 60;
        this.style.width = 60;
        this.style.left = 150;
        this.style.top = 100; 
    };

    var el_2 = document.getElementById('circle_2');
    
    el_2.onclick = function () {
        this.style.background =  "orange";
        this.style.height = 40;
        this.style.width = 40;
        this.style.left = 250;
        this.style.top = 300; 
    };

    var el_3 = document.getElementById('circle_3');
    
    el_3.onclick = function () {
        this.style.background =  "green";
        this.style.height = 70;
        this.style.width = 70;
        this.style.left = 500;
        this.style.top = 70; 
    };

    var el_4 = document.getElementById('circle_4');
    
    el_4.onclick = function () {
        this.style.background =  "blue";
        this.style.height = 40;
        this.style.width = 40;
        this.style.left = 800;
        this.style.top = 200; 
    };
    
    })();




