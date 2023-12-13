const register=document.querySelector(".register");
const login=document.querySelector(".login");

register.addEventListener("click",function(e){
    window.location.href = "http://localhost:8080/pages/signup.html";
})
login.addEventListener("click",function(e){
    window.location.href = "http://localhost:8080/pages/login.page.html";
})

// let newData=[];


const email=document.querySelector(".email");
const password=document.querySelector(".password");
const btnlogin=document.querySelector(".btn-login");


btnlogin.addEventListener("click",function(e){
    e.preventDefault();
    if(email.value.trim()=="" || password.value.trim()==""){
        alert("請正確輸入信箱、密碼")
        return;
    }else{
        logIn()
    }
});

function logIn(){
    axios.post(`http://localhost:3000/login`,{
        "email": email.value,
        "password": password.value
    })
    .then(function(response){
        
        // token=response.data.accessToken;
        // axios.defaults.headers.common['Authorization']=res.headers.authorization
        console.log(response.data);
        localStorage.setItem("token",response.data.accessToken);
        alert("登入成功");
        window.location.href = "signupsuccess.html";
    })
    .catch(function(error){
        console.log(error.response);
        alert("登入失敗，請重新登入");
    });
}
