<template>
    <HelloWorld />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.input-section {
    margin-bottom: 10px;
}

input {
    height: 20px;
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}
button {
    width: 150px;
    padding: 10px;
    border-radius: 10px;
    font-size: medium;
    cursor: pointer;
}
</style>
