<template>
<div>
    <div class="title">热销推荐</div>
    <ul>
        <li class="item  border-bottom" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl" alt="">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
          title: '金海湖风景区',
          desc: '40个国家的109处著名古迹名胜微缩景点'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
          title: '金海湖风景区',
          desc: '40个国家的109处著名古迹名胜微缩景点'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
          title: '金海湖风景区',
          desc: '40个国家的109处著名古迹名胜微缩景点'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
          title: '金海湖风景区',
          desc: '40个国家的109处著名古迹名胜微缩景点'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
          title: '金海湖风景区',
          desc: '40个国家的109处著名古迹名胜微缩景点'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
   overflow hidden
   display flex
   height 1.9rem
   .item-img
     width 1.7rem
     height 1.7rem
     padding .1rem
   .item-info
     flex 1
     padding .1rem
   .item-tile
     line-height .4rem
     font-size .32rem
   .item-desc
     line-height .4rem
     color #ccc
   .item-button
     line-height .44rem
     margin-top .16rem
     background #ff9300
     padding 0 .2rem
     border-radius .06rem
     color #ffffff
</style>
