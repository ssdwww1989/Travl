<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe647;</div>
        </div>
        <div class="header-input">
             <span class="iconfont">&#xe60b;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
        <div class="header-right">
            {{this.city}}
             <span class="iconfont arrow-icon">&#xe6aa;</span>
        </div>
        </router-link>
    </div>
</template>

<script>

export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
      height .86rem
      display flex
      color #ffffff
      line-height .86rem
      background $bgColor
      .header-left
        width .64rem
        float left
        .back-icon
          text-align center
          font-size .4rem
      .header-input
        flex 1
        line-height .64rem
        padding-left .2rem
        height .64rem
        margin-top .12rem
        margin-left .2rem
        background #fff
        border-radius 5px
        color #ccc
      .header-right
        width 1.24rem
        float right
        color #fff
        text-align center
        .arrow-icon
          margin-left -.04rem
          font-size .24rem
</style>
