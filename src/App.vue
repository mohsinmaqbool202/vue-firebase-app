<template>
  <div id="app">
    <Header></Header>
    <Slider></Slider>
    <Tabs></Tabs>
    <Contact></Contact>
  </div>
</template>

<script>
import Header from './components/Comman/Header.vue';
import Slider from './components/Includes/Slider.vue';
import Tabs from './components/Includes/Tabs.vue';
import Contact from './components/Contact/Index.vue';

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Tabs,
    Contact
  }
}
</script>

<style>
.navbar i{
  color: #fff;
  cursor: pointer;
}
</style>
