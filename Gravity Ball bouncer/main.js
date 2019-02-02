let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

requestAnimationFrame(animate);

function animate() {
    document.addEventListener("click", () => {
        let randNum = Math.random();
        if (randNum <= 0.5) {
            ball.xs = -5;
        } else {
            ball.xs = 5;
        }
        ball.x = 400;
        ball.y = 100;
        ball.ys = 0;
    })
    movingHR();
    movingVR();

    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "purple";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ctx.fill();

    requestAnimationFrame(animate);
}