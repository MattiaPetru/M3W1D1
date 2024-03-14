
window.onload = function () {
  let twitter = document.querySelector(".blog-sidebar div:nth-child(3) .list-unstyled li:nth-of-type(2)")

  twitter.remove()


  let readMore = document.querySelector(".stretched-link")


}

for (let author of document.querySelectorAll(".blog-post-meta a"))
  author.addEventListener("mouseover", function (event) {
    alert(event.target.innerText);
  });