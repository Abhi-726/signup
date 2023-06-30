var iname=document.querySelector("#name");
var iemail=document.querySelector("#email");
var inumber=document.querySelector("#number");
var ipass=document.querySelector("#pass");
var icpass=document.querySelector("#cpass");
var val=[1,1,1,1,1];
iname.addEventListener("change",()=>{
    var nline=document.querySelector(".nline");
    var nspan=document.querySelector(".name_error");
    var name=document.querySelector("#name").value;
    text_val=/^[A-Za-z\s]{5,50}$/;
    if(!text_val.test(name)){
        nspan.innerHTML="* Invalid Name";
        val[0]=1;
        nline.style.background="red";
    }
    else{
        nspan.innerHTML="";
        val[0]=0;
        nline.style.background="#398eca";
    }
})
iemail.addEventListener("change",()=>{
    var eline=document.querySelector(".eline");
    var espan=document.querySelector(".email_error");
    var email=document.querySelector("#email").value;
    email_val=/^[a-zA-Z0-9_]{4,}@[a-zA-z]{4,}.[a-z]{2,5}$/;
    if(!email_val.test(email)){
        espan.innerHTML="* Invalid Email Address";
        val[1]=1;
        eline.style.background="red";
    }
    else{
        espan.innerHTML="";
        val[1]=0;
        eline.style.background="#398eca";
    }
})
inumber.addEventListener("change",()=>{
    var eline=document.querySelector(".eline");
    var nspan=document.querySelector(".number_error");
    var number=document.querySelector("#number").value;
    num_val=/^[6789][0-9]{9}$/;
    if(!num_val.test(number)){
        nspan.innerHTML="* Invalid Number";
        val[1]=1;
        eline.style.background="red";
    }
    else{
        espan.innerHTML="";
        val[1]=0;
        eline.style.background="#398eca";
    }
})
ipass.addEventListener("change",()=>{
    var pline=document.querySelector(".pline");
    var pspan=document.querySelector(".password_error");
    var pass_val=/^(?=.*\d)(?=.*[a-z])(?=.*[#?!@$%^&*-])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    var pass=document.querySelector("#pass").value;
    if(!pass_val.test(pass)){
        pspan.innerHTML="* Pasword must contain Uppercase, lowercase, special character and a number";
        val[2]=1;
        pline.style.background="red";
    }
    else{
        pspan.innerHTML="";
        val[2]=0;
        pline.style.background="#398eca";
    }
})
icpass.addEventListener("change",()=>{
    var cpline=document.querySelector(".cpline");
    var cpspan=document.querySelector(".cpassword_error");
    var cpass=document.querySelector("#cpass").value;
    var pass=document.querySelector("#pass").value;
    if(!pass.match(cpass)){
        cpspan.innerHTML="* Confirm password must be same as password";
        val[3]=1;
        cpline.style.background="red";
    }
    else{
        cpspan.innerHTML="";
        val[3]=0;
        cpline.style.background="#398eca";
    }
})

var sub_btn=document.querySelector(".sub_btn");
sub_btn.addEventListener("click",()=>{
    for(let i=0;i<val.length;i++){
        if(val[i]==1){
            event.preventDefault();
        }
    }
})
