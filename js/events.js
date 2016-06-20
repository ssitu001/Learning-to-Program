var greeting = document.getElementById("greeting");

greeting.addEventListener('click', function() {
  greeting.innerHTML.match(/World/) ?
    greeting.innerHTML = 'Ola, mundo!' :
    greeting.innerHTML = 'Hello, World!';
});