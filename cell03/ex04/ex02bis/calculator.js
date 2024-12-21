$(document).ready(() => {
  const logAlert = (msg) => {
    alert(msg);
    console.log(msg);
  };
  function calculate() {
    const leftOperand = $("#leftOperand").val();
    const rightOperand =$("#rightOperand").val();
    const operator = $("#operator").val();

    if (!isPositiveInteger(leftOperand) || !isPositiveInteger(rightOperand)) {
      alert("Error :(");
      console.error("Error :(");
      return;
    }
    if ((leftOperand)>2147483647||(rightOperand)>2147483647) {
      alert("Error :(");
      console.error("Error :(");
      return;
    }
    const left = parseInt(leftOperand);
    const right = parseInt(rightOperand);
    let result;
    switch (operator) {
      case "+":
        result = left + right;
        break;
      case "-":
        result = left - right;
        break;
      case "*":
        result = left * right;
        break;
      case "/":
      case "%":
        if (right === 0) {
          logAlert("It's over 9000!");
          return;
        }
        result = operator === "/" ? left / right : left % right;
        break;
      default:
        logAlert("Error :(");
        return;
    }

    logAlert(`Result: ${result}`);
  }
  function isPositiveInteger(value) {
    return /^\d+$/.test(value);
  }
  $("#calculateBtn").click(calculate);

  setInterval(() => {
    alert("Please, use me...");
  }, 30 * 1000);
});
