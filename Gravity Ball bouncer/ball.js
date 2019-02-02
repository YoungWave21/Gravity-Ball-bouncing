let ball = {
    x: 400,
    y: 100,
    r: 20,
    xs: 5,
    ys: 0,
    a: 0.5,
    gravity: 0.87
}

function movingHR() {
    ball.x += ball.xs * (0.7);
    if (ball.x + ball.r > cnv.width || ball.x - ball.r <= 0) {
        ball.xs = -ball.xs;
    }
}

function movingVR() {
    ball.y += ball.ys;
    ball.ys += ball.a;

    if (ball.y + ball.r > cnv.height) {
        ball.ys = -ball.ys * ball.gravity;
    } else if (ball.y - ball.r < 0) {
        ball.ys = -ball.ys * ball.gravity;
    }
}