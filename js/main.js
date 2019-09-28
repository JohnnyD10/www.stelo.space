var stars = []

function setup() {
    for (let i = 0; i < 700; i++) {
        stars.push(new Star(windowWidth, windowHeight))
    }
    fill(255)
    noStroke()
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    translate(windowWidth/2, windowHeight/2)
    background(0)
    for (let i = 0; i < stars.length; i++) {
        stars[i].show()
        stars[i].update()
    }
}