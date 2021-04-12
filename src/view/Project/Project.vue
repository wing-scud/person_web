<template>
<div class="project">
    <div class="projectItem" v-for="i in 5 " :key="i">
        <img src="static/images/书籍.jpg" class="image">
        <div class="title">
            <span class="name">
                Cesium球
            </span>
            <span class="type">
                Cesium
            </span>
             <span class="type">
                 WebGL
            </span>
             <span class="type">
                 JS
            </span>
        </div>
        <div class="account">
            为了更好地模块化管理项目，不推荐仅仅使用一个目录用来存放项目，
            应该将项目按照模块或者功能分割为不同目录。这些目录形成了具有等级的目录树，
            为了项目的清晰，最好在每个目录下均存放一个 README.md 
            文件用来记录该目录的功能与修改记录（重大修改）。
             为了更好地模块化管理项目，不推荐仅仅使用一个目录用来存放项目，
            应该将项目按照模块或者功能分割为不同目录。这些目录形成了具有等级的目录树，
            为了项目的清晰，最好在每个目录下均存放一个 README.md 
            文件用来记录该目录的功能与修改记录（重大修改）。
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Project',
    components: {
        
    }
}
</script>

<style scoped>
.project{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    padding:10px auto;
    overflow-x: hidden;
    height: 100%;
}
.projectItem{
    width: 450px;
    height: 500px;
    border: gray solid 1px;
    margin:5px 10px;
}
.image{
    width:100%;
    height:80%;
    max-height: 450px;
}
.title{
    width: 100%;
    height: 30px;
    font-size: 18px;
    text-align: center;
}
.name{
    word-spacing: 0px;
}
.account{
    width: 100%;
    height: 60px;
    padding: 5px auto;
    font-size: 14px;
    text-indent:24px;
    text-overflow: ellipsis;
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.type{
    vertical-align: sub;
    margin:0 2px;
    font-size: 10px;
    background-color: gray;
}
</style>
