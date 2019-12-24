let main = document.getElementById('main'); 
let homeKeysArray = ['q','w','e','r','t','y','u','i','o','p']; 
let keyObject={ 'a':65,'b':66,'c':67,'d':68,'e':69,'f':70,'g':71,'h':72,'i':73,'j':74,'k':75,'l':76,'m':77, 'n':78,'o':79,'p':80,'q':81,'r':82,'s':83,'t':84,'u':85,'v':86,'w':87,'x':88,'y':89,'z':90 }; 
let arrowKeys = ['up','down','left','right','center','lefthead','righthead','leftfoot','rightfoot'];
let arrowKeysObject = {'lefthead':219,'righthead':220,'up':221,'down':191,'right':13,'center':222,'left':186,'leftfoot':190,'rightfoot':16};
let arrowKeyCode = (key) => {return arrowKeysObject[key]; }
let homeKeyCode = (key) =>{ return keyObject[key]; } 
let toggleKey = (key) => {
	let thisKey = document.getElementsByClassName(key)[0];
	if(thisKey.classList.contains('on')){
		thisKey.classList.remove('on');
		thisKey.classList.add('off');
	}else{
		thisKey.classList.add('on');
		thisKey.classList.remove('off');
	}
	let activeDiv = document.getElementById('selected');
	activeDiv.innerHTML = key;
}
let bindHomeKeys = () =>{ 
	homeKeysArray.forEach((homeKey)=>{ 
		document.addEventListener('keydown',(event)=>{
			//console.log(event);
			if(event.keyCode == homeKeyCode(homeKey)){
				console.log(`${homeKey} pressed!`)
			}
		});
		document.addEventListener('keyup',(event)=>{
			if(event.keyCode == homeKeyCode(homeKey)){
				toggleKey(homeKey);	
			}
		});

		console.log(homeKeyCode(homeKey)); 
	}) 
}       
let bindArrowKeys = () =>{
	arrowKeys.forEach((arrowKey)=>{
		document.addEventListener('keydown',(event)=>{
			console.log(event.keyCode);
			if(event.keyCode == arrowKeyCode(arrowKey)){
				let activeKey = document.getElementById('selected').innerHTML;
				let activeDiv = document.getElementsByClassName(activeKey)[0];
				arrowKeys.forEach((direction)=>{
					activeDiv.classList.remove(direction);
				});
				activeDiv.classList.add(arrowKey);
			}
		});
	});
}
document.addEventListener('keydown',(event)=>{
	if(event.keyCode == 46 ){
		let activeKey = document.getElementById('selected').innerHTML;
		let activeDiv = document.getElementsByClassName(activeKey)[0];
		arrowKeys.forEach((direction)=>{
			activeDiv.classList.remove(direction);
		});
		activeDiv.classList.add('center');
	}
})
bindArrowKeys();
bindHomeKeys();
