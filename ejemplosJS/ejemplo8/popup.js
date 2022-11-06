window.onload = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (activeTab) => {
    const tabId = activeTab[0].id;
    mostrarGato();
  });
};

const mostrarGato = () => {
  const gato = document.getElementById("cat_image");
  gato.src = 'https://cataas.com/c/s/Hola%20mundo?width=350';
};
