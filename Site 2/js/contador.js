document.addEventListener("DOMContentLoaded", function () {
    let visits = localStorage.getItem("visitCount") || 0; 
    visits++; 
    localStorage.setItem("visitCount", visits); 
    document.getElementById("counter").textContent = visits; 
});
