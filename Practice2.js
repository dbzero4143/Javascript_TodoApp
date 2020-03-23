const main = document.querySelector('#main');
const userID = localStorage.getItem('userID');
const userPW = localStorage.getItem('userPW');

const selectDate = document.querySelector('#selectDate');

const inputContent = document.querySelector('#inputContent');
const contentClick = document.querySelector('#contentClick');
const contentList = document.querySelector('#contentList');

const todoList = [];
const pageNumberArray = [];

const index = todoList.length;

function inputContentProcess(){
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    const todoObj = {
        todo:inputContent.value
    }

    //todo 입력
    //todoList.push(JSON.stringify(todoObj));
    todoList.push(todoObj);

    console.log(todoList);

    //배열을 String으로 바꾸고 로컬 스토리지에 넣음
    localStorage.setItem(index,JSON.stringify(todoList));
    inputContent.value='';

    //todo 삭제
    deleteBtn.addEventListener("click", function(event){
        var todoListIndex = todoList.indexOf(todoObj.todo);

        todoList.splice(todoListIndex,1);

        contentList.removeChild(li);

        console.log(contentList);
        
        
        localStorage.setItem(index,JSON.stringify(todoList));
    })

    //todo 리스트
    function contentListLoad(){
        deleteBtn.innerText = 'X';
        li.setAttribute("draggable", "true");
        li.setAttribute("id", "li");

        for(var i in todoList){
            var todoListTodo = JSON.parse(localStorage.getItem(0));
            
            li.innerHTML = todoListTodo[i].todo;
            li.appendChild(deleteBtn);
        }
        contentList.appendChild(li);
        

        li.style.display = 'block';
        
    }
    contentListLoad();

    //드래그 시작점
    li.addEventListener("drag", function(event){
        console.log('drag');
        
        console.log(li.innerText);
        
        //드래그 시작점의 값 가져오기
        event.dataTransfer.setData("text", event.target.id);
        
    },false)

    li.addEventListener("dragover", function (event) {
        console.log('dargover');
        event.dataTransfer.dropEffect = "Move";
        event.preventDefault();
        
    })

    li.addEventListener('drop', function (event) {
        event.preventDefault();
        console.log('drop');
        event.target.appendChild(document.getElementById('li'));
        console.dir(event.target);
        for(var s=0; s<li.childNodes.length;s++){
            console.log(li.childNodes[s]);
            
        }
        
        
        
        
    })

    li.addEventListener("dragend", function (event) {
        console.log('dragend');
        var x = event.offsetX;
    })

    
    

    //todo 완료체크
    li.addEventListener("click", function(){
        li.style.textDecoration = 'line-through';
    })
    li.addEventListener("dblclick", function(){
        li.style.textDecoration = '';
    })
}

$( function() {
    $( "#datepicker" ).datepicker({
        dateFormat: 'yy-mm-dd'
        ,showOtherMonths: true
        ,onSelect: function(dateText, inst) {
            var date = $(this).val();
            console.log(date);
       }
    });
});

//아이디 불러오기
function init(){
     main.innerHTML = '<div>'+userID+' 님 어서오세요'+'</div>';
}

init();