var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // Toggle the "active" class on the clicked element
    this.classList.toggle("active");

    // Select the content associated with the clicked element
    var content = this.nextElementSibling;

    // Toggle the max height of the content to expand or collapse it
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

