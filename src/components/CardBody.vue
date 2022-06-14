<template>
    <section>
        <label for="name" class="label-name">
            <p class="form-check">Full Name</p>
            <input name="name" type="text" placeholder="Name" class="input-name">
            <p class="label-error name-error"></p>
        </label>

        <label for="email" class="label-email order-1">
            <p class="form-check">Email</p>
            <input name="email" type="email" placeholder="foo@bar.com" class="input-email">
            <p class="label-error email-error"></p>
        </label>

        <label for="password" class="label-password order-3">
            <p class="form-check">Password</p>
            <input name="password" type="password" placeholder="Enter your password" class="input-password">
            <p class="label-error password-error"></p>
        </label>

        <label for="phone" class="label-phone order-2">
            <p>Phone</p>
            <input name="phone" type="phone" placeholder="(83) 0000-0000" class="input-phone">
            <p class="label-error phone-error"></p>
       </label>

        <label for="birthday" class="label-birthday order-4">
            <p class="form-check">Birthday</p>
            <input name="birthday" type="date" class="input-birthday">
            <p class="label-error birthday-error"></p>
        </label>
    </section>
</template>

<script>
export default{
    name: "CardBody",
    data: {
        test: "HMMM"
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


</style>