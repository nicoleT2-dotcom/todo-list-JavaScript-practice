
  /*how we create sites;
step 1) save date 
step 2) generate the html
step 3)make the site interactive
 */


const toDoList = [
  {name:'make dinner',
   dueDate:'31-05-2025'},
  
   {name:'wash dishes', 
    dueDate:'31-05-2025'}];


renderTodolist();


function renderTodolist(){

    let todoListHTML ='';

    for (let i = 0; i < toDoList.length; i++){

      const todoObject = toDoList[i];

      //normal way without disconstruting 
      // const name = todoObject.name;
      // //deconstructing objects  shortcut make object name into variable name. 
      //const {name} = todoObject
      //const dueDate = todoObject.dueDate;

      const {name, dueDate } = todoObject; //add both property names values . 

      


const html =`
      <div>${name}</div>

      <div>${dueDate}</div>

      <button onclick =" toDoList.splice(${i}, 1)
      renderTodolist();         
      " class ="delete-todo-button" >Delete</button>
    `;

      todoListHTML += html;  //generating the HTML


    document.querySelector('.js-todo-list').innerHTML = todoListHTML; 
    } }




function addTodo (){
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dateinputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateinputElement.value;
  

  toDoList.push({name,
    dueDate //shorthand property sysntax instead of 
    // name:name, dueDte: dueDate
  });
  


  inputElement.value = '';

  renderTodolist();
};

