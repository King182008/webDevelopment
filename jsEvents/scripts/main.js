function init() {
    const CANVAS = document.getElementById("canvas");
    CANVAS.addEventListener('mouseover', handleMouseMove, false);
    const CONTEXT = CANVAS.getContext("2d"); // Get drawing area

    let started = false;

    function handleMouseMove(e) {
        let x, y;

        if(e.clientX                    // Id x position is specified ...
            || e.clientX == 0)  {       // ... and it is not 0 ...
                x = e.clientX;          // remember x position ...
                y = e.clientY;          // remember y position ...
        }      

        if (!started) {                 // If path not yet started ...
            CONTEXT.beginPath();        // ... start path and ...
            CONTEXT.moveTo(x, y);       // ... move to postion.
            started = true;             // Notice that path has started
        }else {                         // If path had started ...
            CONTEXT.lineTo(x, y);       // ... move to position ...
            CONTEXT.stroke();           // .. and draw conection.
        }
    }
}

document.addEventListener("DOMContentLoaded", init);