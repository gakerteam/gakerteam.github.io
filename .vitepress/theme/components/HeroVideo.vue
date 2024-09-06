<script setup>
import { onMounted, ref } from 'vue'

const showVideo = ref(true)

onMounted(() => {
  if (/MicroMessenger/i.test(window.navigator.userAgent)) {
    showVideo.value = false
  }
})
</script>

<template>
  <div class="flex items-center min-[960px]:translate-x-8 min-[960px]:translate-y-8 xl:pl-8 mt-10 min-[960px]:mt-0">
    <div class="overflow-hidden rounded-lg shadow-lg">
      <img
        class="translate-x-[1px] rounded-lg"
        src="https://www.gaker.com/wp-content/uploads/2024/07/psa_home-2.png"
      />
    </div>
  </div>
</template>
