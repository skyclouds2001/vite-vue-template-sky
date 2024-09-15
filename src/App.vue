<script setup lang="ts">
import { ElConfigProvider, ElIcon } from 'element-plus'
// @ts-expect-error can't find type definition file
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { Loading } from '@element-plus/icons-vue'
import { locale } from 'dayjs'
import 'dayjs/locale/zh-cn'

locale('zh-cn')
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <transition>
          <keep-alive>
            <suspense>
              <component :is="Component" />
              <template #fallback>
                <el-icon>
                  <Loading />
                </el-icon>
              </template>
            </suspense>
          </keep-alive>
        </transition>
      </template>
    </router-view>
  </el-config-provider>
</template>

<style scoped></style>
