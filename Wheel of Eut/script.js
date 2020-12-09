let theWheel = new Winwheel({
    
    'lineWidth'   : 1,
    'numSegments' : 1,
    'textFontWeight' : 1,
    'innerRadius'   : 40, 
    'textOrientation' : 'vertical',    // Set orientation. horizontal, vertical, curved.
    'textFontFamily'  : 'Courier',     // Monospace font best for vertical and curved. 
    'responsive'   : true,  
    'textMargin'    : 60,

    
    
 
    

    'segments'    :

    
    
    [

        {'fillStyle' : '#eae56f', 'text' : 'Spin Again'},

        
    ],

    'animation' :
        {
    
            'type'     : 'spinToStop',
            'duration' : 30,

 

            'spins'        : 8,
            'easing'       : 'Power4.easeOut',
            'stopAngle'    : null,
            'direction'    : 'clockwise',
            'repeat'       : 0,
            'callbackSound' : 'playSound()',
            'responsive'   : true,  

            
        },

        'pointerGuide' :    
        {
            'display'     : true,
            'strokeStyle' : 'grey',
            'lineWidth'   : 1
        }

    
});



function calculatePrize()
{

    let stopAt = [240, 150 , 220]
    

    var randomStopAt = Math.floor(Math.random() *3);

   


    //  set the stopAngle of the animation before stating the spin.
    theWheel.animation.stopAngle = stopAt[randomStopAt];

    stopAt.slice(randomStopAt);
    startSpin();



}



   function startSpin()
   {
    
       theWheel.stopAnimation(false);


       theWheel.rotationAngle = theWheel.rotationAngle % 360;

       // Start animation.
       theWheel.startAnimation();
   }





function addSegment()
{
    var textBoxContent = $(".textBox").val();
    // Use a date object to set the text of each added segment to the current minutes:seconds
    // (just to give each new segment a different label).
    var newSegment = textBoxContent;



    var colors = ["#00ecff ", "#FF0000 ",  "#FF0000 ", "#ffd300 ", "#ff822e ", "#fd6bb6 ", "#ffb3fd ", "#9d72ff ", "#440bd4 ", "#535eeb ", "#48adf1 ", "#3cb9fc ", "#01ffc3", "#B8E0F6", "#DEC4D6", "#E7CBA9", "#E8D595", "#A9C8C0", "#D3CCCA", "#D6ED17FF"];

    var randomColorSelector = Math.floor(Math.random() *20 + 1);

    var chosenColor = colors[randomColorSelector];

    // The Second parameter in the call to addSegment specifies the position,
    // in this case 1 meaning the new segment goes at the start of the wheel.
    theWheel.addSegment({
        'text' : newSegment,
        'fillStyle' : chosenColor
    }, 1);

    // The draw method of the wheel object must be called in order for the changes
    // to be rendered.
    $(".textBox").val('');
    theWheel.draw();
}

function deleteSegment()
{
    // Call function to remove a segment from the wheel, by default the last one will be
    // removed; you can pass in the number of the segment to delete if desired.
    theWheel.deleteSegment();

    // The draw method of the wheel object must be called to render the changes.
    theWheel.draw();
}


let audio = new Audio('sounds/tick.mp3');  // Create audio object and load desired file.
 
function playSound()
{
    // Stop and rewind the sound (stops it if already playing).
    audio.pause();
    audio.currentTime = 0;

    // Play the sound.
    audio.play();
}


    // Function with formula to work out stopAngle before spinning animation.
    // Called from Click of the Spin button.





    function resetWheel()
    {
        theWheel.stopAnimation(false); 
        theWheel.rotationAngle = 0;     
        theWheel.draw();               



        wheelSpinning = false;          
    }


function firstPrice (){
    let stopAt = [210]
    

    var randomStopAt = 0;
   



    theWheel.animation.stopAngle = stopAt[randomStopAt];

    stopAt.slice(randomStopAt);
    startSpin();
}

function secondPrice (){
    let stopAt = [50]
    

    var randomStopAt = 0;
   



    theWheel.animation.stopAngle = stopAt[randomStopAt];

    stopAt.slice(randomStopAt);
    startSpin();
}

function thirdPrice (){
    let stopAt = [23]
    

    var randomStopAt = 0;
   



    theWheel.animation.stopAngle = stopAt[randomStopAt];

    stopAt.slice(randomStopAt);
    startSpin();
}

$(".textBox").keypress(function(event){
    var KeyPressed = event.key;

    if(KeyPressed == "Enter" ){
        addSegment();
    } else {
        console.log('bogo ka');
    }
    
    

})


$(document).keypress(function (event){
    var key = event.key;

    if (key == 1){
        firstPrice();
    }
});

$(document).keypress(function (event){
    var key = event.key;

    if (key == 2){
        secondPrice();
    }
});

$(document).keypress(function (event){
    var key = event.key;

    if (key == 3){
        thirdPrice ();
    }
});


var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})

