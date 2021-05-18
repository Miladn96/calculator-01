var incomeNumber,
  dataArray = [''],
  numberIndex = 0,
  numberResult = 0,
  result = document.getElementById("result"),
  showDoc = document.getElementById("disply");

function catchFunction(incomeNumber) {
  let num;
  switch (incomeNumber) {
    case 'prz': {
      alert("هنوز پرانتز کار نمیکند");
      break;
    }
    case 'dot': {
      dataArray[numberIndex] += '.'.toString();
      showDoc.innerHTML = dataArray[numberIndex];
      break;
    }
    case 'mines': {
      numberIndex++;
      dataArray[numberIndex] = "-";
      showDoc.innerHTML += dataArray[numberIndex];
      numberIndex++;
      dataArray[numberIndex] = '';
      break;
    }
    case 'multiple': {
      numberIndex++;
      dataArray[numberIndex] = '&#215';
      showDoc.innerHTML += dataArray[numberIndex];
      numberIndex++;
      dataArray[numberIndex] = "";
      break;
    }
    case 'division': {
      numberIndex++;
      dataArray[numberIndex] = '&#247';
      showDoc.innerHTML += dataArray[numberIndex];
      numberIndex++;
      dataArray[numberIndex] = "";
      break;
    }
    case 'plus': {
      numberIndex++;
      dataArray[numberIndex] = "+";
      showDoc.innerHTML += dataArray[numberIndex];
      numberIndex++;
      dataArray[numberIndex] = "";
      break;
    }
    default: {
      dataArray[numberIndex] += incomeNumber.toString();
      showDoc.innerHTML += incomeNumber.toString();
      break;
    }
  }
  num = Number(dataArray[numberIndex]);
}

function calculatMinesPlus() {
  alert("فعلا این کار نمیکند");
}

function clearFunction() {
  dataArray = [""];
  numberIndex = 0;
  numberResult = 0;
  result.innerHTML='';
  showDoc.innerHTML='';
}

function calculatFunction() {
  numberIndex++;
  dataArray[numberIndex] = "=";
  showDoc.innerHTML += dataArray[numberIndex];
  numberIndex++;
  dataArray[numberIndex] = "";
  for (var i = 0; i <= dataArray.length; i++) {
    if (i == 0) {
      numberResult = Number(dataArray[0]);
    } else if (i % 2 == 0) {
      switch (dataArray[i - 1]) {
        case "+":
          numberResult += Number(dataArray[i]);
          break;
        case "-":
          numberResult -= Number(dataArray[i]);
          break;
        case "&#247": //divistion
          numberResult /= Number(dataArray[i]);
          break;
        case "&#215": //multi
          numberResult *= Number(dataArray[i]);
          break;
      }
    }
    result.innerHTML = numberResult;
  }
}