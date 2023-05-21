document.addEventListener("DOMContentLoaded", function() {
    var abrirGuia = document.getElementById("abrir-guia");
    abrirGuia.addEventListener("click", function() {
      chrome.tabs.create({ url: "https://www.google.com" });
    });
  });
  