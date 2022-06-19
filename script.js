var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}

recognition.onresult = function(event){

    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    
    if(Content =="take my selfie")
    {
    console.log("taking selfie --");
    speak();
    }
   
}


function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    
    setTimeout(function()
    {
    img_id = "Selfie1";
    speak_data = "Taking you Selfie in Five Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    take_snapshot();      
    save();
    },5000);

    
    setTimeout(function()
    {
    img_id = "Selfie2";
    speak_data = "Taking you Selfie in Ten Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    take_snapshot();    
    save();
    },10000);

    
    setTimeout(function()
    {
    img_id = "Selfie3";
    speak_data = "Taking you Selfie in Fifteen Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    take_snapshot();        
    save();
    },15000);
    }

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="Selfie1")
        {
        document.getElementById("result1").innerHTML = '<img id="Selfie1" src="'+data_uri+'"/>';
        }

        if(img_id=="Selfie2")
        {
        document.getElementById("result2").innerHTML = '<img id="Selfie2" src="'+data_uri+'"/>';
        }

        if(img_id=="Selfie3")
        {
        document.getElementById("result3").innerHTML = '<img id="Selfie3" src="'+data_uri+'"/>';
        }
    });
    }
    
    function save(){
       
        if(img_id=="Selfie1")
        {
        link=document.getElementById("link1");
        image=document.getElementById("Selfie1").src;
        link.href=image;
        link.click();
        }


        if(img_id=="Selfie2")
        {
        link=document.getElementById("link2");   
        image=document.getElementById("Selfie2").src;
        link.href=image;
        link.click();
        }

        if(img_id=="Selfie3")
        {
        link=document.getElementById("link3");
        image=document.getElementById("Selfie3").src;
        link.href=image;
        link.click();
        }
    }