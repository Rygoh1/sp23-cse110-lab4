function seconds() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
  
setInterval(seconds, 1000);