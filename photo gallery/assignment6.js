var client = new XMLHttpRequest();
var arrayImage = [];
var curIndex = -1;
var counter = 0;
//googleapi.JQuery animation fade in and out
$(document).ready(
    function(){
        //read json file and load the image
        function LoadJsonFile(){
            client.onreadystatechange = function(){
                if(client.readyState == 4 && client.status == 200){
                    arrayImage = JSON.parse(client.responseText);
                    LoadImage();
                }
            }
            client.open("GET", "proxy.php", true);
            client.send();
        }
        //load and display
        function LoadImage(){
            for(var i = 0; i < arrayImage.length; i++){
                if(curIndex == -1 && i == 0){
                    AnimaImage(i);
                    curIndex = 0;
                    break;
                }
                else if(i == curIndex){
                    AnimaImage(i);
                    curIndex = i;
                    break;
                }
            }
        }
        //add animation to images
        function AnimaImage(i){
            $("#img1").attr("src", "images/" + arrayImage[i].fileName);
            $("#img1").animate({ opacity: '0.2' }, "slow");
            $("#img1").animate({ opacity: '2.0' }, "slow");  
            counter = arrayImage[i].duration;
        }
        //reset when user click update
        function UpdateClick(){
            curIndex = 0;
            LoadJsonFile();
        }
        //show next image when user click next
        function NextClick(){
            if(curIndex == arrayImage.length - 1){
                curIndex = 0;
            }
            else{
                curIndex += 1;
            }
            counter -= 1;
            LoadImage();
        }
        //show last image when user click last
        function PreviousClick(){
            if(curIndex == 0){
                curIndex == arrayImage.length - 1;
            }
            else{
                curIndex -= 1;
            }
            counter -= 1;
            LoadImage();
        }
        //update the time when time turn to 0
        setInterval(function(){
            if(counter == 0){
                NextClick();
            }
            else{
                counter -= 1;
            }
        }, 1)
        
        function CreateEventListener(){
            //eventlistener for next btn
            var next = document.getElementById("next");
            if (next.addEventListener) {
                next.addEventListener("click", NextClick, false); 
            } else if (next.attachEvent)  {
            next.attachEvent("onclick", NextClick);
            }
            //eventlistener for previous btn
            var previous = document.getElementById("previous");
            if (previous.addEventListener) {
                previous.addEventListener("click", PreviousClick, false); 
            } else if (previous.attachEvent)  {
                previous.attachEvent("onclick", PreviousClick);
            }
            //eventlistener for update btn
            var update = document.getElementById("update");
            if (update.addEventListener) {
                update.addEventListener("click", UpdateClick, false); 
            } else if (update.attachEvent)  {
                update.attachEvent("onclick", UpdateClick);
            }
        }
        function setUpPage(){
            CreateEventListener();
            LoadJsonFile();   
        }
        if (window.addEventListener) {
            window.addEventListener("load", setUpPage, false); 
        } else if (window.attachEvent)  {
            window.attachEvent("onload", setUpPage);
        }
    }
)