// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
  function toggleLike() {
    mimicServerCall
    document.addEventListener("click", e => {
      if (e.target.matches('.like-glyph')) {
        const user = e.target.parentElement.parentElement.parentElement;
        console.log(user);
        const like = user.querySelector('.like-glyph');
        console.log(like);

        mimicServerCall()
        .then(function(obj) {
          console.log(obj)
          toggleLikeColor(like)
        })
        .catch(function(error) {
          console.log(error)
          const modal = document.getElementById("modal")
          modal.innerHTML = error
          const notHidden = modal.className = ''
          setTimeout(function() {
            modal.className = 'hidden';
          }, 5000)
        })
      }
    }
  )}

  // document.addEventListener("click", toggleLikeColor(like))

  toggleLike()

  function toggleLikeColor(element) {
    if (element.innerHTML === EMPTY_HEART) {
      element.className = "activated-heart"
      element.innerHTML = FULL_HEART
    } else {
      element.innerHTML = EMPTY_HEART
      element.className = ""
    }
  }

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

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
