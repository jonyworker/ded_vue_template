<script setup>
import { Button, Card } from "@ded-wds-vue/ui"
import { ref, onMounted, onUnmounted, nextTick } from "vue"
import { getTargetPosition } from "@/utils/positionUtils"

// 定義 Props
const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  themeColor: {
    type: String,
  },
  variant: {
    type: String,
  },
  prefix: {
    type: String,
  },
  className: {
    type: String,
    default: "",
  },
})

const isDropdownVisible = ref(false) // 下拉面板顯示控制
const dropdown = ref(null) // 綁定元素
const dropdownPosition = ref({}) // 儲存下拉菜單定位樣式
const gap = 6 // 下拉菜單間距
const placement = "bottom-right" // 預設位置方向

// 點擊外部關閉處理
function handleClickOutside(event) {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isDropdownVisible.value = false
  }
}

// 更新下拉菜單位置
function updateDropdownPosition() {
  if (dropdown.value) {
    const triggerRect = dropdown.value.getBoundingClientRect()
    dropdownPosition.value = getTargetPosition(
      {
        top: triggerRect.top + window.scrollY, // 考慮垂直滾動偏移
        left: triggerRect.left + window.scrollX, // 考慮水平滾動偏移
      },
      { width: triggerRect.width, height: triggerRect.height },
      placement,
      `${gap}px`,
      false,
      900,
    )
  }
}

// 註冊事件
onMounted(() => {
  document.addEventListener("click", handleClickOutside)
  window.addEventListener("resize", updateDropdownPosition)
  window.addEventListener("scroll", updateDropdownPosition)
  nextTick(() => updateDropdownPosition())
})

// 清除事件
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside)
  window.removeEventListener("resize", updateDropdownPosition)
  window.removeEventListener("scroll", updateDropdownPosition)
})
</script>

<template>

  <!-- 下拉觸發區 -->
  <div ref="dropdown">
    <Button
      :themeColor="props.themeColor"
      :variant="props.variant"
      :prefix="props.prefix"
      @click="() => { isDropdownVisible = !isDropdownVisible; updateDropdownPosition(); }"
    ></Button>
  </div>


  <!-- 下拉內容 -->
  <Teleport to="body">
    <div
      v-if="isDropdownVisible"
      class="ded-dropdown-menu"
      :style="dropdownPosition"
    >
      <!-- FIXME: Card 的 #header #footer 沒值時不出現 ded-card-header ded-card-footer  -->
      <Card>
        <div class="flex flex-wrap gap-2">
          <Button
            v-for="(item, index) in props.dataSource"
            :key="index"
            themeColor="neutral"
            variant="soft"
            :prefix="item.prefix"
            width="fluid"
          >
            {{item.label}}
          </Button>
        </div>
      </Card>
    </div>

  </Teleport>
</template>
