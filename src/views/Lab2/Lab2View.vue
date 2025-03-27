<script setup>
import { Content, Grid, Row, Column, Breadcrumb, Title, Button, Card, Input, Dropdown, Table, StatusIndicator, Pagination, DatePicker } from
    "@ded-wds-vue/ui";
import {ref} from "vue";
import AdResourceCard from "@/components/AdResourceCard.vue";

const projectInput = ref("新增廣告投放計畫")
const companyInput = ref("company1")

const breadcrumbData = [
  {
    label: "首頁",
    href: "/",
  },
  {
    label: "廣告投放管理",
    href: "/lab1",
  },
  {
    label: "廣告投放計劃",
    href: "/lab2",
  }
];
const dropdownData = [
  {
    label: "Company1",
    value: "company1",
  },
  {
    label: "Company2",
    value: "company2",
  },
];
</script>

<template>
  <Content>
    <Grid :gap="8">
      <h1>lab2</h1>
      <!-- [ header ] 麵包屑區塊 -->
      <Row>
        <Column :xs="12">
          <Breadcrumb :dataSource="breadcrumbData"></Breadcrumb>
        </Column>
      </Row>

      <!-- [ header ] 標題區塊 -->
      <Row>
        <Column :xs="6" align="start">
          <Title :level="2">新增廣告投放計畫</Title>
        </Column>
      </Row>

      <!-- [ Content ] 卡片區塊 -->
      <Row>
        <Column :xs="12" align="start">
          <Card className="overflow-auto">
            <Grid :gap="8">
              <!-- [ Content ] 卡片區塊-計劃訊息(標題) -->
              <Row>
                <Column :xs="12" align="start">
                  <Title :level="4" className="bg-neutral-200 px-2 py-1">計劃訊息</Title>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-計劃訊息(投放計劃名稱) -->
              <Row>
                <Column :xs="2" align="start">
                  <div class="flex">
                    <Title>投放計劃名稱</Title>
                    <div class="text-red-600">*</div>
                  </div>
                </Column>
                <Column :xs="4" align="start">
                  <Input
                    type="text"
                    :hasClear="true"
                    size="small"
                    v-model="projectInput"
                  />
                </Column>
                <Column :xs="6"><div></div></Column>
              </Row>
              <!-- [ Content ] 卡片區塊-計劃訊息(公司名稱) -->
              <Row>
                <Column :xs="2">
                  <Title>公司名稱</Title>
                </Column>
                <Column :xs="4" align="start">
                  <Dropdown
                    :dataSource="dropdownData"
                    size="small"
                    v-model="companyInput"
                  ></Dropdown>
                </Column>
                <Column :xs="6"><div></div></Column>
              </Row>
              <!-- [ Content ] 卡片區塊-計劃訊息(廣告素材) -->
              <Row>
                <Column :xs="2">
                  <div class="flex">
                    <Title>廣告素材</Title>
                    <div class="text-red-600">*</div>
                  </div>
                </Column>
                <Column :xs="10">
                  <Button themeColor="secondary" variant="filled" prefix="SvgSearch" className="mb-2">選擇廣告素材</Button>
                  <Grid :gap="8">
                    <Row>
                      <Column :xs="12">
                        <AdResourceCard
                          resourceName="FUCK1"
                          imgSrc="https://picsum.photos/300/200?random=1"
                        ></AdResourceCard>
                      </Column>
                    </Row>
                  </Grid>
                </Column>
              </Row>


              <!-- [ Content ] 卡片區塊-投放時段(標題) -->
              <Row>
                <Column :xs="12">
                  <Title :level="4" className="bg-neutral-200 px-2 py-1">投放時段</Title>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放時段(投放起迄日期) -->
              <Row>
                <Column :xs="2">
                  <div class="flex">
                    <Title className="leading-8">投放起迄日期</Title>
                    <div class="text-red-600">*</div>
                  </div>
                </Column>
                <Column :xs="8">
                  <Row>
                    <Column :xs="6">
                      <div class="flex gap-1 items-center">
                        <div class="whitespace-nowrap text-[#004C87]">
                          起始日期
                        </div>
                        <DatePicker
                          format="yyyy/mm/dd"
                          placeholder="YYYY/MM/DD"
                          v-model="modelValue"
                        />
                      </div>
                    </Column>
                    <Column :xs="6">
                      <div class="flex gap-1 items-center">
                        <div class="whitespace-nowrap text-[#004C87]">
                          結束日期
                        </div>
                        <DatePicker
                          format="yyyy/mm/dd"
                          placeholder="YYYY/MM/DD"
                          v-model="modelValue"
                        />
                      </div>
                    </Column>
                  </Row>
                </Column>
                <Column :xs="2">
                  <div></div>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放時段(是否指定時段) -->
              <Row>
                <Column :xs="2">
                  <div class="flex">
                    <Title className="leading-8">是否指定時段</Title>
                    <div class="text-red-600">*</div>
                  </div>
                </Column>
                <Column :xs="3">
                  radiobutton
                </Column>
                <Column :xs="7">
                  <div></div>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放時段(循環模式) -->
              <Row>
                <Column :xs="2">
                  <div></div>
                </Column>
                <Column :xs="1">
                  <div class="flex">
                    <Title>循環模式</Title>
                    <div class="text-red-600">*</div>
                  </div>
                </Column>
                <Column :xs="8">
                  <Row>
                    <Column :xs="12">
                      一堆radio button
                    </Column>
                  </Row>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放時段(是否插播) -->


              <!-- [ Content ] 卡片區塊-投放設備 -->
              <Row>
                <Column :xs="12" align="start">
                  <Title :level="4" className="bg-neutral-200 px-2 py-1">投放設備</Title>
                </Column>
              </Row>


              <!-- [ Content ] 卡片區塊-費用試算 -->
              <Row>
                <Column :xs="12" align="start">
                  <Title :level="4" className="bg-neutral-200 px-2 py-1">費用試算</Title>
                </Column>
              </Row>


            </Grid>
          </Card>
        </Column>
      </Row>

      <!-- [ Footer ] Button Group 區塊 -->
      <Row>
        <Column :xs="12">
          Button Group 區塊
        </Column>
      </Row>

    </Grid>
  </Content>

</template>

<style scoped>

</style>