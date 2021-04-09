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
$(".activated-heart.FULL_HEART").click(function() {
  $(this).toggleClass("HEART_FULL EMPTY_HEART");
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
