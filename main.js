function startClassify()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vcKWiidyX/model.json', modelReady);
}


function  modelReady()
{
    classifier.classify(gotResults);
}
var dog =0;
var cat = 0;
function gotResults(error, results)
{
 if(error)
{
    console.error(error)
}
else
{
    console.log(results);
    random_color_r = Math.floor(Math.random()*255) + 1;
    random_color_g = Math.floor(Math.random()*255) + 1;
    random_color_b = Math.floor(Math.random()*255) + 1;

    document.getElementById("result_label").innerHTML ='Detected voice is of - ' + results[0].label;
    document.getElementById("result_count").innerHTML ='Detected Dog - ' + dog + ' Detected Cat - ' + cat;
    document.getElementById("result_label").style.color = "rgb("+random_color_r+","+random_color_g+", "+random_color_b+")";
    document.getElementById("result_count").style.color = "rgb("+random_color_r+","+random_color_g+", "+random_color_b+")";

    img = document.getElementById("animal_image");

    if(results[0].label == "Barking")
    {
        img.src='200.gif';
        dog = dog+1;

    }
    else if(results[0].label == "Meowing")
    {
        img.src='201.gif';
        cat = cat+1;
    }
    else{
        
        img.src='203.gif';
        
        

    }



}
}