function flavorArray(event){
  event.preventDefault();
  const flav1 = document.getElementById('flav1').value;
  const flav2 = document.getElementById('flav2').value;
  const flav3 = document.getElementById('flav3').value;
  let resultsArray = [];
  
  resultsArray.push(flav1, flav2, flav3);
  resultsArray.forEach(function(result) {
    let body = document.querySelector('body');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = result;
    body.append(ul);
    ul.append(li);
  });

}
window.addEventListener("load", function() {
  const form = document.getElementById("flavors");
  form.addEventListener("submit", flavorArray);
});