console.log("Script file is loaded");

let checkboxes = document.getElementsByName('delete');
let delete_ids = [];

// storing the ids in delete_ids array onchanging
const checkedboxes = () => {
    delete_ids = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            delete_ids.push(checkboxes[i].value)
        }
    }
    console.log(delete_ids);
}

const isValidDate = () => {
    const d = new Date();
    let date=document.getElementById('date-input').value;
    console.log(date);
}

// when delete button in clicked
const del = () => {
    console.log(typeof (delete_ids));
    $.ajax({
        type: 'POST',
        url: '/delete-task?delete_ids=' + delete_ids,
        success: function (data) {
            console.log('success');
        },
        error: function (error) {
            console.log('error');
        }
    });
    window.location.reload(true);
}

