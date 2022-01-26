function setup() {
    createCanvas(windowWidth, windowHeight);
}


function draw() {
    background(157,173,201);


    let a = 150;
    let b = 80
    
    //line loop
    for (let b = 1; b < 1000; b += 100) {
      line(0, b, width, b);
      stroke(255,191,184);
    }
  

    //rect cool gray
    rect(a, 0, a, height);
    fill(145,135,176);
    noStroke ();


    //rect french lilac
    rect(a + 230, 0, 20, height);
    fill(140,104,150);
    noStroke ();


    //rect melon
    rect(a + 350, 0, a - 50, height);
    fill(255,191,184);
    noStroke ();


   

 



  }
  
