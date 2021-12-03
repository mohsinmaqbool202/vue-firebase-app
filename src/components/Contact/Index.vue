<template>
<div class="content_wrapper">
    <div class="container">
        <div class="first" v-scroll-reveal.reset="{delay:200,scale:2}">
            <h1 class="title">Contact Today</h1>
        </div>
        <div class="second" v-scroll-reveal.reset="{delay:300,afterReveal:()=>{
            secondAnim=true
        }}">
            <div v-if="secondAnim">
                <ANI></ANI>
            </div>
        </div>
        <div class="third" align="center" v-scroll-reveal.reset="{delay:200,scale:2,afterReveal:()=>{
            thirdAnim=true
        }}">
            <div v-if="thirdAnim">
                <span class="contact">
                Contact us on 
                </span>
                <span class="number">
                    0302-3831605
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ANI from './Ani.vue';
export default {
    components: { ANI },
    data() {
        return {
            secondAnim: false,
            thirdAnim: false 
        }
    }
}
</script>

<style scoped>
.content_wrapper {
    background-image: linear-gradient(to bottom right, #71c2a0, #71c2a0);
    height: 620px;
    font-family: 'Yanone Kaffeesatz', sans-serif;
}

.title {
    padding: 70px;
    font-size: 100px;
    text-align: center;
    color: #fff;
}

.third span.contact {
    font-size: 80px;
    text-align: center;
    color: red;
    font-weight: 900;
}

.third span.number {
    font-size: 90px;
    text-align: center;
    color: #fff;
    font-weight: 900;
}
</style>