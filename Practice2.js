const main = document.querySelector('#main');
const userID = localStorage.getItem('userID');
const userPW = localStorage.getItem('userPW');

const selectDate = document.querySelector('#selectDate');

const inputContent = document.querySelector('#inputContent');
const contentClick = document.querySelector('#contentClick');
const contentList = document.querySelector('#contentList');

const pageNumberArray = [];
const todoList = []; 
const index = todoList.length;
function is_dragend_element(element, mouse_coordinate) {
    function MyRect(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.contains = function (x, y) {
            return this.x <= x && x <= this.x + this.width &&
                this.y <= y && y <= this.y + this.height;
        }
    }
    function outerWidth(el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);

        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        return width;
    }
    function outerHeight(el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);

        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
    }
    let rect = element.getBoundingClientRect();
    let elemet_position = {
        left: rect.left + document.body.scrollLeft,
        top: rect.top + document.body.scrollTop,
        width: outerWidth(element),
        height: outerHeight(element)
    };
    return new MyRect(elemet_position.left
        + window.scrollX, elemet_position.top
    + window.scrollY, elemet_position.width, elemet_position.height)
        .contains(mouse_coordinate.x, mouse_coordinate.y);

}

function select_li() {
    let list = [];
    for (let el of document.querySelectorAll('#contentList > li')) {
        list.push(el);
    }
    return list;
}
function get_idx_of_li(list, li) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === li) {
            return i;
        }
    }
}
function get_local_list() {
    let list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
}
function set_local_list() {
    console.log(JSON.stringify(get_list()));
    localStorage.setItem('list', JSON.stringify(get_list()));
}

function get_list() {
    return select_li().map(el => el.querySelectorAll('span')[0].textContent);
}

function inputContentProcess() { 
    const li = document.createElement('li');
    const p = document.createElement('span');
    const q = document.createElement('span');
    const br = document.createElement('br'); 
    const deleteBtn = document.createElement('button');

    li.className = 'candidate';

    li.setAttribute("draggable", "true");
    deleteBtn.addEventListener("click", function (event) {
        li.parentNode.removeChild(li);
    });
    deleteBtn.innerText = 'X';

    li.appendChild(p);
    li.appendChild(q);
    q.appendChild(deleteBtn);
    q.appendChild(br);
    contentList.appendChild(li);
    p.innerHTML = inputContent.value;
    inputContent.value = '';

    li.style.display = 'inline';
    li.addEventListener("drag", function () {
    }, false);
    li.addEventListener("dragend", function (e) {
        let mouse = {
            x: e.clientX + window.scrollX,
            y: e.clientY + window.scrollY
        };
        console.log(mouse);
        let candidate = document.querySelectorAll('li');
        let picked;
        for (let i = 0; i < candidate.length; i++) {
            candidate[i].style.color = 'black';
            let result = is_dragend_element(candidate[i], mouse);
            if (result) {
                picked = candidate[i];
                //break;
            }
        }
        if (picked) {



<<<<<<< HEAD
=======
    p.addEventListener("dragend", function () {
        var todoListLocal = JSON.stringify(localStorage.getItem(0));

        
        console.log('dragend'+todoObj.todo);
        
        
    })
>>>>>>> parent of e82958a... commit update5

            replace_li(get_idx_of_li(select_li(), li), get_idx_of_li(select_li(), picked));
            set_local_list();
            // if (last) {
            // } else {
            //     contentList.insertBefore(picked, li);
            // }
        }
        // aa=document.querySelectorAll('li');contentList.insertBefore(aa[0], aa[2]);
    });
    
    //localStorage.setItem(index, JSON.stringify(todoList)); 
    //todo 삭제
    //todo 리스트
    // for (var i in todoList) {
    //     var todoListTodo = JSON.parse(localStorage.getItem(0));
    //     p.innerHTML = todoListTodo[i].todo;
    // }

    
    // q.appendChild(deleteBtn);
    // q.appendChild(br);
    // contentList.appendChild(q);
    
    // contentList.insertBefore(p, q);

    //todo 완료체크
    if (false) {
        p.addEventListener("click", function () {
            p.style.textDecoration = 'line-through';
        })
        p.addEventListener("dblclick", function () {
            p.style.textDecoration = '';
        })
    }
}
// function move_to(element, idx) {
//     let target = select_li()[idx + 1];
//     if (target) {
//         // contentList.insertBefore(element, target);
//     } else {
//         // console.log('last');
//         // contentList.appendChild(element);
//         // let list = select_li();
//         // move_to(list[list.length - 2], 0);

//         // contentList.insertBefore(list[list.length - 2], list[0]);
//     }
// }
$(function () {
    $("#datepicker").datepicker({
        dateFormat: 'yy-mm-dd'
        , showOtherMonths: true
        , onSelect: function (dateText, inst) {
            var date = $(this).val();
            console.log(date);
        }
    });
});
function replace_li(idx1, idx2) {
    let list = select_li();
    // console.log(list);
    let new_list = [];
    let elements = [
        select_li().splice(idx1, 1)[0],
        select_li().splice(idx2, 1)[0],
    ];
    // console.log(elements);
    for (let i = 0; i < list.length; i++) {
        if (idx1 == i) {
            new_list.push(elements[1]);
        } else if (idx2 == i) {
            new_list.push(elements[0]);
        } else {
            new_list.push(list[i]);
        }
    }
    new_list.forEach(el => {
        contentList.appendChild(el);
    });
}

//아이디 불러오기
function init() {
    main.innerHTML = '<div>' + userID + ' 님 어서오세요' + '</div>';
}

init();