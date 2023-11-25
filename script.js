document.addEventListener("DOMContentLoaded", function () {
    const btnn = document.getElementById("btn");

    const generateToken = (length = 32) => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let token = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charactersLength);
            token += characters.charAt(randomIndex);
        }

        return token;
    };

    btnn.addEventListener("click", function (e) {
        const nam = document.getElementById("name");
        const email = document.getElementById("email");
        const pass = document.getElementById("pass");
        const cpass=document.getElementById("conpass");
        const warn=document.getElementById("warn");

        let flag=true;

        if(nam.value===""||email.value===""||pass.value===""||cpass.value===""){
            e.preventDefault();
            warn.innerHTML=`
                <p style="color:#625BF7; padding-bottom:20px; font-size:18px; font-weight: 700;">Error: All fields are mandatory!</p>
            `;
            flag=false;
        }

        if(pass.value!==cpass.value){
            e.preventDefault();
            warn.innerHTML=`
                <p style="color:#625BF7; padding-bottom:20px; font-size:18px; font-weight: 700;">Password do not match</p>
            `;
            flag=false;
        }


        // Generate a token with a length of 16 characters
        const myToken = generateToken(16);

        const userDetails = {
            fullName: nam.value,
            userEmail: email.value,
            userPassword: pass.value,
            token: myToken
        };

        // Convert the object to a JSON string
        const userDetailsJSON = JSON.stringify(userDetails);

        // Store the JSON string in local storage
        localStorage.setItem("userDetails", userDetailsJSON);

        if(flag===true){
            window.location.href = "profile.html";
        }
       
    });
});

  