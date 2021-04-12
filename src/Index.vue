<template>
<div class="main">
    <div class="slider">
        <SliderBar :width="300" backgroundColor="#ffffff" :list="list" v-on:sliderClick="handclick"></SliderBar>
    </div>
    <!-- Css样式修改，太冗余了，可以简化这些CSS-->
    <div class="center" :style="{height:screenHeight-2*60+'px',width:screenWidth-340-2*50-2*100+'px'}">
        <component :is="mainPart" :height="screenHeight" :width="screenWidth"/>
    </div>
</div>
</template>

<script>
import Introduction from "./view/Introduction/Introduction"
import Project from "./view/Project/Project"
import Blog from "./view/Blog/Blog"
import Home from "./view/Home/Home"
export default {
    name: "Index",
    components: {
        Introduction,
        Project,
        Blog,
        Home
    },
    data() {
        return {
            list: [],
            mainPart: "Home",
            screenWidth: 1920,
            screenHeight: 1080
        }
    },
    mounted() {
        const instance = this;
        this.list = [{
            name: '个人介绍',
            id: 'Introduction'
        }, {
            name: '项目',
            id: 'Project'
        }, {
            name: '博客',
            id: 'Blog'
        }, {
            name: '主页',
            id: 'Home'
        }];
        window.onresize = function () {
            window.screenWidth = document.body.clientWidth;
            window.screenHeight = document.body.clientHeight;
            instance.screenWidth = window.screenWidth;
            instance.screenHeight = window.screenHeight;
        }
          window.onresize()
    },
    methods: {
        handclick(id, e) {
            this.mainPart = id;
            console.log(id)
            e;
        }
    },
    watch: {
        screenWidth: {
            handler() {
                console.log(this.screenWidth)
            }
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
    padding: 60px 100px;
    margin: 0 50px;
    overflow: hidden;
    /* display: flex; */
    /* align-items: center;
    justify-content: center; */
}
</style>
