
function emptyInput() {
    document.getElementById("search-bar").value = ""
}

function removeFromList(event) {
    var li = event.target.parentElement
    li_id = (li.id)
    tasks.splice(li.id, 1)
    render()


    // var ul = li.parentElement
    // ul.removeChild(li)

}

function checkboxChange(event) {
    var cb = event.target
    var li = cb.parentElement;
    //if (cb.checked) {
        //li.className += "task-completed"
        var task = tasks[li.id]
        task.completed = !task.completed
        //console.log(tasks[li.id][check]) 
        render()
}

function render() {

    
        //create an li
        $('li').remove()



        for (var i=0; i<tasks.length; i++) {
            var task = tasks[i]
            var liElement = document.createElement("li");
            liElement.setAttribute('id', i)
            var liClass = "list-group-item disabled";
            if (task.completed) {
                liClass += " task-completed";
            } 
            liElement.className = liClass;
          
            
            //creating text Node throught the Task function
            var textNode = document.createTextNode(task.description);
            
            // create delete button
            var buttonDelete = document.createElement('button');
            buttonDelete.className = "btn btn-outline-primary";
            buttonDelete.addEventListener('click', removeFromList)

            // create checkbox input
            var cbTaskOver = document.createElement('input')
            cbTaskOver.className = "form-check-input"
            cbTaskOver.type = 'checkbox';
            if (task.completed) {
                cbTaskOver.setAttribute('checked', true);
            }
            cbTaskOver.addEventListener('change', checkboxChange)

            
            // Li creation
            liElement.appendChild(cbTaskOver)
            liElement.appendChild(textNode);
            liElement.appendChild(buttonDelete)


            var ulElement = document.getElementById('unorganized-list');
        
            ulElement.appendChild(liElement)
            

        }   

  } 

var tasks = []

function Task(description, category) {
    this.description = description;
    this.category = category;
    this.completed=false;
}

function createTask() {
    var inputText = document.getElementById("search-bar").value;
    var selectedInput = document.getElementById("select").value;
    var check = $(".btn btn-outline-primary").on('click', function(){
                    $(this).taskCompleted()


    });

    // var checked = document.getElementsByClassName(".btn btn-outline-primary") 
    //     if (".btn btn-outline-primary".checked) {
    //         taskCompleted()
    //     } else {
    //         checked = false
    //     }

    if (inputText != "") {
        var task= new Task(inputText, selectedInput, check)

        tasks.push(task) 
        console.log(task)
        emptyInput() 
        render()
        return task    
    } else {
        alert('please write something!')
    }
}


