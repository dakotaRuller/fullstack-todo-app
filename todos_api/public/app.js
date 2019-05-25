/* global $ */
$(document).ready(() => {

    $.getJSON("/api/todos/")
        .then(addToPage)
        .catch(err => console.log(err));

    $("#todoInput").keypress(e => {
        if (e.which == 13) {
            createItem();
        }
    });


    $('.list').on('click', 'span', function(e) {
        e.stopPropagation();
        updateOrDeleteItem($(this).parent(), "DELETE")
    });

    $('.list').on('click', 'li',  function() {
        updateOrDeleteItem($(this), "PUT");
    });

});

let addItem = item => {
    let newItem = $(`<li class="task">${item.name}<span>X</span></li>`);
    newItem.data('id', item._id);
    newItem.data('completed', item.completed);
    if(item.completed) {
        newItem.addClass('done');
    }
    $('.list').append(newItem);
};

let addToPage = todo => {
    todo.map(newItem => addItem(newItem));
};

let createItem = () => {
    let usrInput = $('#todoInput').val();
    console.log(usrInput);
    $.post("/api/todos/", {name: usrInput})
        .then(newItem => {
            $('#todoInput').val('');
            addItem(newItem);
        })
        .catch(err => console.log(err))
};

//Using a regular function expression on this due to lexical "this"  scoping issues with fat arrow function expression
let updateOrDeleteItem = function(item, type) {
    let selectedItem = item.data('id');
    let url = `/api/todos/${selectedItem}`;
    let isDone = !item.data('completed');
    let updateData = {completed: isDone};
    if(type == "DELETE") {
        $.ajax({
            method: 'DELETE',
            url: url
        })
            .then((data) => {
                item.remove();
                console.log(data);
            })
            .catch(err => console.log(err))
    } else if(type == "PUT") {
        $.ajax({
            method: "PUT",
            url: url,
            data: updateData
        })
            .then(() => {
                console.log(isDone);
                item.data('completed', isDone);
                item.toggleClass("done");
            })
            .catch(err => console.log(err));
    } else {
        alert("Invalid request");
    }

};


// Fisher Yates Bitch
Array.prototype.shuffle = function() {
    let i = this.length;
    let j;
    // let temp;
    while(--i > 0) {
        j = Math.floor(Math.random());
        // temp = this[j];
        // this[j] = this[i];
        // this[i] = temp;
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
};

let arr = [1, 2, 6, 5, 50, 40, 8, 9, 7, 8];

console.log(arr.shuffle());