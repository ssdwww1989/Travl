<template>
 <div>
   <detail-header></detail-header>
   <detail-banner :sightName="sightName"  :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
   <detail-list :list="list"></detail-list>
   <div class="content"></div>
 </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/List'
import axios from 'axios'
export default {
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  name: 'Detail',
  methods: {
    getDeatilInfo () {
      axios.get('/api/detail.json?id', {
        params: {
          id: this.$route.params.id // 传动态路由的值 给ajax请求
        }
      })
        .then(this.getDetailSucc)
    },
    getDetailSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDeatilInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
