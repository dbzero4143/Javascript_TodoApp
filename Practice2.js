const main = document.querySelector('#main');
const userID = localStorage.getItem('userID');
const userPW = localStorage.getItem('userPW');

const selectDate = document.querySelector('#selectDate');

const inputContent = document.querySelector('#inputContent');
const contentClick = document.querySelector('#contentClick');
const contentList = document.querySelector('#contentList');

const todoList = [];
const pageNumberArray = [];

function inputContentProcess(){
    const p = document.createElement('p');
    const deleteBtn = document.createElement('button');

    const todoObj = {
        todo:inputContent.value,
        index: todoList.length + 1
    }

    //todo 입력
    todoList.push(todoObj);
    console.log(todoList);
    localStorage.setItem(todoObj.index,todoObj.todo);
    inputContent.value='';

    //todo 삭제
    deleteBtn.addEventListener("click", function(){
        localStorage.removeItem(todoObj.index);
        contentList.removeChild(p);
        todoList.splice(0,1);
        console.log(todoList);
        
    })

    //todo 리스트
    function contentListLoad(){
            deleteBtn.innerText = 'X';
            p.innerHTML = todoObj.todo;
            p.appendChild(deleteBtn);
            contentList.appendChild(p);
    }
    contentListLoad();

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