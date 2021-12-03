<template>
<div>
    <carousel 
        :per-page="1" 
        :mouse-drag="true"
        :paginationEnabled="false"
        :autoplay="true" 
        :navigationEnabled="true">
        <slide>
            <div class="row">
                <div class="col-md-6 text">
                    Slide 1
                </div>
                <div class="col-md-6">
                    <img :src="SlideOne" class="slideOne">
                </div>
            </div>
        </slide>
        <slide>
            <div class="row">
                <div class="col-md-6 text">
                    Slide 2
                </div>
                <div class="col-md-6">
                    <img :src="SlideTwo" class="slideTwo">
                </div>
            </div>
        </slide>
    </carousel>
</div>
</template>

<script>
import SlideOne from '../../../public/assets/images/slide_one.jpg';
import SlideTwo from '../../../public/assets/images/slide_two.jpg';
import { Carousel, Slide } from 'vue-carousel';

export default {
   name: 'Slider',
   components: {
    Carousel,
    Slide
  },
  data() {
      return {
          SlideOne: SlideOne,
          SlideTwo: SlideTwo
      }
  }
}
</script>

<style scoped>
.VueCarousel-slide{
    height: 600px;
    width: 100%;
    font-family: 'Monoton', cursive;
    background-image: linear-gradient(to bottom right, #71c2a0, #71c2a0);
}

.text {
    font-size: 126px;
    padding-top: 8%;
    padding-left: 9%;
    color: rgb(134, 31, 31);
    line-height: initial;
}

.slideOne {
    padding-top: 5%;
    width: 70%;
    padding-bottom: 5px;
}

.slideTwo {
    padding-top: 5%;
    width: 70%;
}
</style>