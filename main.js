function startClassify()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WBF6sw5EE/model.json', modelReady);
}


function  modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
 if(error)
{
    console.error(error)
}

}