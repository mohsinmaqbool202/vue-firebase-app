<template>
<div class="anim_container">
    <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        appear>
        <h1 delay="0" left="200">
            <i class="fas fa-phone fa-3x"></i>
            <!-- <i class="fab fa-apple fa-3x"></i> -->
        </h1>
    </transition>
    <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        appear>
        <h1 delay="220" left="350">
            <i class="fab fa-apple fa-3x"></i>
        </h1>
    </transition>
</div>
</template>


<script>
import Velocity from 'velocity-animate'; 

export default {    
    methods: {
        beforeEnter(el) {
            el.style.left="-100px";
            el.style.opacity=0;
        },
        enter(el, done) {
            let delay = parseInt(el.getAttribute('delay'));
            let left = parseInt(el.getAttribute('left'));
            Velocity(
                el,
                {opacity:1,left},
                {delay,duration:2000,complete:done}
            )
        }
    }
}
</script>

<style scoped>
.anim_container {
    position:relative;
}

.anim_container h1 {
    position: relative;
    display: inline-block;
    padding-bottom: 100px;
    padding-left: 62px;
    padding-right: 62px;
}
</style>