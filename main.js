// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

fetch (imgURL)
  .then (res => res.json())
  .then (showImg)
const showImg = (jsonImg) => {
  const imgCall = document.querySelector("#image_card")
  imgCall.dataset.id = jsonImg.id
  imgCall.innerHTML = `
    <img src="${jsonImg.url}" id="image" data-id="${jsonImg.id}"/>
    <h4 id="name">${jsonImg.name}</h4>
    <span>Likes:
      <span id="likes">${jsonImg.like_count}</span>
    </span>
    <button id="like_button">Like</button>
  `
}

const showImg = (jsonImg) => {
  const imgCall = document.querySelector("#image_card")
  imgCall.dataset.id = jsonImg.id
  imgCall.innerHTML = `
    <img src="${jsonImg.url}" id="image" data-id="${jsonImg.id}"/>
    <h4 id="name">${jsonImg.name}</h4>
    <span>Likes:
      <span id="likes">${jsonImg.like_count}</span>
    </span>
    <button id="like_button">Like</button>
  ` 
  const myButton = document.querySelector("#like_button")
  myButton.addEventListener("click", likeButton)
}

const likeButton = (event) => {
  id = parseInt(event.target.parentElement.dataset.id)
  let likes = document.querySelector("#likes")
  num1 = parseInt(likes.innerText)
  num1 += 1
  likes.innerText = num1
  fetch (likeURL, {
    method: "POST",
    headers: {
      "Accept": 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify ({
      image_id: id
    })
  })
}

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
