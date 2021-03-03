function CardBack() {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', CardBack.WIDTH);
    canvas.setAttribute('height', CardBack.HEIGHT);

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
    ctx.fillRect(0, 0, CardBack.WIDTH, CardBack.HEIGHT);
    for (let index = 0; index < 10; index++) {
        const hue = Math.floor(Math.random() * 360);
        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue}, 50%, 50%, 0.9)`;
        ctx.arc(
            Math.random() * CardBack.WIDTH,
            Math.random() * CardBack.HEIGHT,
            Math.random() * CardBack.RADIUS,
            0,
            Math.PI * 2
        );
        ctx.closePath();
        ctx.fill();
    }

    this.url = canvas.toDataURL();
}

CardBack.WIDTH = 100;
CardBack.HEIGHT = 175;
CardBack.RADIUS = 50;
