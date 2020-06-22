//Reference Elements
const nameInput = document.getElementById("name");
const boxNoInput = document.getElementById("boxNo");
const phoneNoInput = document.getElementById("phoneNo");
const relationshipInput = document.getElementById("relationship");
const percentInput = document.getElementById("percent");


const submit = document.getElementById("submit");
const tableBody = document.getElementById("tableItem");

//Method to pick values of a given Element;
const getElementValue =(element) => {
    return element.value;
};

const UserElement = (user) => {
   
    
//use the getElement method to get the value of the inputs
const nameValue= document.getElementvalue( nameInput);
const boxNoValue = document.getElementValue(boxNoInput);
const phoneNoValue = document.getElementValue(phoneNoInput);
const relationshipValue = document.getElementValue(relationshipInput);
const percentValue = document.getElementValue(percentInput);


    const tableRow = document.createElement("tr");
    const nameTd = document.createElement("td");
    nameTd.innerHTML = nameValue;
    tableRow.appendChild(nameTd);

    const boxNoTd = document.createElement("td");
    boxNoTd.innerHTML = boxNoValue;
    tableRow.appendChild(boxNoTd);

    const phoneNoTd = document.createElement("td");
    phoneNoTd.innerHTML = phoneNoValue;
    tableRow.appendChild(phoneNoTd);

    const relationshipTd = document.createElement("td");
    relationshipTd.innerHTML = relationshipValue;
    tableRow.appendChild(relationshipTd);

    const percentTd = document.createElement("td");
    percentTd.innerHTML = percentValue;
    tableRow.appendChild(percentTd);
  
    

    nameInput.Value = "";
    boxNoInput.value = "";
    phoneNoInput.Value = "";
    relationshipInput.Value = "";
     percentInput.Value = "";
       
}
//when the submit button is clicked, get the input values and attach to the kinList backend file;
submit.addEventListener("click", (event) => {
    event.preventDefault();
    const inputElementValue = element.value;
    if (inputElementValue ==="") {
alert("Please enter Nominee");
    } else {
        UserElement(inputElementValue)
    }
});
