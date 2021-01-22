var dstask = new TaskList();
var validation = new Validation();

getLocalStorage();
taoBang(dstask.arr);

// Lay thong tin nguoi dung nhap vao
function layThongTinDauVao() {
  var _task = getele("newTask").value;
  
  var isValid = true;
  isValid &= validation.kiemTraRong(_task, "notiInput");
  console.log(isValid);
  isValid &= validation.kiemTraTrung(_task, dstask.arr, "notiInput");
  console.log(isValid);
  
  if (isValid) {
    var task = new Task(_task);
    return task;
  }
  return null;
}

function addItem(event) {
  event.preventDefault();

  var taskInput = layThongTinDauVao();

  if (taskInput !== null) {
    dstask.themTask(taskInput);
    setLocalStorage();
    taoBang(dstask.arr);
  }
}



function taoBang(arr) {
    var toDoContent = "";
    var completeContent = "";
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].status == false) {
          // Tao bang todo
        toDoContent += `
                <li>
                  <span>${arr[i].task}</span>
                  <div class="buttons">
                  <button class="complete" onclick="suaTask(${arr[i].id})"><i class="far fa-check-circle"></i></button>
                  <button class="remove" onclick="xoaTask(${arr[i].id})"><i class="far fa-trash-alt"></i></button>
                  </div>
                </li>  
            `;
      } else {
        // Tao bang completed
        completeContent += `
                <li>
                  <span>${arr[i].task}</span>
                  <div class="buttons">
                  <button class="complete" onclick="suaTask(${arr[i].id})"><i class="fas fa-check-circle"></i></button>
                  <button class="remove" onclick="xoaTask(${arr[i].id})"><i class="far fa-trash-alt"></i></button>
                  </div>
                </li>  
            `;
      }
    } 
    console.log(toDoContent);
    getele("todo").innerHTML = toDoContent;
    getele("completed").innerHTML = completeContent;
  }

  function xoaTask(taskID) {
    dstask.xoaTask(taskID);
    taoBang(dstask.arr);
    setLocalStorage();
  }
  
  function suaTask(taskID) {
    dstask.suaTask(taskID);
    taoBang(dstask.arr);
    setLocalStorage();
  }


// setLocalStorage
function setLocalStorage() {
  var arrString = JSON.stringify(dstask.arr);
  localStorage.setItem("DSTask", arrString);
}

function getLocalStorage() {
  console.log(dstask.arr);
  if (JSON.parse(localStorage.getItem("DSTask"))) {
    dstask.arr = JSON.parse(localStorage.getItem("DSTask"));
  }
}

// Rut gon document.getElementById
function getele(id) {
  return document.getElementById(id);
};
