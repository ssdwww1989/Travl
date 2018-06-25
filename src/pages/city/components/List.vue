<template>
  <div class="list" ref="wrapper">
    <div>
       <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
            <div class="button-wrapper">
            <div class="button">
              {{this.currentCity}}
            </div>
            </div>
        </div>
        </div>
        <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div @click="handleCityClick(item.name)" class="button-wrapper" v-for="item of hotCities" :key="item.id">
                <div class="button">
                    {{item.name}}
                </div>
            </div>
        </div>
        </div>
        <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                <div @click="handleCityClick(item.name)"  class="item border-bottom" v-for="item of item" :key="item.id">{{item.name}}</div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  computed: {
    ...mapState({
      currentCity: 'city' // 把vuex里面的city公用数据映射到currentCity
    })
  },
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    handleCityClick (cityName) {
      // this.$store.commit('changeCity', cityName)
      this.changeCity(cityName)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0] // 获取到letter值对应的area区域
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color: #ccc
    .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    left 0
    top 1.77rem
    right 0
    bottom 0
  .title
    line-height .54rem
    background #eeeeee
    padding-left .2rem
    color #666666
    font-size .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
  .button-wrapper
    float left
    width 33.33%
    .button
      margin .1rem
      padding .1rem 0
      text-align center
      border .02rem solid #ccc
      border-radius .06rem
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>
