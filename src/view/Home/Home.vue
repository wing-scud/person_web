<template>
<div class='home'>
    <!-- 暂且先用element -ui -->
    <div class="slideShow">
        <el-carousel :interval="8000" type="card" :height="(height*0.28)+'px'">
            <el-carousel-item v-for="item in projects" :key="item.id" :label="item.name">
                <el-image :src="item.src" fit="fill" class="slideShow" />
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="">
    </div>
</div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    props: [
        "height"
    ],
    data() {
        return {
            projects: [{
                id: "travel",
                name: "旅行",
                src: "/static/images/旅行.jpg"
            }, {
                id: "photo",
                name: "摄影",
                src: "/static/images/摄影.jpg"
            }, {
                id: "book",
                name: "阅读",
                src: "/static/images/阅读.jpg"
            }, {
                id: "game",
                name: "游戏",
                src: "/static/images/游戏.jpg"
            }, {
                id: "music",
                name: "音乐",
                src: "/static/images/音乐.jpg"
            }],
        }
    },
    mounted() {}
}
</script>

<style scoped>
.home {
    width: 80%;
    height: 100%;
    margin:0 auto;
}

.slideShow {
    width: 100%;
    height: 100%;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style><style>
.el-image {
    position: relative;
    /* display: inline-block; */
    overflow: hidden;
}
</style>
