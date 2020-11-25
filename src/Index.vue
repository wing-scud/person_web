<template>
<div class="main">
    <SliderBar :width="100" backgroundColor="#ffffff" :list="list" v-on:sliderClick="handclick"></SliderBar>
    <component :is="mainPart" />
</div>
</template>

<script>
import Home from "./view/Home"
import Introduction from "./view/Introduction"
import Project from "./view/Project"
import Blog from "./view/Blog"
export default {
    name: "Index",
    components: {
        Home,
        Introduction,
        Project,
        Blog
    },
    data() {
        return {
            list: [],
            mainPart: "Home"
        }
    },
    mounted() {
        this.list = [{
            name: '个人介绍',
            id: 'Introduction'
        }, {
            name: '项目',
            id: 'Project'
        }, {
            name: '博客',
            id: 'Blog'
        }];

    },
    methods: {
        handclick(id, e) {
            this.mainPart = id;
            console.log(id)
            e;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
</style>
