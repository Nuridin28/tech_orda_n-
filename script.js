const addInput = document.querySelector(".add-user-input"),
              idInput = document.querySelector(".add-user-id-input"),
              addBtn = document.querySelector(".add-btn"),
              getInput = document.querySelector(".get-user-input"),
              getBtn = document.querySelector(".get-btn"),
              deleteInput = document.querySelector(".delete-user-input"),
              deleteBtn = document.querySelector(".delete-btn"),
              findInput = document.querySelector(".find-user-input"),
              findBtn = document.querySelector(".find-btn"),
              outputDiv = document.getElementById("output");

let db = [];

class UserManager {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static addUser(id, name) {
        db.push({
            id: id,
            name: name
        });
        outputDiv.innerText = `User ${name} added successfully`;
        UserManager.displayDB();
    }

    static getUser(getID) {
        for (let i = 0; i < db.length; i++) {
            if (db[i].id == getID) {
                console.log(db[i].name);
                outputDiv.innerText = `User Name: ${db[i].name}`;
                return db[i].name;
            }
        }
        outputDiv.innerText = "User not found";
        return null;
    }

    static deleteUser(deleteID) {
        for (let i = 0; i < db.length; i++) {
            if (db[i].id == deleteID) {
                db.splice(i, 1);
                console.log(true);
                outputDiv.innerText = `User with ID ${deleteID} deleted`;
                UserManager.displayDB();
                return true;
            }
        }
        console.log(false);
        outputDiv.innerText = "User not found";
        return false;
    }

    static findUserByName(name) {
        let ids = [];
        for (let i = 0; i < db.length; i++) {
            if (db[i].name === name) {
                ids.push(db[i].id);
            }
        }
        ids.sort()
        console.log(ids);
        outputDiv.innerText = `User IDs with name ${name}: ${ids.join(", ")}`;
        return ids;
    }

    static displayDB() {
        console.log(db);
    }
}

addBtn.addEventListener("click", () => {
    const id = parseInt(idInput.value);
    const name = addInput.value;
    if (id && name) {
        UserManager.addUser(id, name);
        idInput.value = '';
        addInput.value = '';
    } else {
        outputDiv.innerText = 'Please provide both ID and name';
    }
});

getBtn.addEventListener("click", () => {
    const id = parseInt(getInput.value);
    if (id) {
        UserManager.getUser(id);
        getInput.value = '';
    } else {
        outputDiv.innerText = 'Please provide an ID';
    }
});

deleteBtn.addEventListener("click", () => {
    const id = parseInt(deleteInput.value);
    if (id) {
        UserManager.deleteUser(id);
        deleteInput.value = '';
    } else {
        outputDiv.innerText = 'Please provide an ID';
    }
});

findBtn.addEventListener("click", () => {
    const name = findInput.value;
    if (name) {
        UserManager.findUserByName(name);
        findInput.value = '';
    } else {
        outputDiv.innerText = 'Please provide a name';
    }
});