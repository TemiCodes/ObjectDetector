img = ""
status = ""
objects = []

function setup() {
    canvas = createCanvas(400, 400)
    canvas.center()
    
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    



}

function preload() {
    

}

function draw() {
    image(video, 0, 0, 400, 400)
    if (status != "") {
        objectdetector.detect(video, gotresults)
        r=random(255)
        g=random(255)
        b=random(255)
        for (let i = 0; i < objects.length; i++) {
            fill(r, g, b)
            percent = floor(objects[i].confidence*100)
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y)
            noFill()
            stroke(r,g,b)
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            document.getElementById("btn1").innerHTML = "objects detected"
            document.getElementById("objects").innerHTML = "Number of Objects = " + objects.length
        }
    }



}

function modeloaded() {
    console.log("Model is loaded!")
    status = true
    

}

function gotresults(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        objects = results
    }
}
function Startup() {
    objectdetector = ml5.objectDetector("cocossd", modeloaded)
}