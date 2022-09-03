let cashBtn = document.querySelector("#cash-btn");
let cashTable = document.querySelector("#cash-table");
let invalidAmount = document.querySelector(".invalid-amount");
let amount;
const notes = [2000, 500, 200, 100, 50, 10, 5, 1];

function amountCheck() {
  hideInvalidAmount();
  let billAmount = document.querySelector("#bill-amount");
  let cashGiven = document.querySelector("#cash-given");
  billAmount = parseInt(billAmount.value);
  console.log(billAmount);
  cashGiven = parseInt(cashGiven.value);
  console.log(cashGiven);
  if (billAmount > 0) {
    if (cashGiven < billAmount) {
      invalidAmount.textContent = "Invalid Amount";
    } else {
      amount = cashGiven - billAmount;
      tableRepresent(amount);
    }
  } else {
    invalidAmount.textContent = "Invalid Amount";
  }
}
function tableRepresent(amount) {
  let noteArray = [];
  let a;
  let i;
  for (i = 0; i < notes.length; i++) {
    if (amount != 0) {
      a = Math.floor(amount / notes[i]);
      noteArray.push(a);
      while (a--) {
        amount = amount - notes[i];
      }
    }
  }
  let table = "";
  let content = "";
  let note = "";
  for (let i = 0; i < noteArray.length; i++) {
    content += `<td>${noteArray[i]}</td>`;
    note += `<td>${notes[i]}</td>`;
  }
  table += `
   <tr>
            <th>No.of Notes given</th>
            ${content}
          </tr>
          <tr>
            <th>Notes</th>
           ${note}
            
          </tr>
    
    `;
  cashTable.innerHTML = table;
}
function hideInvalidAmount() {
  invalidAmount.textContent = "";
}
cashBtn.addEventListener("click", amountCheck);
