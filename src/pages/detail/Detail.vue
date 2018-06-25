<template>
 <div>
   <detail-header></detail-header>
   <detail-banner></detail-banner>
   <div class="content"></div>
 </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
export default {
  components: {
    detailBanner,
    detailHeader

  },
  name: 'Detail'
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
