<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/Icons'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  name: 'Home'
}
</script>
