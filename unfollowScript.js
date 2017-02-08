//unfollow everyone on the page
a = setInterval(function() {
  window.scrollTo(0, document.body.scrollHeight);
  [].slice.call(document.querySelectorAll('.unfollow-text')).forEach(function(button) {
    button.click();
  });
}, 500);
