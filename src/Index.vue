<template>
<div class="main">
    <div class="slider">
        <SliderBar :width="300" backgroundColor="#ffffff" :list="list" v-on:sliderClick="handclick"></SliderBar>
    </div>
    <div class="center">
        <component :is="mainPart" />
    </div>
</div>
</template>

<script>
import Home from "./view/Home/Home"
import Introduction from "./view/Introduction/Introduction"
import Project from "./view/Project/Project"
import Blog from "./view/Blog/Blog"
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
            mainPart: "Introduction"
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
    display: flex;
}

.slider {
    width: 300px;
    height: 100%;
    margin: 0 20px 0 20px;
    justify-content: center;
    align-items: center;
    display: flex;
}

.center {
    width: calc(100% - 320px);
    height: 100%;
    display: flex;
    /* align-items: center;
    justify-content: center; */
}
</style>
