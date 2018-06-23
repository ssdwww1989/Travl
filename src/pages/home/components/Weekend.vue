<template>
<div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item  border-bottom" v-for="item of recommendList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '金海湖风景区',
          desc: '40个国家的109处著名古迹名胜微缩景点'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '金海湖风景区',
          desc: '40个国家的109处著名古迹名胜微缩景点'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '金海湖风景区',
          desc: '40个国家的109处著名古迹名胜微缩景点'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '金海湖风景区',
          desc: '40个国家的109处著名古迹名胜微缩景点'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '金海湖风景区',
          desc: '40个国家的109处著名古迹名胜微缩景点'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%
    .item-img
          width 100%
    .item-info
        padding .1rem
    .item-tile
        line-height .4rem
        font-size .32rem
        ellipsis()
    .item-desc
        line-height .4rem
        color #ccc
</style>
