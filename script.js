// JavaScript Document
var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");
var searchResults = document.getElementById("searchResults");

searchButton.addEventListener("click", function() {
    var searchTerm = searchInput.value;
    searchResults.innerHTML = "Search results for: " + searchTerm;
});

var backToTopSections = document.getElementsByClassName('back-to-top-section');

for (var i = 0; i < backToTopSections.length; i++) {
  var backToTopButton = backToTopSections[i].getElementsByClassName('back-to-top')[0];

  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    var scrollOptions = {
      top: 0,
      behavior: 'smooth',
      duration: 2000 // Adjust the duration as needed
    };

    // Check if the scrollIntoView method supports the scrollOptions object
    if ('scrollBehavior' in document.documentElement.style) {
      window.scroll(scrollOptions);
    } else {
      window.scrollTo(scrollOptions);
    }
  });
}

window.addEventListener('scroll', function() {
  for (var i = 0; i < backToTopSections.length; i++) {
    var backToTopButton = backToTopSections[i].getElementsByClassName('back-to-top')[0];
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  }
});
