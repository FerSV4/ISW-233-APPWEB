import { TodoList, TodoItem } from "./todoList.js"; 
export class Command {
    name;
    args;
    constructor(name, args) {
        this.name = name;
        this.args = args;
    }
}
export const Commands = {
    ADD: "add",
    DELETE: "delete",
};

export const CommandExecutor ={
    execute(command){
        const todoListInstance = TodoList.getInstance();

        switch(command.name){
            case Commands.ADD:

                const description = command.args.description;
                if(description){ 
                    const newTodo = new TodoItem(description);
                    todoListInstance.add(newTodo);
                    // }
                }
                break;
            case Commands.DELETE:
                const todoIdToDelete = command.args.id; 
                if (todoIdToDelete) {

                    todoListInstance.delete({ text: todoIdToDelete });
                }
                break;
        }
    },
};