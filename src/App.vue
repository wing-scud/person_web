<template>
<div id="app">
    <Index />
</div>
</template>

<script>
import Index from './Index.vue'

export default {
    name: 'App',
    components: {
        Index
    }
}
</script>

<style>
html,
body,
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
