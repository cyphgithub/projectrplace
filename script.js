function playaudio() {
    var audio = new Audio('nevergonnagiveyouup.mp3');
    console.log("working..");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("worked");
    audio.play();
  }