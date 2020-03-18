var formId = document.querySelector('#formId');


function ajaxFnc(){
    var formvalue = document.forms[0].elements[0].value;
    ajaxSend('http://127.0.0.1:3000/ajax_send_email', formvalue);   
}

function ajaxSend(url, data){
    var data = {'email': data};
    data = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type',"application/json");
    xhr.send(data);

    xhr.addEventListener('load', function(){
        console.log(xhr.responseText);
        
    })
}