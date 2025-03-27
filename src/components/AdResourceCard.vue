<script setup>
import { Content, Grid, Row, Column, Breadcrumb, Title, Button, Card, Input, Dropdown, Table, StatusIndicator, Pagination, DatePicker, Image } from
    "@ded-wds-vue/ui";
import {ref} from "vue";


// 定義 Props
const props = defineProps({
  resourceName: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  actionHours: {
    type: Number,
  },
  actionMinutes: {
    type: Number,
  },
  actionSeconds: {
    type: Number,
  },
})


</script>

<template>
  <Card class="bg-neutral-100">
    <Grid>
      <Row :hasGap="true">
        <!-- 切換選單 -->
        <Column :xs="1" className="w-fit">
          <button class="p-0 navbar-switch">
            <div class="navbar-switch-bar"></div>
            <div class="navbar-switch-bar"></div>
            <div class="navbar-switch-bar"></div>
            <span class="navbar-switch-sr-only">切換選單</span>
          </button>
        </Column>
        <!-- 圖片 -->
        <Column :xs="3">
          <Image
            :src="props.imgSrc"
            alt="placeholder"
            ratio="16x9"
            objectFit="cover"
          ></Image>
        </Column>
        <Column :xs="8">
          <Grid :gap="8">
            <!-- 廣告素材名稱 -->
            <Row>
              <Column :xs="2">
                <div class="flex items-center">
                  <Title className="leading-4">廣告素材名稱</Title>
                  <div class="text-red-600">*</div>
                </div>
              </Column>
              <Column :xs="1">
                <div></div>
              </Column>
              <Column :xs="8">
                <Title>{{props.resourceName}}</Title>
              </Column>
            </Row>
            <!-- 播放時間 -->
            <Row>
              <Column :xs="3">
                <div class="flex items-center">
                  <Title className="leading-4">播放時間</Title>
                  <div class="text-red-600">*</div>
                </div>
              </Column>
              <Column :xs="8">
                <div class="flex items-center gap-3">
                  <Input
                    type="number"
                    :hasClear="false"
                    size="small"
                    maxLimit="2"
                    placeholder=""
                    v-model="props.actionHours"
                  />
                  <span class="whitespace-nowrap">小時</span>
                  <Input
                    type="number"
                    :hasClear="false"
                    size="small"
                    maxLimit="2"
                    placeholder=""
                    v-model="props.actionMinutes"
                  />
                  <span class="whitespace-nowrap">分</span>
                  <Input
                    type="number"
                    :hasClear="false"
                    size="small"
                    maxLimit="2"
                    placeholder=""
                    v-model="props.actionSeconds"
                  />
                  <span class="whitespace-nowrap">秒</span>
                </div>
              </Column>
            </Row>
          </Grid>
        </Column>
      </Row>
    </Grid>
  </Card>

</template>

<style scoped lang="scss">

</style>