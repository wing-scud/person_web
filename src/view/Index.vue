<template>
<div class="full-screen">
    <div class="main">
        <div class="header">
            <div class="website-title">
                个人网站
            </div>
            <div class="website-tools">
                <div class="website-tool" v-for="item in list " :key="item.id">
                    {{item.name}}
                </div>
            </div>
        </div>
        <div class="content">
            <component :is="compName"></component>
        </div>
        <div class="footer">
            <div class="bottom-nav">
                <div class="nav-item" v-for=" item in list" :key="item.id">
                    <i :class="['iconfont',item.icon,'nav-item-icon']" @click="changeComponent(item.id)"></i>
                    <span class="nav-item-title" v-text="item.name"></span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import Introduction from "./Introduction/Introduction"
import Project from "./Project/Project"
import Blog from "./Blog/Blog"
import Home from "./Home/Home"
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
            compName: "Home",
            menuState: false,
        }
    },
    mounted() {
        this.list = [{
            name: '关于',
            id: 'Introduction',
            icon: 'icon-guanyu'
        }, {
            name: '项目',
            id: 'Project',
            icon: 'icon-xiangmu'
        }, {
            name: '博客',
            id: 'Blog',
            icon: 'icon-boke'
        }, {
            name: '主页',
            id: 'Home',
            icon: 'icon-zhuye'
        }];
    },
    methods: {
        changeComponent(id) {
            this.compName = id;
            console.log(id)
        }
    },
    watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@media screen and (min-width:1200px) {
    .main {
        margin: 0 auto;
        width: 60vw;
        /* min-width: 720px; */
        max-width: 1080px;
        height: 100%;
    }

    .header {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 80px;
        text-align: center;
    }

    .website-title {
        flex: 1;
        line-height: 80px;
    }

    .website-tools {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        flex: 5;
    }

    .website-tool {
        flex: 1;
        height: 36px;
    }

    .content {
        /* position: relative;
        top: 80px;
        left: 0; */
        width: 100%;
        height: calc(100% - 80px);
    }

    .footer {
        display: none;
    }
}

@media screen and (min-width:960px) and (max-width:1200px) {
    .main {
        /* 60% */
        margin: 0 auto;
        width: 60vw;
        height: 100%;
        /*     min-width:576px;
        max-width: 720px; */
    }

    .header {
        width: 100%;
        height: 116px;
        text-align: center;
    }

    .website-title {
        width: 100%;
        height: 80px;
        line-height: 80px;
    }

    .website-tools {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        height: 36px;
    }

    .website-tool {
        flex: 1;
        height: 36px;
    }

    .content {
        /* position: relative;
        top: 48px;
        left: 0; */
        width: 100%;
        height: calc(100% - 48px);
    }

    .footer {
        display: none;
    }

}

@media screen and (min-width:768px) and (max-width:960px) {
    .main {
        width: 100vw;
    }

    .header {
        width: 100%;
        height: 116px;
        text-align: center;
    }

    .website-title {
        width: 100%;
        height: 80px;
        line-height: 80px;
    }

    .website-tools {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        height: 36px;
    }

    .website-tool {
        flex: 1;
        height: 36px;
    }

    .content {
        /* position: relative;
        top: 48px;
        left: 0; */
        width: 100%;
        height: calc(100% - 48px);
    }

    .footer {
        display: none;
    }

}

@media screen and (max-width:768px) {
    .main {
        width: 100vw;
    }

    .header {
        width: 100%;
        height: 48px;
        line-height: 48px;
    }

    .website-title {
        /* float: left; */
        width: 100%;
        /* height: 48px; */
    }

    .website-tools {
        display: none;
        /* display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        height: 36px; */
    }

    .website-tool {
        /* flex: 1;
        height: 36px; */
    }

    .content {
        /* position: relative;
        top: 48px;
        left: 0; */
        width: 100%;
        height: calc(100% - 96px);
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 48px;
        font-size: 12px;
    }

    .bottom-nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .nav-item {
        flex: 1;
        text-align: center;
        height: 36px;
        padding: 6px 0;
    }

    .nav-item-icon {
        font-size: 18px;
    }

    .nav-item-title {
        display: block;
    }
}
</style>
