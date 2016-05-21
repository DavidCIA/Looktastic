function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

$(document).ready(function(){
    console.log("loaded")
  window.onclick = function(event) {
    console.log("clicked")
    
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
var sampleObject = {
  image: "https://s-media-cache-ak0.pinimg.com/564x/d1/a0/97/d1a09766823917524605f87c982a1906.jpg",
   votes: { L:10,
            R:5
    }
   }
});
  
  console.log("ok")



window.pAsyncInit = function() {
  PDK.init({
      appId: "4835761220816488049", 
      cookie: true
  });
  PDK.login({scope:"read_public"}, function() {
    var pins = [];
    PDK.request('/boards/eentertainment/who-wore-it-better/pins/', {
      fields: 'id,note,link,image'
    }, function (response) { // Make sure to change the board_id
      if (!response || response.error) {
        alert('Error occurred');
      } else {
        pins = pins.concat(response.data);
        if (response.hasNext) {
          response.next(); // this will recursively go to this same callback
        } else {
          var images=[];
          for (var i=0; i < pins.length; i++) {
            images.push(pins[i].image.original.url);
            window.imagesReceived(images);
          }
        }
        
      }
    });
  });
};

window.imagesReceived = function(images) {
  console.log(images);
  var imageFromPinterest = $("#imageFromPinterest");
  console.log(imageFromPinterest);
  
imageFromPinterest.attr( "src", images[1] );
};

/*
var sampleObject = {image: "https://s-media-cache-ak0.pinimg.com/564x/d1/a0/97/d1a09766823917524605f87c982a1906.jpg",
   votes: { L:10,
            R:5
    }
   }
undefined
sampleObject
[object Object] {
  image: "https://s-media-cache-ak0.pinimg.com/564x/d1/a0/97/d1a09766823917524605f87c982a1906.jpg",
  votes: [object Object] {
    L: 10,
    R: 5
  }
}
sampleObject.image
"https://s-media-cache-ak0.pinimg.com/564x/d1/a0/97/d1a09766823917524605f87c982a1906.jpg"
sampleObject.vote
undefined
sampleObject.votes
[object Object] {
  L: 10,
  R: 5
}
sampleObject.votes.L
"sampleObject is not defined"
var sampleObject = {image: "https://s-media-cache-ak0.pinimg.com/564x/d1/a0/97/d1a09766823917524605f87c982a1906.jpg",
   votes: { L:10,
            R:5
    }
   }
undefined
sampleObject.votes
[object Object] {
  L: 10,
  R: 5
}
sampleObject.votes.L
10
"<div>" + sampleObject.votes.L + "</div"
"<div>10</div"
"<img src=" + sampleObject.image + "/>"
"<img src=https://s-media-cache-ak0.pinimg.com/564x/d1/a0/97/d1a09766823917524605f87c982a1906.jpg/>"
"SyntaxError: Unexpected token ILLEGAL"
"error"
"SyntaxError: Unexpected token ILLEGAL"

*/
    