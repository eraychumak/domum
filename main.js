// global variable declarations.
let sun_x = 0, cloud_x = 0;

// runs once, creates canvas.
function setup() {createCanvas(800, 500)}

// draws a sun at given x, y. Padding: 60px, 0, 70px, 0.
function sun(x, y) {
    fill(255, 255, 0);
    const sun = {
        main: rect(x + 70, y + 60, 100, 100, 70)
    }
    return sun;
};

// draws a cloud at given x, y. Padding: 50px, 0, 50px, 0.
function cloud(x, y) {
    fill(200, 200, 200, 200);
    const cloud = {
        main: {
            part_01: rect(x + 50, y + 50, 100, random(20), 50, 50),
            part_02: rect(x + 40, y + 40, 100, random(20), 50, 50),
            part_03: rect(x + 60, y + 60, 100, random(20), 50, 50),
            part_04: rect(x + 30, y + 60, 100, random(20), 50, 50)
        }
    }
    return cloud;
};

// draws land at given x, y.
function grass(x, y, width, height) {
    fill(100, 200, 100);
    const grass = {
        main: rect(x, y, width, height)
    }
    return grass;
}

// draws a house at given x, y. ~ Padding: 215px, 0 160, 0.
function house(x, y) {
    rectMode(CENTER);
    const house = {
        roof: {
            chimney: [fill(200, 150, 20), stroke(50), rect(x + 230, y + 100, 20, 50)],
            main: [fill(200, 150, 20), stroke(50), triangle(x + 50, y + 140, x + 160, y + 50, x + 270, y + 140)],
            smoke: [fill(100), stroke(50), rect(x + 230, y + random(50), 10, 10, 50)],
            window: {
                main: [fill(0), stroke(50), rect(x + 160, y + 100, 50, 50, 50)],
                frame: [fill(0), stroke(255), line(x + 160, y + 75, x + 160, y + 125)]
            }
        },
        bottom: {
            main: [fill(200, 150, 20), stroke(50), rect(x + 160, y + 215, 250, 150, 5)],
            window: {
                left: {
                    main: [fill(0), stroke(50), rect(x + 75, y + 200, 50, 40, 100, 1)],
                    frame: [fill(0), stroke(255), line(x + 75, y + 180, x + 75, y + 220)]
                },
                right: {
                    main: [fill(0), stroke(50), rect(x + 240, y + 200, 50, 40, 100, 1)],
                    frame: [fill(0), stroke(255), line(x + 240, y + 180, x + 240, y + 220)]
                }
            },
            door: {
                main: [fill(0), stroke(50), rect(x + 160, y + 240, 60, 100, 10)],
                knob: [fill(100), stroke(50), rect(x + 180, y + 240, 10, 10, 10)],
            }
        }
    };
    return house;
};

// updates variables every 1000 ms (1 sec).
const update = () => {
    let multiplier = 10;
    setInterval(() => {
        if (cloud_x > 600) multiplier = -20;
        if (cloud_x < 10) multiplier = 20;
        cloud_x += multiplier;
    }, 1000); 
};

// ~60 FPS.
function draw() { 
    background(100, 100, 255);
    const grass_01 = new grass(400, 450, 800, 100);
    fill(100);
    for (var i = 0; i < 200; i += 20) {bezier(900 - (i / 2), 600, 410, 20, 440, 10, 340 - (i / 16.0), 400 + (i / 80))}
    const sun_01 = new sun(0, 0);
    const cloud_01 = new cloud(cloud_x, 10);
    const cloud_02 = new cloud(cloud_x - 200, 50);
    const cloud_03 = new cloud(cloud_x + 300, 100);
    const cloud_04 = new cloud(cloud_x + 600, 100);
    const house_01 = new house(0, 180);
};

update();