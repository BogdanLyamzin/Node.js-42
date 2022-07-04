const fs = require("fs/promises");
// const fs = require("fs").promises;

const fileOperation = async({filePath, action, data}) => {
    switch(action) {
        case "read":
            const text = await fs.readFile(filePath, "utf-8");
            console.log(text);
            // const data = await fs.readFile(filePath);
            // const text = data.toString();
            // console.log(text);
            break;
        case "add":
            await fs.appendFile(filePath, data);
            break;
        case "replace":
            const result = await fs.writeFile(filePath, data);
            console.log(result);
            break;
    }
}

// fileOperation({filePath: "./files/file.txt", action: "read"})
// fileOperation({filePath: "./files/file.txt", action: "add", data: "\nТак говорил Заратустра"})
// fileOperation({filePath: "./files/file.txt", action: "replace", data: "Так говорил Заратустра"})
// fileOperation({filePath: "./files/file2.txt", action: "add", data: "\nТак говорил Заратустра"})
fileOperation({filePath: "./files/file3.txt", action: "replace", data: "Так говорил Заратустра"})
