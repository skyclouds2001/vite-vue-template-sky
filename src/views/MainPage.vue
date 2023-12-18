<script setup lang="ts">
import { ElButton, ElIcon } from 'element-plus'
import { User } from '@element-plus/icons-vue'
import { Icon } from '@iconify/vue'
import { MainComponent } from '@/components'
import { useMainStore } from '@/store'

const store = useMainStore()

const increase = (): void => {
  store.increase()
}

const decrease = (): void => {
  store.decrease()
}
</script>

<template>
  <div class="w-10">Main</div>
  <main-component />
  <div>
    <el-icon><User /></el-icon>
  </div>
  <div>
    <Icon icon="mdi-light:home" />
  </div>
  <el-button type="primary">Default</el-button>
  <div>
    <span @click="decrease">-</span>
    <span>{{ store.count }}</span>
    <span @click="increase">+</span>
  </div>
</template>

<style scoped lang="scss"></style>
