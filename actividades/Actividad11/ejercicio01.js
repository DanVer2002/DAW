function isBlank(inputField) {
    if (inputField.type === "checkbox") {
	      if(inputField.checked)
	          return false;
	      return true;
    }
    if (inputField.value === "" ) {
	      return true;
    }
    return false;
}

function paint(inputDiv) {
  inputDiv.style.backgroundColor = 'rgb(170, 0, 0)';
	inputDiv.parentNode.style.backgroundColor = 'rgb(170, 0, 0)';
	inputDiv.parentNode.style.color = 'rgb(255, 255, 255)';
}

function clear(inputDiv){
  inputDiv.style.backgroundColor = 'rgb(255, 255, 255)';
	inputDiv.parentNode.style.backgroundColor = 'rgb(255, 255, 255)';
	inputDiv.parentNode.style.color = 'rgb(0, 0, 0)';
}

window.onload = function() {
  var form = document.getElementById("form");
  var message = document.getElementById("message");
    form.onsubmit = function(e){
	      var requiredInputs = document.querySelectorAll(".required");
	      for (var i=0; i < requiredInputs.length; i++){
	          if(isBlank(requiredInputs[i]) ){
                message.style.backgroundColor = 'rgba(255, 0, 12, 0.5)';
                message.style.border = '1px solid rgb(255, 0, 12)';
                message.innerHTML = "<b>Error</b> Debes proporcionar todos los campos marcados como obligatorios";
                e.preventDefault();
		            paint(requiredInputs[i]);
	          }
	          else{
		            clear(requiredInputs[i]);
	          }
	      }
    }
}
