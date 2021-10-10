let elementFinancialContainer = document.querySelectorAll("table#total tbody")[0];

function getActiveOperationData() {
    if (activeOperation === 'expenses') {
        return expenses;
    } else if (activeOperation === 'profit') {
        return profit;
    }
    return [];
}

function renderTotal () {
    let activeOperationData = getActiveOperationData();
    renderTotalData(activeOperationData);
}

function renderTotalData(data) {
    let categoryElement = document.getElementById('filter-category');
    const selectData = prepareDataForCategoriesSelect(categories);
    updateHTMLElementContent_select(categoryElement, selectData);

    elementFinancialContainer.innerHTML = '';

    let order = 1;
    data.forEach(function (operationRecord) {
        elementFinancialContainer.appendChild(templateItemTotal(order, operationRecord));
        order++;
    });
}




function templateItemTotal(order, record){
    let totalTr = document.createElement('tr');
    totalTr.id = 'total_tr_' + order;
    totalTr.className = 'total-tr';

    let totalTdOrder = document.createElement('td');
    totalTdOrder.className = 'total_td';
    totalTdOrder.textContent = order;
    totalTr.appendChild(totalTdOrder);

    let totalTdCategory = document.createElement('td');
    totalTdCategory.id = 'total_category_' + order;
    totalTdCategory.className = 'total_td';
    let totalTdCategorySelect = document.createElement('select');
    totalTdCategorySelect.className = 'js-operation__category input';
    const selectData = prepareDataForCategoriesSelect(categories);
    updateHTMLElementContent_select(totalTdCategorySelect, selectData);
    totalTdCategorySelect.value = record.category;
    totalTdCategorySelect.disabled = true;
    totalTdCategory.appendChild(totalTdCategorySelect);
    totalTr.appendChild(totalTdCategory);

    let totalTdSum = document.createElement('td');
    totalTdSum.id = 'total_sum_' + order;
    totalTdSum.className = 'total_td';
    let totalTdInput = document.createElement('input');
    totalTdInput.className = 'total_input';
    totalTdInput.value = record.sum;
    totalTdInput.disabled = true;
    totalTdSum.appendChild(totalTdInput);
    totalTr.appendChild(totalTdSum);


    let totalTdDate = document.createElement('td');
    totalTdDate.id = 'total_date_' + order;
    totalTdDate.className = 'total_td';
    let totalTdInputDate = document.createElement('input');
    totalTdInputDate.className = 'total_input';
    totalTdInputDate.value = record.date;
    totalTdInputDate.type = 'date';
    totalTdInputDate.disabled = true;
    totalTdDate.appendChild(totalTdInputDate);
    totalTr.appendChild(totalTdDate);

    let controlTotal = document.createElement('td');

    let renameTotal = document.createElement('button');
    renameTotal.id = 'total_tr_rename_' + order;
    renameTotal.textContent = 'Rename';
    renameTotal.addEventListener('click', function(event) {
        event.preventDefault();

        totalTdCategorySelect.disabled = false;
        totalTdInput.disabled = false;
        totalTdInputDate.disabled = false;

        renameTotal.style.display = 'none';
        document.getElementById('total_tr_save_' + order).style.display = 'inline';

    });
    controlTotal.appendChild(renameTotal);

    let saveTotal = document.createElement('button');
    saveTotal.style.display = 'none';
    saveTotal.id = 'total_tr_save_' + order;
    saveTotal.textContent = 'Save';
    saveTotal.addEventListener('click', function(event) {
        event.preventDefault();

        totalTdCategorySelect.disabled = true;
        totalTdInput.disabled = true;
        totalTdInputDate.disabled = true;


        const elementButton = event.target;
        const orderNumber = Number((elementButton.id).replace('total_tr_save_', ''));

        let activeData = getActiveOperationData();
        let activeRecord = activeData[orderNumber - 1];

        activeRecord.sum = Number(totalTdInput.value);
        activeRecord.category = totalTdCategorySelect.value;
        activeRecord.date = totalTdInputDate.value;


        saveTotal.style.display = 'none';
        renameTotal.style.display = 'inline';

    });
    controlTotal.appendChild(saveTotal);

    let deleteTotal = document.createElement('button');
    deleteTotal.id = 'total_tr_delete_' + order;
    deleteTotal.textContent = 'Delete';
    deleteTotal.addEventListener('click', function(event) {
        event.preventDefault();

        const elementButton = event.target;
        const orderNumber = Number((elementButton.id).replace('total_tr_delete_', ''));

        let activeData = getActiveOperationData();
        activeData.splice((orderNumber - 1), 1);

        renderTotal();
    });
    controlTotal.appendChild(deleteTotal);

    totalTr.appendChild(controlTotal);


    return totalTr;

}
let btnApply = document.getElementsByClassName("total-apply")[0];
btnApply.addEventListener("click", applyFilter);


function applyFilter(e){
    e.preventDefault();


    let categoryFilter = document.getElementById('filter-category').value;
    let sumFrom = document.getElementById('filter-sum-from').value;
    let sumTo = document.getElementById('filter-sum-to').value;
    let dateFrom = document.getElementById('filter-date-from').value;
    let dateTo = document.getElementById('filter-date-to').value;


    let activeOperationData = getActiveOperationData();
        let filteredData = activeOperationData.filter((el) => {
            let getDateMs = function(dateStr) {
                const date = new Date(dateStr);
                return date.getTime();
            };
            let isValidRecord = true;
            if (categoryFilter !== '') {
                isValidRecord &= (el.category === categoryFilter);
            }
            if (sumFrom !== '') {
                isValidRecord &= (el.sum >= Number(sumFrom));
            }
            if (sumTo !== '') {
                isValidRecord &= (el.sum <= Number(sumTo));
            }
            if (dateFrom !== '') {
                isValidRecord &= (getDateMs(el.date) >= getDateMs(dateFrom));
            }
            if (dateTo !== '') {
                isValidRecord &= (getDateMs(el.date) <= getDateMs(dateTo));
            }
            return isValidRecord;
        });

        renderTotalData(filteredData);
}






