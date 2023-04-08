<template>
  <div id="app">
    <div>
      <ul>
        <li>not use pinia-storage: {{ store.id }}</li>
        <li>use pinia-storage-session:{{ store.user.userId }}</li>
        <li>use pinia-storage-session:{{ store.user.username }}</li>
        <li>use pinia-storage-session:{{ store.user.age }}</li>
        <li>use pinia-storage-local:{{ store.test }}</li>
      </ul>
    </div>
    <div style="margin: 16px;">
      runTime: {{ runTime }} ms
    </div>
    <div style="margin: 16px;">
      avgTime:{{ avgTime }} ms
    </div>
    <div style="margin: 16px;">
      testTime:{{ timeList.length }}
    </div>
    <button @click="change">change pinia state</button>
  </div>
</template>


<script setup>
import { ref, reactive, computed } from 'vue'
import { indexStore } from './store/indexPinia'
import { MutationType } from 'pinia'
import { PiniaStorage } from 'pinia-storage/pinia-storage'
const store = indexStore()
const storage = new PiniaStorage(store)
let runTime = ref(0)
let timeList = reactive([])
let avgTime = computed(() => {
  let sum = 0
  let i = 0
  timeList.forEach(x => {
    sum += x
    i++
  })

  return sum / i
})

const change = () => {
  let start = performance.now()
  try {
    storage.update(state => {
      state.user.age++
      state.test += 5
    })
  } catch (error) {
    console.log('====state.id not define to use pinia-storage====')
  }
  store.id++
  let end = performance.now()
  runTime.value = end - start
  timeList.push(runTime.value)
}

storage.watch()
</script>

<style lang="scss" scoped>
</style>