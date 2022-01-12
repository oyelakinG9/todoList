const Tasks = [

  {
    description: 'Do the list',
    completion: false,
    index: 0,
  },
  {
    description: 'Study hard before the class',
    completion: false,
    index: 1,
  },
  {
    description: 'Do the project',
    completion: false,
    index: 2,
  },
];

const workList = document.querySelector('.todoList');

function chore() {
  Tasks.forEach((task) => {
    workList.innerHTML += `<li class="item-list" data-key="${task.index}">
          <div class="checkList">
              <input type="checkbox" name="checkbox" id="checkbox" data-key="${task.index}">
              <input type="text" id="inputList"  value="${task.description}">
              <button data-key="${task.index}" class="move-item"><i class="fas fa-ellipsis-v"></i></button>
          </div>
      </li>`;
  });
}

chore();
