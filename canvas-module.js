export class ChessBoard {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.size =  5;
    this.light = '#d1eefc';
    this.dark =  '#1f1f21';
    this.active = false;
    this.viewItems = [
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0]
    ];
    if(canvas) Object.assign(this, this, canvas);
    this.requestAnimation();
    this.squareWidth = this.canvas.width / this.viewItems.length;
  }

  start() {
    this.requestAnimation();
  }

  onClick() {

    let x = 0,
        y = 0,
        parsX,
        parsY;

    this.canvas.addEventListener('click', event => {
      x = event.offsetX / 100;
      y = event.offsetY / 100;
      parsX = Math.floor(x);
      parsY = Math.floor(y);
      this.draw(parsX, parsY);

    })
  }

  requestAnimation() {
    if (!this.hasRequestAnimationFrame) {
      this.hasRequestAnimationFrame = true;
      requestAnimationFrame(() => {
        this.hasRequestAnimationFrame = false;
        this.draw();
    })
    }
  }


  draw(parsX, parsY) {
    let x = 0,
        y = 0;
    for (let j = 0; j < this.viewItems.length; j++) {
      for(let b = 0; b < this.viewItems.length; b++) {
        if(this.viewItems[j][b] === 0) {
          this.ctx.fillStyle = 'black'
        } else {
          this.ctx.fillStyle = 'red'
        }
        if(parsX === j && parsY === b) {
          this.ctx.fillStyle = 'yellow';
          this.ctx.beginPath();
        }

        this.ctx.beginPath();
        this.ctx.rect((j * this.squareWidth), (b * this.squareWidth), this.squareWidth, this.squareWidth);
        this.ctx.fill();

      }

    }

  }
  drawUpdate(curX, curY) {
    console.log(curX, curY);
    this.ctx.beginPath();
    this.ctx.fillStyle = 'yellow';
    this.viewItems[curX][curY];
    this.ctx.fill();

  }

}

