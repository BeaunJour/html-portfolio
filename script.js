// Get all dropdown elements
var dropdowns = document.getElementsByClassName('dropdown');

// Add event listeners to each dropdown
for (var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener('mouseover', function() {
    this.getElementsByClassName('dropdown-content')[0].style.display = 'block';
  });

  dropdowns[i].addEventListener('mouseout', function() {
    this.getElementsByClassName('dropdown-content')[0].style.display = 'none';
  });
}

// Get the grade levels dropdown
var gradeLevelsDropdown = document.querySelector('.dropdown-content');

// Get all the grade level links
var gradeLevelLinks = gradeLevelsDropdown.getElementsByTagName('a');

// Add event listeners to each grade level link
for (var j = 0; j < gradeLevelLinks.length; j++) {
  gradeLevelLinks[j].addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
    this.style.color = 'white';
  });

  gradeLevelLinks[j].addEventListener('mouseout', function() {
    this.style.backgroundColor = 'transparent';
    this.style.color = '#000';
  });
}
