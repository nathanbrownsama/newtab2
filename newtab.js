document.getElementById('save-button').addEventListener('click', function(event) {
  event.preventDefault();
  chrome.storage.sync.set({'note': document.getElementById('note').value});
});

document.getElementById('add-button').addEventListener('click', function(event) {
  event.preventDefault();
  var task = document.getElementById('task').value;
  chrome.storage.sync.get('tasks', function(data) {
    var tasks = data.tasks || [];
    tasks.push(task);
    chrome.storage.sync.set({'tasks': tasks});
  });
  var taskList = document.getElementById('task-list');
  var li = document.createElement('li');
  li.textContent = task;
  taskList.appendChild(li);
});

chrome.storage.sync.get('tasks', function(data) {
  var tasks = data.tasks || [];
  var taskList = document.getElementById('task-list');
  tasks.forEach(function(task) {
    var li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
});
