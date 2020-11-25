<template>
    <div class="slider-bar" :style="{backgoundColor:String,width:width+'px',height:height+'px'}">
        <template v-for="item in list">
            <div class="bar" :key="item.id" @click.capture="handClick(item.id,$event)" :id="item.id">
                <span class="text">{{item.name}}</span>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    name:"SliderBar",
    props:{
        list:Array,
        backgroundColor:String,
        width:Number,
        height:Number,
    },
    data(){
        return {

        }
    },
    methods:{
        handClick(id,event){
            this.$emit("sliderClick",id,event)
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
.slider-bar{
    width:200px;
    height: 100%;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin:10px 20px 0 20px;
}
.bar{
    width:100%;
    height:30px;
    font-size: 20px;
    margin:10px 0 10px 0;
}
</style>