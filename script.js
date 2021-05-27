//getting all required elements
const inputbox= document.querySelector(".inputfield input");
const addbtn= document.querySelector(".inputfield button");
const todo_list= document.querySelector(".todo_list");
const deleteallbtn= document.querySelector(".footer button");





inputbox.onkeyup = ()=>{
    let userdata= inputbox.value;
    if(userdata.trim()!=0){
      addbtn.classList.add("active");
    }else {
      addbtn.classList.remove("active");
    }
}

showTasks();



//if user click on the add button

addbtn.onclick = ()=>{
  let userdata = inputbox.value;
  let getLocalStorage =  localStorage.getItem("New Todo");
  if(getLocalStorage == null){
    listArr=[];
  }else{
    listArr=JSON.parse(getLocalStorage);
  }
  listArr.push(userdata);
  localStorage.setItem("New Todo",JSON.stringify(listArr));
  showTasks();
  addbtn.classList.remove("active");
}




function showTasks(){
  let getLocalStorage = localStorage.getItem("New Todo");
  if(getLocalStorage == null){
    listArr=[];
  }else{
    listArr=JSON.parse(getLocalStorage);
  }
  const pending = document.querySelector(".pending");
  pending.textContent = listArr.length;
  if(listArr.length > 0){
    deleteallbtn.classList.add("active");
  }else {
    deleteallbtn.classList.remove("active");
  }
  let newLiTag = '';
  listArr.forEach((element,index) =>{
   newLiTag += `<li>${element} <span onclick= "deletetask(${index})"; ><i class="fa fa-trash"></i></span></li>`;
 });
 todo_list.innerHTML = newLiTag;
 inputbox.value="";
}




function deletetask(index){
  let getLocalStorage =  localStorage.getItem("New Todo");
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}


deleteallbtn.onclick = ()=>{
  listArr=[];
  localStorage.setItem("New Todo",JSON.stringify(listArr));
  showTasks();
}
