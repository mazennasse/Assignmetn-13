class User{
    public age:number
    private notesBook:NoteBook[]=[]
    constructor(protected Id:number,public name:string,public email:string ,private password:string,public phone :string,age:number){
          if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this.age=age
    }
    displayInfo(){
        console.log(`user id ${this.Id} his name is ${this.name} and his email ${this.email} phone number ${this.phone} and his age is ${this.age}`)
    }
    addNotebook(noteBook:NoteBook){
        this.notesBook.push(noteBook)

    }
    removeNotebook(noteBookId:number){
        this.notesBook=this.notesBook.filter((e)=>{return e.id!=noteBookId})
    }
}

class Admin extends User{
    constructor( Id:number, name:string, email:string ,password:string, phone :string,age:number){
        super(Id,name,email,password,phone,age)
    }
    manageNotes(): void {
    console.log("Admin is managing notes");
}

}

class Note{
    constructor(public Id:number,public title:string,public content:string ,public userId:User){
       
    }
    preview(){
        return `note content ${this.content}`
    }
}



class NoteBook {
    private notes:Note[]=[]
    constructor(public id:number){

    }
    addNote(id:number,title:string,content:string,userId:User){
        const note=new Note(id,title,content,userId)
        this.notes.push(note)

    }
    removeNote(id:number){
        this.notes=this.notes.filter((e)=>{return e.Id !=id})
    }
}
class Storage<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    removeItem(item: T): void {
        this.items = this.items.filter((e) => e != item);
    }

    getAllItems(): T[] {
        return this.items;
    }
}