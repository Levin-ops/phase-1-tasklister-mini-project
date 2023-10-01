document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form =document.querySelector(`form`)
  form.addEventListener(`submit`, function(event){
    event.preventDefault()
    toDoHandler(event.target.new_task_description.value);
    form.reset()
  });
  
});

function toDoHandler(todo){
  let p = document.createElement(`p`)
  let btn =document.createElement(`button`)
  btn.textContent=`X`
  btn.addEventListener('click', toDoDeleter)
  p.textContent=`${todo}  `
  p.appendChild(btn)
 
  document.querySelector(`#tasks`).appendChild(p)
}

function toDoDeleter(event){
  event.target.parentNode.remove()
}