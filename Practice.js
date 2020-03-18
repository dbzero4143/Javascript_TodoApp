const userId = document.querySelector('#userId');
const userPw = document.querySelector('#userPw');
const loginBtn = document.querySelector('#loginBtn');

function loginFnc(){
    const userId_LS = localStorage.setItem("userID", userId.value);
    const userPw_LS = localStorage.setItem("userPW", userPw.value);

    if(userId.value === ''){
        alert('아이디 입력하세요.');
        return false;
    }

    if(userPw.value === ''){
        alert('비밀번호 입력하세요.');
        return false;
    }else if(userPw.value !== ''){
        location.href="main_page.html";
    }
}


    
    


