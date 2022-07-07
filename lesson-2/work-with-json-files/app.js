const books = require("./books");

const invokeAction = async({action, id, title, author}) => {
    switch(action) {
        case "getAll":
            const allBooks = await books.getAll();
            console.log(allBooks);
            break;
        case "getById":
            const oneBook = await books.getById(id);
            console.log(oneBook);
            break;
        case "add":
            const newBook = await books.add(title, author);
            console.log(newBook);
            break;
        case "updateById":
            const updateBook = await books.updateById(id, title, author);
            console.log(updateBook);
            break;
        case "removeById":
            const removeBook = await books.removeById(id);
            console.log(removeBook);
            break;
    }
}

// invokeAction({action: "getAll"})
// invokeAction({action: "getById", id:"u9kgwNWGi3uUUwh0b8V48"})
// invokeAction({action: "add", title:"Worm", author: "Маккрей"})
// invokeAction({action: "updateById", id: "GCkg1zxvSsboSxIwzZ5_1", title:"Ward", author: "Маккрей"})
invokeAction({action: "removeById", id: "GCkg1zxvSsboSxIwzZ5_1"})