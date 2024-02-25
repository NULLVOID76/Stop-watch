const button = document.querySelector(".btns");
const box = document.querySelector(".box");
const display =document.querySelector("#table");
let check = false;
let print = null;
let time=null;
let timeArray=[];

let ms =s=m=0;
let printArray=(arr,target)=>{
  target.innerHTML=`<th>Sno</th><th>Time Stamp</th>`;
arr.forEach((tar,i) => {
  target.innerHTML+=` <tr><td>${i}</td><td>${tar}</td></tr>`;
});
}
let timePrint = () => {
  ms = ms + 9;
  s = Math.floor(ms / 100);
  m = Math.floor(s / 60);

  time = `${m < 10 ? 0 : ""}${m}:${s < 10 ? 0 : ""}${s % 60}.${ms % 100}`;

  box.innerHTML = `<span> ${time}</span>`;
};
console.log(Date.now());
button.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "play":
      if (check) 
      {
        clearInterval(print);
        check = false;
        document.querySelector(`#play`).innerHTML = "Play";
      } 
      else 
      {
        check = true;
        document.querySelector(`#play`).innerHTML = "Pause";
        print = setInterval(timePrint, 90);
      }
      break;


    case "reset":
      ms = 0;
      time='00:00.00'
      check = false;
      clearInterval(print);
      box.innerHTML = `<span> ${time}</span>`;
      document.querySelector(`#play`).innerHTML = "Start";
      timeArray=[];
      printArray(timeArray,display);

      break;

      case "lape":
        timeArray.push(time);
        printArray(timeArray,display);
      
      break;
  }
});
