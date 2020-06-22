
//Reference Elements
const entranceFeePaidDateInput = document.getElementById("entranceFeePaidDate");
const recieptNoInput = document.getElementById("recieptNo");
const admissionDateInput = document.getElementById("admissionDate");
const introducedByInput = document.getElementById("introducedBy");
const secondedByInput = document.getElementById("secondedBy");
const dateOfCessationOfMembershipInput = document.getElementById("dateOfCessationOfMembership");
const allocatedMembershipNumberAndCellInput = document.getElementById("allocatedMembershipNumberAndCell");

const submit = document.getElementById("submit");
const tableBody = document.getElementById("tableBody");

//Method to pick values of a given Element;
const getElementValue =(element) => {
    return element.value;
};

const UserElement = (user) => {
   
    
//use the getElement method to get the value of the inputs
const entranceFeePaidDateValue= document.getElementvalue( entranceFeePaidDateInput);
const recieptNoValue = document.getElementValue(recieptNoInput);
const admissionDateValue = document.getElementValue(admissionDateInput);
const introducedByValue = document.getElementValue(introducedByInput);
const secondedByValue = document.getElementValue(secondedByInput);
const dateOfCessationOfMembershipValue = document.getElementValue(dateOfCessationOfMembershipInput);
const allocatedMembershipNumberAndCellValue = document.getElementValue(allocatedMembershipNumberAndCellInput);

    const tableRow = document.createElement("tr");
    const entranceFeePaidDateTd = document.createElement("td");
    entranceFeePaidDateTd.innerHTML = entranceFeePaidDateValue;
    tableRow.appendChild(entranceFeePaidDateTd);

    const recieptNoTd = document.createElement("td");
    recieptNoTd.innerHTML = recieptNoValue;
    tableRow.appendChild(recieptNoTd);

    const admissionDateTd = document.createElement("td");
    admissionDateTd.innerHTML = admissionDateValue;
    tableRow.appendChild(admissionDateTd);

    const introducedByTd = document.createElement("td");
    introducedByTd.innerHTML = introducedByValue;
    tableRow.appendChild(introducedByTd);

    const secondedByTd = document.createElement("td");
    secondedByTd.innerHTML = secondedByValue;
    tableRow.appendChild(secondedByTd);
  
    const dateOfCessationOfMembershipTd = document.createElement("td");
    dateOfCessationOfMembershipTd.innerHTML = dateOfCessationOfMembershipValue;
    tableRow.appendChild(dateOfCessationOfMembershipTd);

    const allocatedMembershipNumberAndCellTd = document.createElement("td");
    allocatedMembershipNumberAndCellTd.innerHTML = allocatedMembershipNumberAndCellValue;
    tableRow.appendChild(allocatedMembershipNumberAndCellTd);

    //Edit button on each row
    const editTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.classList.add("btn" ,"btn-primary");
    editBtn.innerHTML = Edit;
    editBtn.appendChild(editBtn);
    tableRow.appendChild(editTd);
    
    editBtn.addEventListener("click", (event) => {
        tableRow.edit();
    });
    //delete button on each row
    const deleteTd = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn" ,"btn-primary");
    deleteBtn.innerHTML = Delete;
    deleteBtn.appendChild(deleteBtn);
    tableRow.appendChild(deleteTd);
    deleteBtn.addEventListener("click", (event) => {
        tableRow.remove;
        tableBody.appendChild(tableRow);
    
    });

    entranceFeePaidDateInput.Value = "";
    recieptNoInput.value = "";
    admissionDateInput.Value = "";
   introducedByInput.Value = "";
     secondedByInput.Value = "";
     dateOfCessationOfMembershipInput.Value = "";
     allocatedMembershipNumberAndCellInput.Value ="";   
}
//when the submit button is clicked, get the input values and attach to the officers backend file;
submit.addEventListener("click", (event) => {
    event.preventDefault();
    const inputElementValue = element.value;
    if (inputElementValue ==="") {
alert("Please enter Details");
    } else {
        UserElement(inputElementValue)
    }
});
