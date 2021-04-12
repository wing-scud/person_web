<template>
<div class="slideShow" :style="{width:width+'px',height:height+'px'}">

</div>
</template>

<!-- 鼠标移动区域内显示左右箭头
      点击下方空白点，实现切换
      自动轮播，
      显示为一个主图片，二个半掩藏的图片
      最大为6个，超出六个只显示6个
-->

<script>
export default {
    name: "SlideShow",
    props: {
        data: {
            type: Array, //{id,src,name,}
            validator: function (value) {
                return value.length < 6
            }
        },
        slideTime: {
            type: Number,
            default: 1,
        },
        width: {
            type: Number
        },
        height: {
            type: Number
        }
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    },
    beforeDestroy() {

    }
}
</script>

<style  scoped>
</style>
