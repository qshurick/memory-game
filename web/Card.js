function Card(container, back, value, checkOrderCallback) {
    this.done = false;
    this.value = value;
    this.element = document.createElement('div');
    this.element.classList.add('card');

    const backImage = document.createElement('img');
    backImage.setAttribute('src', back.url);
    this.element.appendChild(backImage);

    const face = document.createElement('p');
    face.innerText = this.value;
    this.element.appendChild(face);

    container.appendChild(this.element);

    this.element.addEventListener('click', () => {
        if (this.done) {
            return true;
        }

        this.flip();

        this.done = checkOrderCallback(this);

        if (!this.done) {
            setTimeout(() => this.flip(), 1000);
        }
    });

    setTimeout(() => this.flip(), 3000);
}

Card.prototype.flip = function() {
    this.element.classList.toggle('flipped');
}
