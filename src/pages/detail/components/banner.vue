<template>
  <div>
    <div class="banner" @click = "handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_600x330_5d562f69.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">
            {{this.sightName}}
            </div>
        <div class="banner-number">
            <span class="iconfont banner-icon">&#xe626;</span>
            {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <OpacityAnimation>
      <common-gallary :imgs='gallaryImgs' v-show="showGallary" @close = "handleGallaryClose"></common-gallary>
    </OpacityAnimation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import OpacityAnimation from 'common/fade/OpacityAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    OpacityAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        flex 1
        font-size .32rem
        padding .02rem
      .banner-number
        line-height .32rem
        height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        font-size .24rem
      .banner-icon
        font-size .24rem
</style>
