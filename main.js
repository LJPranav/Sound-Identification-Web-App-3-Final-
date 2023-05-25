"https://teachablemachine.withgoogle.com/models/2gsDdjSTi/"

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classsifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2gsDdjSTi/model.json", modelReady);
}

function modelReady(){
    classsifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error)
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can Hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r + ","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r + ","+random_number_g+","+random_number_b+")";

        image = document.getElementById('alien1');
        image1 = document.getElementById('alien2');
        image2 = document.getElementById('alien3');
        image3 = document.getElementById('alien4');

        if(results[0].label == "Clap"){
            image.src = "aliens-01.gif";
            image.src = "aliens-02.png";
            image.src = "aliens-03.png";
            image.src = "aliens-04.png";
        } else if(results[0].label == "Bell"){
            image.src = "aliens-01.png";
            image1.src = "aliens-02.gif";
            image2.src = "aliens-03.png";
            image3.src = "aliens-04.png";  
        } else if(results[0].label == "Snapping"){
            image.src = "aliens-01.png";
            image1.src = "aliens-02.png";
            image2.src = "aliens-03.gif";
            image3.src = "aliens-04.png"; 
        } else{
            image.src = 'aliens-01.png';
            image1.src = 'aliens-02.png';
            image2.src = 'aliens-03.png';
            image3.src = 'aliens-04.gif'; 
        }
}
}