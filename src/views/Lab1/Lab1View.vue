<script setup>

import { Content, Grid, Row, Column, Breadcrumb, Title, Button, Card, Input, Dropdown, Table } from "@ded-wds-vue/ui";
import { useRouter } from "vue-router"

const router = useRouter()
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
    label: "已發佈",
    value: "published",
  },
  {
    label: "已送審",
    value: "reviewed",
  },
];

const tableData = [
  {
    column1: "CompanyA",
    column2: "2024.10.01 10:00",
    column3: "2024.10.07 18:00",
    column4: "已發佈",
    column5: "通過",
    head: "品牌廣告A",
  },
  {
    column1: "CompanyB",
    column2: "2024.10.01 10:00",
    column3: "2024.10.07 18:00",
    column4: "已送審",
    column5: "不通過",
    head: "品牌廣告B",
  },
  {
    column1: "CompanyC",
    column2: "2024.10.01 10:00",
    column3: "2024.10.07 18:00",
    column4: "已送審",
    column5: "通過",
    head: "品牌廣告C",
  },
  {
    column1: "CompanyD",
    column2: "2024.10.01 10:00",
    column3: "2024.10.07 18:00",
    column4: "已發佈",
    column5: "不通過",
    head: "品牌廣告D",
  },
  {
    column1: "CompanyE",
    column2: "2024.10.01 10:00",
    column3: "2024.10.07 18:00",
    column4: "已送審",
    column5: "通過",
    head: "品牌廣告E",
  },
]
const tableColumns = [
  {
    key: "head",
    title: "投放計劃名稱",
    width: "180px",
  },
  {
    key: "column1",
    title: "公司名稱",
    width: "164px",
  },
  {
    key: "column2",
    title: "開始時間",
    width: "110px",
  },
  {
    key: "column3",
    title: "結束時間",
    width: "110px",
  },
  {
    key: "column4",
    title: "發佈狀態",
    width: "116px",
  },
  {
    key: "column5",
    title: "審核結果",
    width: "180px",
  },
  {
    align: "center",
    key: "column6",
    title: "廣告播放結果",
    width: "142px",
  },
  {
    align: "center",
    key: "column7",
    title: "",
    width: "56px",
  },
]

function goToLab2() {
  router.push("/lab2")
}

</script>
<template>
  <Content>
    <Grid :gap="8">
      <!-- [ header ] 麵包屑區塊 -->
      <Row>
        <Column :xs="12">
          <Breadcrumb :dataSource="breadcrumbData"></Breadcrumb>
        </Column>
      </Row>

      <!-- [ header ] 標題區塊 -->
      <Row>
        <Column :xs="6" align="start">
          <Title :level="2">廣告投放計劃</Title>
        </Column>
        <Column :xs="6" align="end">
          <Button
            themeColor="primary"
            variant="filled"
            prefix="SvgPlus"
            size="medium"
            width="fit"
            borderWidth="1px"
            radius="4px"
            :isDisabled="false"
            @click="goToLab2()"
          >
            新增計劃
          </Button>
        </Column>
      </Row>

      <!-- [ Content ] 卡片區塊 -->
      <Row>
        <Column :xs="12">
          <!-- FIXME: Card 的 #header #footer 沒值時不出現 ded-card-header ded-card-footer  -->
          <Card className="overflow-auto">
            <!-- [ Content ] 卡片區塊 filter -->
            <Row :hasGap="true">
              <Column :xs="2">
                <Title :level="3">計畫列表</Title>
              </Column>

              <Column :xs="6">
                <Row :hasGap="true">
                  <Column :xs="6">
                    <Input
                      type="text"
                      :hasClear="true"
                      placeholder="請輸入投放計劃名稱"
                      size="medium"
                      prefix="SvgSearch"
                      v-model="modelValue"
                    />
                  </Column>
                  <Column :xs="6">
                    <Input
                      type="text"
                      :hasClear="true"
                      placeholder="請輸入公司名稱"
                      size="medium"
                      prefix="SvgSearch"
                      v-model="modelValue"
                    />
                  </Column>
                </Row>
              </Column>
              <Column :xs="4">
                <Row :hasGap="true">
                  <Column :xs="6">
                    <Dropdown
                      :dataSource="dropdownData"
                      placeholder="狀態"
                      size="medium"
                      v-model="modelValue"
                    ></Dropdown>
                  </Column>
                  <Column :xs="6">
                    <Button
                      themeColor="info"
                      variant="filled"
                      size="medium"
                      width="fluid"
                      radius="4px"
                      :isDisabled="false"
                      className="flex-1"
                    >
                      查詢
                    </Button>
                  </Column>
                </Row>
              </Column>
            </Row>

            <!-- [ Content ] 卡片區塊 table -->
            <Row>
              <Column :xs="12">
                <Table
                  :dataSource="tableData"
                  :columns="tableColumns"
                  :showCheckbox="false"
                  :showVerticalBorders="false"
                  :isSprite="false"
                  className="mt-4 mb-6 ad-resource-table"
                >
                  <template #head="{item}">

                    <Title themeColor="primary">{{item.head}}</Title>
                  </template>
                  <template #column5="{item}">
                    {{item.column5}}
                    檢視按鈕
                  </template>
                </Table>
              </Column>
            </Row>
          </Card>
        </Column>
      </Row>

      <!-- [ Footer ] Pagination區塊 -->


    </Grid>

  </Content>


</template>