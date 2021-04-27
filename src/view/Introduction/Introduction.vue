<template>
<div class="introduction">
    <div class="title">
        想了解更多？<br>
        你需要的都在这里。
    </div>
    <div class="mainPart">
        <div class="socialRelaLeft">
            <div class="socialTitle">
                社交网络
            </div>
            <div class="relaBar" v-for="i in 5" :key="i">
                <div class="relaName">
                    腾讯
                </div>
                <div class="infor">
                    1205586003@qq.com
                </div>
            </div>
        </div>

        <div class="socialMedia">
            <img src="@/assets/images/centerImg.jpg" class="media">
        </div>
        <div class="socialRelaRight">
            <div class="socialTitle">
                支持一下
            </div>
            <div class="dimension" v-for="i in 2" :key="i">
                <div style="font-size:18x">
                    微信订阅
                </div>
                <div>
                    <img src="@/assets/images/vx.jpg" class="dimensionImg">
                </div>

                <div style="font-size:13px">
                    微信订阅最近活动
                </div>
            </div>
        </div>
    </div>
    <div class="talk">
        <div class="talkTitle">
            留言板
        </div>
        <div class="talkContent">
            <div class="talkText" v-for="i in 12 " :key="i">
                <div class="user">
                    <div class="userIcon">
                        <img src="@/assets/images/default.jpg" class="userImge">
                    </div>
                    <span class="userId">
                        Asia
                    </span>
                </div>
                <div class="text">
                    真棒呀，设计的真的是一流呀。您太厉害了，我要好好和你学习!!!!!!!!!!!!!!!!你真的是我的榜样呀
                </div>
            </div>
        </div>
        <div class="talkOther">
            <span>
                查看其它留言 >
            </span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Introduction',
    props: [
        "height", "width"
    ],
    components: {}
}
</script>

<style scoped>
.introduction {
    width: 100%;
    margin: 0 auto;
    height: 100%;
}

.title {
    text-align: center;
    width: 100%;
    height: 150px;
    font-size: 40px;
}

.mainPart {
    width: (100% -30px);
    height: calc(100% - 450px);
    display: flex;
    flex-direction: row;
    align-items: center;
}

.talk {
    width: calc(80% - 30px);
    height: 250px;
    padding: 0 15%;
}

.socialTitle {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    height: 40px;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
}

.socialRelaLeft {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.socialRelaRight {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.relaBar {
    height: 80px;
    margin: 0 10px 5px 0;
    width: 100%;
}

.socialMedia {
    flex-grow: 4;
    padding: 15px 15px;
    height: 100%;
    width: 800px;
}

.infor {
    width: 100%;
    height: 24px;
    text-align: center;
}

.relaName {
    height: 30px;
    width: 100%;
    text-align: center;
}

.media {
    width: 100%;
    height: 100%;
}

.talkTitle {
    width: 100%;
    height: 30px;
    text-align: left;
    text-indent: 80px;
}

.talkContent {
    height: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100%;
}

.talkOther {
    height: 30px;
    text-align: center;
}

.talkOther:hover {
    color: red
}

.talkText {
    /* display: flex;
    flex-direction: row; */
    height: 80px;
    width: 200px;
    margin: 10px 15px;
}

.user {
    width: 100%;
    height: 30px;
    padding-bottom: 5px;
    display: -webkit-inline-box;
}

.userIcon {
    height: 100%;
    max-height: 25px;
    width: 25px;
    text-align: left;
}

.userIcon img {
    height: 100%;
    width: 25px;
}

.user span {
    font-size: 15px;
    line-height: 25px;
    height: 100%;
    padding: 0 0 0 10px
}

.text {
    width: 100%;
    height: 30px;
    font-size: 10px;
    line-height: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    white-space: normal;
    -webkit-box-orient: vertical;
}

.text:hover {
    text-overflow: inherit;
    overflow: visible;
}

.dimension {
    height: 150px;
    width: 100%;
    letter-spacing: 3px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    text-align: center;
    margin: 20px 0;
}

.dimensionImg {
    margin: 0 calc(100% - 100px);
    width: 100px;
    height: 100px;
    margin: 5px;
}
</style>
