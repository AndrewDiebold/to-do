const init = () => {
  ajaxRequest("get","allTasks.php", allTasks, undefined, "XML");
}

const ajaxRequest = (method, url, callback, params, responseType) => {
  let xhr = new XMLHttpRequest();
  if(params && method == "get") {
    url += `?${params}`
  }
  xhr.open(method, url);
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
      if(responseType == "JSON") {
        callback(JSON.parse(xhr.responseText));
      } else if(responseType == "XML") {
        callback(xhr.responseXML);
      } else {
        callback(xhr.responseText);
      }
    }
  }
  if(method == "post") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.send(params);
  } else {
    xhr.send(null);
  }
}

const allTasks = (response) => {
  let tasks = response.getElementsByTagName("tasks")[0].childNodes;
  let tasklist = document.createElement("ul");
  tasklist.setAttribute("id", "tasklist");
  tasklist.setAttribute("class", "list-group col-md-6");
  tasks.forEach((task) => {
    let id = task.childNodes[0].textContent;
    let description = task.childNodes[1].textContent;
    let item = document.createElement("li");
    item.setAttribute("class", "list-group-item");
    item.setAttribute("data-task-id", id);
    item.innerHTML = description;
    let icon = document.createElement("i");
    icon.setAttribute("class","far fa-trash-alt fa-2x float-left");
    icon.addEventListener("click", deleteTask);
    item.appendChild(icon);
    tasklist.appendChild(item);
  });
  let taskdiv = document.getElementById("taskdiv");
  taskdiv.appendChild(tasklist);
}

const addTask = () => {
  let input = document.getElementById("task").value;
  let params = `description=${input}`
  ajaxRequest("post","addTask.php", listRefresh, params);
}

const deleteTask = e => {
  let btn = e.currentTarget;
  let li = btn.parentNode;
  let idToRemove = li.getAttribute("data-task-id");
  let params = `id=${idToRemove}`
  ajaxRequest("post","deleteTask.php", listRefresh, params);
}

const listRefresh = () => {
  document.getElementById("tasklist").remove();
  init();
}



window.onload = init();
