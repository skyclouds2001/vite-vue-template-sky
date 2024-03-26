<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
// @ts-expect-error can't find type definition file
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { locale } from 'dayjs'
import 'dayjs/locale/zh-cn'

locale('zh-cn')
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped></style>
