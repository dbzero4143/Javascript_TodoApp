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
    const p = document.createElement('p');
    const deleteBtn = document.createElement('button');

    const todoObj = {
        todo:inputContent.value,
        todoIndex: todoList.length + 1
    }

    //todo 입력
    //todoList.push(JSON.stringify(todoObj));
    todoList.push(todoObj);

    console.log(todoList);

    //배열을 String으로 바꾸고 로컬 스토리지에 넣음
    localStorage.setItem(index,JSON.stringify(todoList));
    inputContent.value='';

    //todo 삭제
    deleteBtn.addEventListener("click", function(){
        //배열에 String으로 넣어둔 데이터를 다시 객체로 바꾸고 로컬 스토리지에서 꺼냄
        var todoListTodoDelete = JSON.parse(localStorage.getItem(0));
        

        todoObj = {
            todo:'',
            todoIndex: ''
        }
        
        
        localStorage.removeItem(0);
        localStorage.setItem(index,JSON.stringify(todoList));
        //contentList.removeChild(p);
        //todoList.splice(0,1);
        //console.log(todoList);
    })

    //todo 리스트
    function contentListLoad(){
        deleteBtn.innerText = 'X';
        p.setAttribute("draggable", "true");

        for(var i in todoList){
            var todoListTodo = JSON.parse(localStorage.getItem(0));
            
            p.innerHTML = todoListTodo[i].todo;
        }
        
        p.appendChild(deleteBtn);
        contentList.appendChild(p);
    }
    contentListLoad();

    p.addEventListener("drag", function(){
        console.log('drag start');
    },false)

    p.addEventListener("dragend", function () {
        
    })

    

    //todo 수정
    p.addEventListener("click", function(){
        p.style.textDecoration = 'line-through';
    })
    p.addEventListener("dblclick", function(){
        p.style.textDecoration = '';
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