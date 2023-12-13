// 抓取dom
const user=document.querySelector(".input-name");
const email=document.querySelector(".input-email");
const phone=document.querySelector(".input-phone");
const birthday=document.querySelector(".input-birthday");
const address=document.querySelector(".input-address");
const sectionSave=document.querySelector(".section-save");

// 監聽
sectionSave.addEventListener('click',function(e){
    if(e.target.getAttribute('class')==="btn-save"){
        newMember();
    }

})
function newMember(){
    if(user.value=="" || email.value=="" || phone.value=="" ||birthday.value=="" || address.value==""){
        alert("請輸入正確資訊");
        return;
    }

    //發出網路請求
    if (axios && typeof axios.post === 'function') {
        axios.post(`http://localhost:3000/posts`,{
        "name": user.value, 
        "email": email.value, 
        "phone": phone.value,
        "birthday": birthday.value,
        "address": address.value
    })
    .then(res =>{console.log(res),
        alert("填寫成功")
    })
    .catch(error => console.log(error.response));
    } else {
        console.error('axios is not available or axios.post is not a function');
    }
}
