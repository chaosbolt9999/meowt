
var oneK = [
  // keyframes
{top: '0px'},
{top: '78px',offset:0.3},
{top: '78px', offeset: 1},
]

 var oneT = { 
  // timing options
  duration: 5000,
  iterations: 1,
}

 var oneR = { 
  // timing options
  duration: 5000,
  iterations: 1,
  direction: 'reverse'
}
;
var twoK = [
  // keyframes
{top: '10px'},
{top: '89px',offset:0.3},
{top: '89px'},
]

var twoT = { 
  // timing options
  duration: 5000,
  iterations: 1,
  
};
var twoR = { 
  // timing options
  duration: 5000,
  iterations: 1,
  direction: 'reverse'
}
var threeK = [
  // keyframes
{top: '10px'},
{top: '91px',offset:0.3},
{top: '91px' },
]
var threeT = { 
  // timing options
  duration: 5000,
  iterations: 1,
  
};
var threeR = { 
  // timing options
  duration: 5000,
  iterations: 1,
  direction: 'reverse'
}
function phone(){
//animating

document.getElementById("one").animate(
oneK,
oneT
);
setTimeout(function (){document.getElementById("one").animate(
oneK,
oneR
)
},5000);
setTimeout(function(){document.getElementById("two").animate(
twoK,
twoT
);
setTimeout(function (){document.getElementById("two").animate(
twoK,
twoR
)
},5000);
},10000);
setTimeout(function(){document.getElementById("three").animate(
threeK,
threeT
);
setTimeout(function (){document.getElementById("three").animate(
threeK,
threeR
)
},5000);
},20000);

}

var addComment = function(comment) {
  document.getElementById("comments").innerHTML += comment;
  document.getElementById("comments").innerHTML += "<br>";
}

var loadComments = function() {
  var i = Number(0);
  while(localStorage.getItem("comment" + i.toString())) {
    addComment(localStorage.getItem("comment" + i.toString()));
    i++;
  }
}

var newComment = function() {
  var i = Number(0);
  while(localStorage.getItem("comment" + i.toString())) i++;
  i++;
  addComment(localStorage.getItem("comment" + i.toString()));
}
