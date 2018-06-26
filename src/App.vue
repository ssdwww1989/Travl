<template>
  <div id="app">
     <keep-alive exclude="Detail"> <!-- keep-alive 请求放在内存中不需要重复请求 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
