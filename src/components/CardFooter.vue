<template>
    <div class="card-footer">
        <label class="label-checkbox">
            <div>
                <input type="checkbox" class="checkbox">
                    <p class="checkbox-message">I accept the terms and privacy</p>
            </div>
            <p class="label-error"></p>
        </label>

        <label class="submit"><input type="button" class="button" value="Register"></label>
    </div>
</template>

<script>
    export default {
        name: 'CardFooter'
    }
</script>

<style>

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