<template>
  <button @click="toLogin">跳转登录页面</button>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: "home",
  setup() {
    const router = useRouter()
    const toLogin = ( () => {
      router.push({
        name:'Login'
      })
    } )

    return {
      toLogin
    }
  }
}
</script>

<style scoped>

</style>