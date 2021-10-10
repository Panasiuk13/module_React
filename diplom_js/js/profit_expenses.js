let newButtonExpenses = document.querySelector('.js-expenses');
let newButtonProfit = document.querySelector('.js-profit');

let btnNewOperation = document.querySelector('.js-add-operation');
let newOperationSum = document.querySelector('.js-operation__sum');
let newOperationCategory = document.querySelector('.js-operation__category');
let newOperationDate = document.querySelector('.js-operation__input');

newButtonExpenses.addEventListener('click', function(){ toggleFormOperation('expenses') });
newButtonProfit.addEventListener('click', function(){ toggleFormOperation('profit') });
btnNewOperation.addEventListener('click', addOperation);

function toggleFormOperation(operation) {
    activeOperation = operation;

    renderFormOperation(operation);
    renderTotal();
}

function renderFormOperation(operation){
    newOperationSum.placeholder = `Sum ${operation}`;
    btnNewOperation.value = `Add ${operation}`;
}

function addOperation(e){
    e.preventDefault();

    let valueSum = newOperationSum.value;
    let valueCategory = newOperationCategory.value;
    let valueDate = newOperationDate.value;

    let newOperation = {
        sum: valueSum,
        category: valueCategory,
        date: valueDate,
    };

    if (activeOperation === 'expenses'){
        expenses.push(newOperation);
    } else if(activeOperation === 'profit'){
        profit.push(newOperation);
    }

    clearForm();
    renderTotal();

}

function renderFinancialRecordDate() {
    const selectData = prepareDataForCategoriesSelect(categories);
    updateHTMLElementContent_select(newOperationCategory, selectData);

    clearForm();
}


function clearForm() {
    newOperationCategory.value = '';
    newOperationSum.value = '';
    newOperationDate.value = getDateNow();
}

