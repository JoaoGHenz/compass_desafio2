<template>
    <div>
        <label for="name" class="label-name">
            <p class="form-check">Full Name</p>
            <input name="name" type="text" placeholder="Name" class="input-name input">
            <p class="label-error name-error"></p>
        </label>

        <label for="email" class="label-email order-1">
            <p class="form-check">Email</p>
            <input name="email" type="email" placeholder="foo@bar.com" class="input-email input">
            <p class="label-error email-error"></p>
        </label>

        <label for="password" class="label-password order-3">
            <p class="form-check">Password</p>
            <input name="password" type="password" placeholder="Enter your password" class="input-password input">
            <p class="label-error password-error"></p>
        </label>

        <label for="phone" class="label-phone order-2">
            <p>Phone</p>
            <input name="phone" type="phone" placeholder="(83) 0000-0000" class="input-phone input">
            <p class="label-error phone-error"></p>
       </label>

        <label for="birthday" class="label-birthday order-4">
            <p class="form-check">Birthday</p>
            <input name="birthday" type="date" class="input-birthday input">
            <p class="label-error birthday-error"></p>
        </label>

    <div class="card-footer order-4">
        <label class="label-checkbox">
            <div>
                <input type="checkbox" class="checkbox" id="checkbox-input">
                    <p class="checkbox-message">I accept the terms and privacy</p>
            </div>
            <p class="label-error"></p>
        </label>
        
        <label class="submit"><input type="button" class="button" value="Register" @click="register" to="/SuccessCard"></label>
    </div>
        
    </div>
</template>

<script>
export default{
    name: "CardBody",
    data: {
        test: "HMMM"
    },
    methods: {
            register() {

                        let bIsOK = true;

                        //Main form Validatios
                        let errorArray = ["Name", "Email", "Password", "Phone", "Birthday"]
                            
                        
                        const inputForm = document.getElementsByClassName("input")
                        const errorMsg = document.getElementsByClassName("label-error")
                        console.log(inputForm)
                        //console.log(errorMsg)
                            
                        //Name validation check
                        if(inputForm[0].value.length < 4 || !inputForm[0].value.match(/[ ]/g)) {
                            errorMsg[0].innerHTML = errorArray[0] + " Invalid";
                            bIsOK = false;
                        } else {
                            errorMsg[0].innerHTML = "";
                        }

                        //Email validation check
                        if(inputForm[1].value.match(/[A-Z]/) || inputForm[1].value.match(/[À-ú]/) || inputForm[1].value.length == 0) {
                            errorMsg[1].innerHTML = errorArray[1] + " Invalid";
                            bIsOK = false;
                        } else {
                            errorMsg[1].innerHTML = "";
                        }

                        //Password validation check.
                        if(inputForm[2].value.match(/[^6-9]/) || inputForm[2].value.length == 0) {
                            errorMsg[2].innerHTML = errorArray[2] + " Invalid";
                            bIsOK = false;
                        } else {
                            errorMsg[2].innerHTML = "";
                        }
                            
                        //Phone validation check
                        if(inputForm[3].value.length != 11 || inputForm[3].value.match(/\D/g)) {
                            errorMsg[3].innerHTML = errorArray[3] + " Invalid";
                            bIsOK = false;
                        } else {
                            errorMsg[3].innerHTML = "";
                        }

                        //Date validation check
                        let date = new Date(inputForm[4].value);
                        let age = 2022 - date.getFullYear() 
                        if(age < 18 || date == "Invalid Date" || date > 126) {
                            errorMsg[4].innerHTML = errorArray[4] + " Invalid";
                            bIsOK = false;
                        } else {
                            errorMsg[4].innerHTML = "";
                        }

                        const checkBox = document.getElementById("checkbox-input")
                        if(!checkBox.checked) {
                            bIsOK = false;
                            errorMsg[5].innerHTML = "You must accept the terms";
                        }
                        else {
                            errorMsg[5].innerHTML = "";
                        }

                        //
                        if(bIsOK) {  
                            document.getElementById("s-panel").style.display = "flex";
                            document.getElementById("m-panel").style.display = "none";
                        }

            }
        }
}

</script>

<style>

label {
    flex-flow: column wrap;
}

.label-name {
    order: 0;
    width: 100%;
    height: 82px;
}

.label-email, .label-password {
    width: 68%;
    height: 82px;
}

.label-phone, .label-birthday {
    width: 27%;
    height: 82px;
}

p {
    margin: 0;
    font-size: 14px;
    color: #767676;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
}

.form-check:after {
    content: " *";
}

input {
    box-sizing: border-box;
    font-weight: 400;
    font-size: 16px;
    border-radius: 4px;
    width: 100%;
    height: 40px;
    color: #767676;
}

.label-error {
    color: #FF4B4B;
}

/*Ordering*/

.order-1 {
    order: 1;
}

.order-2 {
    order: 2;
}

.order-3 {
    order: 3;
}

.order-4 {
    order:4;
}


/*Footer*/

.card-footer {
    /*width: 82%; ONLY if in a separate component*/
    display: flex;
    justify-content: space-between;
    min-height: 16%;
    align-items: self-end;
    width: 100%;
}

.label-checkbox {
    display:flex;
    flex-flow: wrap column;
    max-width: 220px;
    height: 50px;
}

.label-checkbox div {
    display: flex;
}

.label-checkbox div {
    align-items: center;
}

.checkbox{
    accent-color: #0DBDBD;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
}

.checkbox-message {
    color: #111111;
}

.button {
    border-radius: 10px;
    background: #0DBDBD;
    color: #FFFFFF;
    font-family: "Nunito", Arial;
}



</style>