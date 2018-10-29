var elem_1 = document.getElementById('circle_1'),
	elem_2 = document.getElementById('circle_2');

function set_top_position(ball_top){
	// устанавливает вертикальную координату шарика
	elem_1.style.top = ball_top;
	elem_2.style.top = ball_top;
}

function ontimer(event){
	// отслеживает позицию шарика и меняет направление движения
	tic++;
	if (ball_top >= 100){
		bottom_flag = true;
	}

	if (ball_top <= 0){
		bottom_flag = false;
	}

	if (bottom_flag){
		ball_top-=10;
	}
	else{
		ball_top+=10;
	}
	
	set_top_position(ball_top);
}
var bottom_flag = false;
var ball_top = 0;
var tic = 0;
var id = setInterval(ontimer, 500);



// function printMessage(mes){
// 	console.log(mes);
// }

// function moveright(event){
// 	console.log('click');
// 	if (position){
// 		elem.style.top = ball_top;
// 		position = false;
// 	}
// 	else{
// 		elem.style.top = 100;
// 		position = true;
// 	}
// }

// var position = true;
// var msg = 'Hello world'
// printMessage(msg)
// elem.onclick = moveright;
// elem.style.top = 200;