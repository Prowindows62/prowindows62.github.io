function showContent(page) {
    var contentDiv = document.getElementById('content');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        contentDiv.innerHTML = xhr.responseText;
      }
    };
    
    // Load content based on page parameter
    switch (page) {
      case 'home':
        xhr.open('GET', 'home.html', true);
        break;
      case 'about':
        xhr.open('GET', 'about.html', true);
        break;
      case 'services':
        xhr.open('GET', 'services.html', true);
        break;
      case 'servicestor':
        xhr.open('GET', 'servicestor.html', true);
        break;
      default:
	    xhr.open('GET', 'index.html', false);
    }
    
    xhr.send();
  }
  
  // Initial page load
  showContent('home');
