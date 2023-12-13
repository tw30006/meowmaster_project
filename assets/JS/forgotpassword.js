const email=document.querySelector(".email");
const btnresetPassword=document.querySelector(".btn-resetPassword");
const resetNewPassword=document.querySelector(".btn-resetNewPassword");
const newpassword=document.querySelector(".newpassword");
const checkpassword=document.querySelector(".checkpassword");



function btnreset(){
    if(btnresetPassword){
        btnresetPassword.addEventListener("click",function(e){
            e.preventDefault();
            if(email.value.trim()==""){
                alert("請正確輸入信箱")
                return;
            }else{
                forgetpassword();
            }
        });
    }
    if(resetNewPassword){
        resetNewPassword.addEventListener("click",function(e){
            e.preventDefault();
            if(newpassword.value.trim()=="" ||checkpassword.value.trim()==""){
                alert("請正確輸入密碼");
                return;
            }else{
                resetPassword();
            }
        });
    }
    
}
btnreset();

let userId;


function forgetpassword(){
    console.log("forgetpassword()");
    axios
    .get(`http://localhost:3000/users?email=${email.value}`)
    .then(function (response) {
      // 檢查是否找到了使用者
      if (response.data.length > 0) {
        userId = response.data[0].id;
        localStorage.setItem("userId",userId);
        window.location.href = "resetpassword.html";
      } else {
        // 沒有找到相應的使用者
        alert("該 email 尚未註冊");
      }
    })
    .catch(function (error) {
      console.log(error.response);
      alert("查找使用者時發生錯誤");
    });
}
btnreset();

// 發送 PATCH 請求更新密碼

function resetPassword(){
    const userId=localStorage.getItem("userId");
    const storedToken = localStorage.getItem("token");
    if (newpassword.value !== checkpassword.value) {
        alert("新密碼和確認密碼不一致");
        return;
    }
    axios
    .patch(`http://localhost:3000/600/users/${userId}`, {
        "password": newpassword.value},{
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
    })
    .then(function (response) {
        alert("修改完成");
        window.location.href = "update_success.html";
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error.response);
        alert("修改錯誤，請重新修改");
      });
}
// btnreset();