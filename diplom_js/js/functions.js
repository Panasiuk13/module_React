function updateHTMLElementContent_select(elementSelect, data) {
    data.forEach (function(optionRecord) {
        const elementOption = document.createElement('option');
        elementOption.value = optionRecord.value;
        elementOption.textContent = optionRecord.label;

        elementSelect.appendChild(elementOption);
    });
}

function getDateNow() {
    return new Date().toISOString().slice(0, 10);
}

function prepareDataForCategoriesSelect(categories) {
    let selectData = [];
    selectData.push({
        value: '',
        label: 'Категория'
    });
    categories.forEach(function(category) {
        selectData.push({
            value: category,
            label: category
        });
    });
    return selectData;
}