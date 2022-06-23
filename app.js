let input = prompt('what would you like to do?')
const todos = ['collect eggs', 'clean room']
while (input !== 'quit' && input !== 'q'){
    if(input === 'list') {
console.log ('********')
for (let i = 0; i < todos.length; i+= 1){
    console.log (`${i}: ${todos[i]}`);
}
console.log ('********')
    } else if (input === 'new') {
        const newTodo = prompt ('ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt ('Enter an index to delete:'));
        if (!Number.isNaN(index))
        const deleted todos.splice(index,1);
        console.log (`ok, deleted ${deleted[0]}`);
    }
    input = prompt('what would you like to do?')
}
console.log (alert('You have quit the app'))