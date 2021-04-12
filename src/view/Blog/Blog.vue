<template>
<div class="blog">
    <div class="title">
        博客
    </div>
    <div class="content">
        <div class="item" v-for="i in 20" :key="i">
            <div class="date">
                2020-12-10
            </div>
            <div class="account">
                今天干了啥, 今天干了啥 今天干了啥 今天干了啥 今天干了啥--- 今天干了啥 今天干了啥 今天干了啥{{i}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Blog',
    components: {}
}
</script>

<style scoped>
.blog {
    width: 70%;
    margin: 0 auto;
    height: 100%;
    border: green solid 1px;
    border-radius: 50px;
    padding: 20px 20px;
}

.title {
    width: 100px;
    height: 40px;
    font-size: 30px;
    margin: 30px auto;
}

.content {
    --scrollbarBG: #CFD8DC;
    --thumbBG: #90A4AE;
    padding: 30px 50px;
    height: calc(100% - 145px);
    overflow-y: auto;
    font-size: 18px;
    border: green solid 1px;
    border-radius: 10px;
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}

.item {
    width: 100%;
    height: 50px;
    margin: 5px 0;
    display: -webkit-inline-box;
}

.date {
    width: 120px;
}

.account {
    text-align: center;
    width: calc(100% - 120px);
}

/**整体部分 */
.content::-webkit-scrollbar {
    width: 5px;
    border-radius: 15px;
}

/**二端按钮 */
.content::-webkit-scrollbar-button {}

/**外层轨道 */
.content::-webkit-scrollbar-track {
    background: transparent;
}

/**滑块 */
.content::-webkit-scrollbar-thumb {
    background: linear-gradient(rgb(221, 217, 217), rgb(37, 37, 163),rgb(221, 217, 217));
    border-radius: 13px;
}

.content::-webkit-scrollbar-corner {
    border-radius: 11px;
}
</style>
