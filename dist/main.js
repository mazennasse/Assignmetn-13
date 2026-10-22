class User {
    Id;
    name;
    email;
    password;
    phone;
    age;
    notesBook = [];
    constructor(Id, name, email, password, phone, age) {
        this.Id = Id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this.age = age;
    }
    displayInfo() {
        console.log(`user id ${this.Id} his name is ${this.name} and his email ${this.email} phone number ${this.phone} and his age is ${this.age}`);
    }
    addNotebook(noteBook) {
        this.notesBook.push(noteBook);
    }
    removeNotebook(noteBookId) {
        this.notesBook = this.notesBook.filter((e) => { return e.id != noteBookId; });
    }
}
class Admin extends User {
    constructor(Id, name, email, password, phone, age) {
        super(Id, name, email, password, phone, age);
    }
    manageNotes() { }
}
class Note {
    Id;
    title;
    content;
    userId;
    constructor(Id, title, content, userId) {
        this.Id = Id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return `note content ${this.content}`;
    }
}
class NoteBook {
    id;
    notes = [];
    constructor(id) {
        this.id = id;
    }
    addNote(id, title, content, userId) {
        const note = new Note(id, title, content, userId);
        this.notes.push(note);
    }
    removeNote(id) {
        this.notes = this.notes.filter((e) => { return e.Id != id; });
    }
}
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((e) => e != item);
    }
    getAllItems() {
        return this.items;
    }
}
export {};
