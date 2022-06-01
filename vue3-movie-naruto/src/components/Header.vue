<template>
    <header>
        <router-link to="/">
            <h1><span>Vue </span>Home</h1>
        </router-link>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
header {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    justify-content: center;
    background-color: #2C3D4E;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

    h1 {
        color: #fff;
        font-size: 28px;

        span {
            color: #42B883;
        }
    }
}
</style>