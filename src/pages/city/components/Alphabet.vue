<template>
  <ul class="list">
    <li :ref="item" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleLetterClick" class="item" v-for="item of letters" :key="item">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStaus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStaus = true
    },
    handleTouchMove (e) {
      if (this.touchStaus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 89
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStaus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .4rem
      color $bgColor
</style>
