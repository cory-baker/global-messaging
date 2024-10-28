<!-- this does not work  V -->
<template>
  <div class="chat-channel">
    <ChatChannelVue />
  </div>
</template>
<script setup>
import { applyPureReactInVue } from 'veaury'
import MyComponent from '../react_app/myComponent.jsx'
import { shallowRef, onMounted } from 'vue'

let ChatChannelVue = shallowRef('')

onMounted(async () => {
  ChatChannelVue.value = applyPureReactInVue(MyComponent)
})
</script>

<!-- this works V -->
<!-- <template>
  <div class="chat-channel">
    <h1>hello from vue.js</h1>
  </div>
</template> -->
