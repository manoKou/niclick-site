window.onload = function(){
  console.log("console ready!");

  var glitchText = document.getElementById("glitch");
  console.log(glitchText.innerHTML);

  var noText = '<span class="bit">no</span>coiner';
  var bitText = '<span class="bit">bit</span>coiner';

  glitchText.addEventListener('mouseenter', function(event){
    event.target.setAttribute("data-text", "nocoiner" );

    for (var i = 1; i <= 12; i++) {
      (function(index) {
        setTimeout(
          function() {
            if(index==1){
              event.target.innerHTML = bitText;
            }else if(index==2){
              event.target.innerHTML = bitText;
            }else if (index==3) {
              event.target.innerHTML = noText;
            }else if (index==4) {
              event.target.innerHTML = bitText;
            }else if (index==5) {
              event.target.innerHTML = noText;
            }else if (index>=6&&index<=10) {
              event.target.innerHTML = bitText;
            }else if (index>10) {
              event.target.innerHTML = noText;
            }
          }, i * 150);
      })(i);
    }

  });

  glitchText.addEventListener('mouseleave', function(event){
    event.target.setAttribute("data-text", "bitcoiner");
    setTimeout(function() {
      event.target.innerHTML = bitText;
    }, 500);
  });
}
