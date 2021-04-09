// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//Handles Response Error Codes
fetch('http://mimicServer.example.com').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (anyData) {
	console.log(anyData);
}).catch(function (error) {
	console.warn('Does Not Exist.', error);
});

// Creates a heart button
$(".heart.fa").click(function() {
  $(this).toggleClass("fa-heart fa-heart-o");
});




---------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
