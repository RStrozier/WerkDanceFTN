const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add your code here to run when the element is in view
      console.log(entry.target.id + ' is in view');
    }
  });
}, options);

// Get all the elements you want to observe
const elementsToObserve = document.querySelectorAll('section');

// Loop through the elements and observe each one
elementsToObserve.forEach(element => {
  observer.observe(element);
});