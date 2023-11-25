
document.addEventListener("DOMContentLoaded",function(){
    const userDetailsJSON=localStorage.getItem("userDetails");
    if(userDetailsJSON){
        const details=JSON.parse(userDetailsJSON);

        const updateDetails=document.getElementById("user-details");

        updateDetails.innerHTML=`
        <p>Full Name: ${details.fullName}</p>
        <p>Email: ${details.userEmail}</p>
        <p>Token: ${details.token}</p>
        <p>Password: ${details.userPassword}</p>
        `;
    }

    const log=document.getElementById("logout");
    if(log){
        log.addEventListener("click",function(){
            localStorage.removeItem("userDetails");
            window.location.href = "index.html";
        })
    }
})