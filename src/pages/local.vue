<script setup lang="ts">
// @ts-expect-error yml
import localResume from '~/assets/resume/local.resume.yml'
import { useAppStore } from '~/stores/app'

const resume = ref(localResume)

const app = useAppStore()

onMounted(() => {
  app.curResume = {
    title: 'Local',
    url: 'https://raw.githubusercontent.com/wh1teAlter/web-resume/main/src/assets/resume/local.resume.yml',
    href: 'https://github.com/wh1teAlter/web-resume/blob/main/src/assets/resume/local.resume.yml',
  }
})
</script>

<template>
  <resume-all v-if="resume" :resume="resume" />
</template>
