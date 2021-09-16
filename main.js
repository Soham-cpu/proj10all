Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function imagetake() {
    console.log("somemessage");
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="taken_picture" src="' + data_uri + '"/>';
    });
}

console.log('ml5version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cpup3hNmB/model.json', modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}

function check() {
    console.log("cheking");
    img = document.getElementById("taken_picture");
    classifier.classify(img, results);
}

function results(error, results) {
    if (error) {
        console.error(error);
    }else{
        console.log(results)
        document.getElementById("object_recognized").innerHTML = results[0].label;
        document.getElementById("object_recognized_accuracy").innerHTML = results[0].confidence.toFixed(4);
    }
}