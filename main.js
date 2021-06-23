canvas = document.getElementById("myCanvas_2");
 ctx = canvas.getContext("2d");

 car1_width = 100;
 car1_height = 90;
 car1_y = 10;
 car1_x = 10;

 car2_width = 100;
 car2_height = 90;
 car2_y = 100;
 car2_x = 10;
 

 Background_image = "dfb19993bbbabfbd110610e4dc821b65.png";
 car1_image = "car1.png";
 car2_image = "images\ \(2\).jpg";


function add(){
    Background_ImgTag= new Image();
    Background_ImgTag.onload= uploadBackground;
    Background_ImgTag.src= Background_image;

    car1_ImgTag= new Image();
    car1_ImgTag.onload= uploadcar1;
    car1_ImgTag.src= car1_image;

    car2_ImgTag= new Image();
    car2_ImgTag.onload= uploadcar2;
    car2_ImgTag.src= car2_image;
}
function uploadBackground(){
    ctx.drawImage(Background_ImgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_ImgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_ImgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown" , my_keydown);
    function my_keydown(e){
        keypressed=e.keyCode;
        console.log(keypressed);
        if(keypressed == '38'){
            up();
            console.log("up");
        }

        if(keypressed == '39'){
            right();
            console.log("right");
        }

        if(keypressed == '40'){
            down();
            console.log("down");
        }

        if(keypressed == '37'){
            left();
            console.log("left");
        }
    }

    window.addEventListener("keydown" , my_keydown);
    function my_keydown(e){
        keypressed=e.keyCode;
        console.log(keypressed);
        if(keypressed == '65'){
            up();
            console.log("a");
        }

        if(keypressed == '87'){
            right();
            console.log("w");
        }

        if(keypressed == '83'){
            down();
            console.log("s");
        }

        if(keypressed == '84'){
            left();
            console.log("t");
        }
    }

    function up(){
        if(car1_y>=0)
        car1_y-=10;
        console.log("When up arrow is pressed,x=" +car1_x+",y="+car1_y);
        uploadBackground();
        uploadcar1();
    }

    function down(){
        if(car1_y<=500)
        car1_y+=10;
        console.log("When down arrow is pressed,x=" +car1_x+",y="+car1_y);
        uploadBackground();
        uploadcar1();
    }

    function left(){
        if(car1_x>=0)
        car1_x-=10;
        console.log("When left arrow is pressed,x=" +car1_x+",y="+car1_y);
        uploadBackground();
        uploadcar1();
    }

    function right(){
        if(car1_x<=700)
        car1_x+=10;
        console.log("When right arrow pressed,x=" +car1_x+",y="+car1_y);
        uploadBackground();
        uploadcar1();
    }

    function up(){
        if(car2_y>=0)
        car2_y-=10;
        console.log("When up arrow is pressed,x=" +car2_x+",y="+car2_y);
        uploadBackground();
        uploadcar2();
    }

    function down(){
        if(car2_y<=500)
        car2_y+=10;
        console.log("When down arrow is pressed,x=" +car2_x+",y="+car2_y);
        uploadBackground();
        uploadcar2();
    }

    function left(){
        if(car2_x>=0)
        car2_x-=10;
        console.log("When left arrow is pressed,x=" +car2_x+",y="+car2_y);
        uploadBackground();
        uploadcar2();
    }

    function right(){
        if(car2_x<=700)
        car2_x+=10;
        console.log("When right arrow pressed,x=" +car2_x+",y="+car2_y);
        uploadBackground();
        uploadcar2();
    }