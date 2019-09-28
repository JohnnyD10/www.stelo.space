class Star {
    constructor(width, height) {
        this.W = width
        this.H = height
        this.y = random(-height, height)
        this.x = random(-width, width)
        this.z = random(width)
    }

    update() {
        this.z -= 50
        if (this.z < 0) {
            this.z = this.W
            this.y = random(-this.H, this.H)
            this.x = random(-this.W, this.W)
        }
    }

    show() {
        let sx = map(this.x / this.z, 0, 1, 0, this.W)
        let sy = map(this.y / this.z, 0, 1, 0, this.H)

        let r = map(this.z, this.W, 0, 0, 10)
        ellipse(sx, sy, r, r)
    }
}