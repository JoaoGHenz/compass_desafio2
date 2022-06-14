<template>
    <section>
        <label for="name" class="label-name">
            <p class="form-check">Full Name</p>
            <input name="name" type="text" placeholder="Name" class="input-name">
            <p class="label-error name-error"></p>
        </label>

        <label for="email" class="label-email">
            <p class="form-check">Email</p>
            <input name="email" type="email" placeholder="foo@bar.com" class="input-email">
            <p class="label-error email-error"></p>
        </label>

        <label for="phone" class="label-phone">
            <p>Phone</p>
            <input name="phone" type="phone" placeholder="(83) 0000-0000" class="input-phone">
            <p class="label-error phone-error"></p>
       </label>

        <label for="password" class="label-password">
            <p class="form-check">Password</p>
            <input name="password" type="password" placeholder="Enter your password" class="input-password">
            <p class="label-error password-error"></p>
        </label>

        <label for="birthday" class="label-birthday">
            <p class="form-check">Birthday</p>
            <input name="birthday" type="date" class="input-birthday">
            <p class="label-error birthday-error"></p>
        </label>

    </section>
</template>

<script>
export default{
    name: "CardBody"
}

</script>

<style>

.label-name {
    order: 0;
    width: 100%;
}

.label-email, .label-password {
    width: 68%;
}

.label-phone, .label-birthday {
    width: 27%;
}

p {
    margin: 2px 0;
    font-size: 14px;
    color: #767676;
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


</style>