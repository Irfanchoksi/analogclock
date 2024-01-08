console.log('script is running')

let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function displaytime(){
    let date= new Date();
    // getting hours min and sec from date
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotations= 30*hh + mm/2;
    let mRotations=6*mm;
    let sRotations= 6*ss; 

 

    hr.style.transform = `rotate(${hRotations}deg)`;
    min.style.transform = `rotate(${mRotations}deg)`;
    sec.style.transform = `rotate(${sRotations}deg)`;

    
}

setInterval(displaytime, 1000);

/*setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);*/
