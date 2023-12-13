const register=document.querySelector(".register");
const login=document.querySelector(".login");

register.addEventListener("click",function(e){
    window.location.href = "http://localhost:8080/pages/signup.html";
})
login.addEventListener("click",function(e){
    window.location.href = "http://localhost:8080/pages/login.page.html";
})

let newData=[];
let token="";

const btnjoin=document.querySelector(".btn-join");
const username=document.querySelector(".username");
const email=document.querySelector(".email");
const password=document.querySelector(".password");
const year=document.querySelector(".year");
const month=document.querySelector(".month");
const day=document.querySelector(".day");
const btnline=document.querySelector(".btn-line");

//新增註冊會員
//透過axios串接json-server-auth的api

btnjoin.addEventListener("click",function(e){
    if(username.value.trim()=="" || email.value.trim()=="" || password.value.trim()==""){
        alert("請正確輸入用戶名、信箱、密碼")
        return;
    }else{
        signup();
    }
});

function signup(){
    axios.post(`http://localhost:3000/signup`,{
        "email": email.value,
        "password":password.value,
        "name":username.value,
        "year":year.value,
        "month":month.value,
        "day":day.value
    })
    .then(function(response){
        console.log(response.data);
        newData=response.data
        localStorage.setItem("token",response.data.accessToken);
        // window.setTimeout(function() {
        //     location.href = "http://localhost:8080/pages/login.page.html";
        // }, 3000);
    })
    .catch(function(error){
        console.log(error.response);
        alert("註冊失敗，請重新註冊");
    })
}
    

