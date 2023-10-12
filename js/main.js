var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // Toggle the "active" class on the clicked element
    this.classList.toggle("active");

    // Select the content associated with the clicked element
    var content = this.nextElementSibling;

    // Close all other open sections
    var allCollapsibles = document.getElementsByClassName("collapsible");
    for (var j = 0; j < allCollapsibles.length; j++) {
      if (allCollapsibles[j] !== this) {
        allCollapsibles[j].classList.remove("active");
        allCollapsibles[j].nextElementSibling.style.maxHeight = null;
      }
    }

    // Toggle the max height of the content to expand or collapse it
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

