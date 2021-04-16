let store = {}
const init = function()
{
	store = {};
}

const add  = (name , store) =>{
	store = [...store ,{name , isDone: false}]
}
const edit = (name , store)=>
{
	const index = store.findIndex( todo => todo.name === name)
	if(index === -1) return

	store[index].name = name;
	return store;
}

const remove = (name , store)=>
{
	const index = findIndex(name, store)
	if(index != -1) delete store[index];

}
const findIndex = (name , store) => store.findIndex(todo => todo.name === name)

const find = (name , store) => {
	const index = findIndex(name, store)
	index == -1 ? null : store[index]
}
const toggle = (name , store)=>{
	const index = findIndex(name , store)
	if(index === -1) return;

	store[index].isDone = !store[index].isDone;
}

const get =() => store

const api = {
	init, add,
	edit, remove
}

