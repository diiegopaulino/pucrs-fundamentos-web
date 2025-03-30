// Validação de campos obrigatórios
const fields = document.querySelectorAll("[required]");

function customValidation(event) {
  const field = event.target;

  function verifyErrors() {
    let foundError = false;
    for (let error in field.validity) {
      if (error !== "customError" && field.validity[error]) {
        foundError = error;
      }
    }
    return foundError;
  }

  const error = verifyErrors();

  if (error) {
    field.setCustomValidity("Este campo é obrigatório");
  } else {
    field.setCustomValidity("");
  }
}

fields.forEach(field => {
  field.addEventListener("invalid", customValidation);
});

// Confirmação ao enviar formulário
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
  });
}

// Função temporal para agendamento
const dataHora = document.getElementById("dataHora");
if (dataHora) {
  dataHora.min = new Date().toISOString().slice(0, 16);
}