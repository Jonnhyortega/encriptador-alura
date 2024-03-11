// PAGINA SUPUERPUESTA
// OVERLAY PAGE
function cerrarPaginaSuperPuesta() {
  var overlay = document.getElementById("overlay");
  var closeButton = document.getElementById("close-overlay");
  overlay.style.display = "none";
}
// PAGINA SUPUERPUESTA
// OVERLAY PAGE

// ---------------------------------

// Funcion de encriptacion
// Encryption function
function encriptarTexto() {
  let inputText = document.getElementById("inputText").value;
  let outputText = "";
  let banner = document.getElementById("banner");

  for (var i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + 1) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + 1) % 26) + 97;
    }
    outputText += String.fromCharCode(charCode);
  }

  if (banner.classList.contains("showText")) {
    banner.classList.remove("showText");
  }

  banner.classList.add("closeText");
  document.getElementById("outputText").value = outputText;
}
// Funcion de encriptacion
// Encryption function

// ---------------------------------

// Funcion para reiniciar todo.
// Function to reset everything.

function reset() {
  let banner = document.getElementById("banner");

  let inputText = document.getElementById("inputText");
  inputText.value = "";

  let outputText = document.getElementById("outputText");
  outputText.value = "";

  if (banner.classList.contains("closeText")) {
    banner.classList.remove("closeText");
    banner.classList.add("showText");
  } else if (banner.classList.contains("showText")) {
    banner.classList.remove("showText");
  }
}

// Funcion para reiniciar todo.
// Function to reset everything.

// ---------------------------------

// ENCRIPTADOR DE TEXTO
//Encryption function
function desencriptarTexto() {
  let inputText = document.getElementById("inputText").value;
  let outputText = "";
  // -----------
  for (var i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + 26) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + 26) % 26) + 97;
    }
    outputText += String.fromCharCode(charCode);
  }

  document.getElementById("outputText").value = outputText;
}
// FUNCION DE DESENCRIPTACION
// Decryption function
