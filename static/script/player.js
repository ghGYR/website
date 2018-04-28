var numfrq = 5;
var time=0;
function drawFrq(array) {
    var myCanvas = document.getElementById('musc-visual'),
        canvasCtx = myCanvas.getContext("2d");
    var cwidth = myCanvas.width,
        cheight = myCanvas.height;
    //canvasCtx.clearRect(0, 0, cwidth, cheight);
    myCanvas.width = cwidth;
    myCanvas.height = cheight;
    //canvasCtx.fillStyle = " #000000";
    //console.log( cwidth);
    //console.log( cheight);
    canvasCtx.lineWidth = 1; //线条的宽度
    canvasCtx.strokeStyle = "#242424"; //线条的颜色
    var lines = ["rgba(0,100,100, 0.2)",
        "rgba(0,200,100, 0.2)",
        "rgba(0,200,200, 0.2)",
        "rgba(10,200,100, 0.2)",
        "rgba(0,20,0200, 0.2)"
    ];

    function draw_sin() {
        for (var l= 0; l< 4; l++) {
            canvasCtx.beginPath();
            canvasCtx.moveTo(0, cheight);
            var p=10+l*20
            canvasCtx.lineTo(0, cheight - p);
            for (var i = 0; i < 1000; i++) {
                var x = i * cwidth / 1000
                var y = 0;
                for (var j = 1; j < array.length; j++) {
                    var w =Math.PI /  j * (l+1);
                    y += Math.sin(w * (x+time) / 500) * (array[j] / 15 + 5);
                }
                canvasCtx.lineTo(x, cheight - p - y);
            }
            canvasCtx.lineTo(cwidth, cheight -p);
            canvasCtx.lineTo(cwidth, cheight);
            canvasCtx.fillStyle = lines[l];
            canvasCtx.closePath();
            canvasCtx.fill();
            canvasCtx.stroke(); //绘制
        }
        time+=0.1;

    }
    draw_sin();
    /*
    for (var i = 0; i < array.length; i++) {
        //console.log(array);
        /*
        var h=cheight-array[i]+array[0];
        var w=i* cwidth/ numfrq;
        if(h<0)
          h=0;
        canvasCtx.moveTo(w,cheight);
        canvasCtx.quadraticCurveTo(w+cwidth/ numfrq/2,0.9*(cheight-array[i]),w+cwidth/ numfrq,cheight);
        canvasCtx.moveTo(w,cheight);
        canvasCtx.quadraticCurveTo(w+cwidth/ numfrq/2,0.7*(cheight-array[i]),w+cwidth/ numfrq,cheight);
       // canvasCtx.lineTo((i)* cwidth/64, h);
       */
    /*
       var  p1=i*10+10;
       var freq=array[i];
       canvasCtx.beginPath();
       canvasCtx.moveTo(0,cheight);
       canvasCtx.lineTo(0,cheight-p1);
       if (i%2==0)
              canvasCtx.bezierCurveTo(freq/400*cwidth+100,cheight-p1-2*freq,cwidth*freq/400+200,cheight-p1+2*freq,cwidth,cheight-p1);  
        else
              canvasCtx.bezierCurveTo(freq/400*cwidth+100,cheight-p1+2*freq,cwidth*freq/400+200,cheight-p1-2*freq,cwidth,cheight-p1);  
        canvasCtx.lineTo(cwidth,cheight);
       //canvasCtx.quadraticCurveTo(i*20,cheight-array[i],cwidth,p1);
       canvasCtx.closePath();
       canvasCtx.fillStyle=lines[i];
       canvasCtx.fill();
       canvasCtx.stroke();//绘制

    }*/

    //canvasCtx.lineTo((i)* cwidth/128, cheight-array[array.length-1]-c-array[0]);
    //canvasCtx.lineTo( cwidth,0);

}

function palyer_console() {
    //创建相关变量
    var audio = document.getElementById("music");
    audio.crossOrigin = 'anonymous';
    //var play = document.getElementById("music-play-icon");
    //var player = document.getElementById("player");
    try {
        var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    } catch (err) {
        alert('!Your browser does not support Web Audio API!');
    };
    var source = audioCtx.createMediaElementSource(audio);
    var analyser = audioCtx.createAnalyser();
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    //更新频谱
    function newFrq() {
        var array = new Uint8Array(numfrq);
        analyser.getByteFrequencyData(array);
        //console.log(array);
        drawFrq(array);
    }
    audio.addEventListener("canplaythrough", function() {
        //自动播放
        //初始化自动播放
        console.log("canplaythrough");

        function draw_animation() {
            newFrq();
            //console.log("play");
            requestAnimationFrame(draw_animation);
        }
        draw_animation();
        if (audio.autoplay == "autoplay")
            draw_animation();
        else
            audio.addEventListener("play", function() {
                console.log("play");
                draw_animation();

            });


    });
    console.log("start");
}
palyer_console();