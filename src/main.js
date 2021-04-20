import replace from './router.js'
import hello from './components/hello.js'
import todo from './components/todo.js'


const init = ()=>{
   setTimeout(()=>{
       replace("router",hello())
   },2000);

   setTimeout(()=>{
    replace("router",todo())
},5000);
}

init();
