var maxMove         = 100;
var continueLoop    = true;
var increasePixels  = 1;

function startMovingDown(){

  continueLoop = true;
  var timerId = window.setInterval(function(){

      if( !continueLoop ){
        clearInterval( timerId );
        return;
      }

      var smooth = 0;
      while( smooth < maxMove ) {
        chrome.tabs.executeScript( null,{
          code: "javascript:document.body.scrollTop+=" + increasePixels
        });
        smooth++;
      }


  }, 700);
  timerId();
}

function goToTheTop(){
  continueLoop = false;

  chrome.tabs.executeScript( null,{
    code: "javascript:document.body.scrollTop=0"
  });

}

function log( msg ){
  chrome.extension.getBackgroundPage().console.log( msg );
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('startScrolling').addEventListener('click', startMovingDown);
    document.getElementById('goToTheTop').addEventListener('click', goToTheTop);
})
