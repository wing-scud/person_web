<template>
<div class="introduction">
    <div class="title">
        想了解更多？<br>
        你需要的都在这里。
    </div>
    <div class="mainPart">
        <div class="social">
            <div class="socialRela">
                <div class="socialTitle">
                    社交网络
                </div>
                <div class="relaBar" v-for="i in 5" :key="i">
                    <div class="relaLogo">
                        <img src="@/assets/腾讯qq.jpg" class="logo">
                    </div>
                    <div class="relaInfor">
                        <div class="relaName">
                            腾讯
                        </div>
                        <div class="relaNumber">
                            1205586003@qq.com
                        </div>
                    </div>
                </div>
            </div>
            <div class="socialMedia">
                <img src="@/assets/centerImg.jpg" class="media">
            </div>
            <div class="socialRela">
                <div class="socialTitle">
                    支持一下
                </div>
                <div class="dimension" v-for="i in 2" :key="i"> 
                    <div style="font-size:18x">
                        微信订阅
                    </div>
                    <div>
                    <img src="@/assets/vx.jpg" class="dimensionImg">
                    </div>
                    <span style="font-size:13px">
                        微信订阅最近活动
                    </span>
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
                            <img src="@/assets/default.jpg" class="userImge">
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
</div>
</template>

<script>
export default {
    name: 'Introduction',
    components: {}
}
</script>

<style scoped>
.introduction {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
}

.title {
    margin: 120px 0 20px 0;
    text-align: center;
    width: 100%;
    height: 150px;
    font-size: 40px;
}

.mainPart {
    width: 100%;
    height: 75%;
    /* height: 1080px; */
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.social {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1500px;
    width: 100%;
    height: 60%;
}

.talk {
    width: 100%;
    height: 30%;
    max-width: 1500px;
}

.socialTitle {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    height: 40px;
    margin-bottom: 20px;
}

.socialRela {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* max-width: 250px; */
}

.relaBar {
    /* width: 100%; */
    height: 80px;
    display: flex;
    flex-direction: row;
    margin: 10px 0 0 0;
}

.socialMedia {
    flex-grow: 5;
    padding: 0 25px 0 25px;
    /* max-width: 600px; */
    height: 100%;
    width: 800px;
}

.relaLogo {
    max-width: 80px;
    width: 40%;
    /* min-height: 40px; */
    height: 80px;
}

.relaInfor {
    width: 60%;
    text-align: center;
    padding: 0 0 0 10px;
    height: 100%;
}

.relaName {
    width: 100%;
    height: 40px;
}

.relaInfor {
    width: 100%;
    height: 40px;
}

.media {
    width: 100%;
    height: 100%;
}

.logo {
    width: 80px;
    height: 80px;
}

.talkTitle {
    width: 100%;
    height: 30px;
    text-align: left;
    text-indent: 80px;
    margin-bottom: 15px;
}

.talkContent {
    height: 200px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
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
    white-space: break-all;
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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    text-align: center;
    margin: 20px;
}

.dimensionImg {
    width: 100px;
    height: 100px;
    margin: 5px;
}
</style>
