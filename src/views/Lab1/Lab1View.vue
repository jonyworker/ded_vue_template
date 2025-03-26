<script setup>
import { Content, Grid, Row, Column, Breadcrumb, Title, Button, Card, Input, Dropdown, Table, StatusIndicator, Pagination } from
    "@ded-wds-vue/ui";
import ComplexButton from "@/components/ComplexButton.vue";
import { useRouter } from "vue-router"
import { ref } from "vue"
const router = useRouter()

const projectInput = ref("")
const companyInput = ref("")
const statusInput = ref("")

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
    key: "column6",
    title: "廣告播放結果",
    align: "center",
    width: "142px",
  },
  {
    key: "column7",
    title: "",
    align: "center",
    width: "56px",
  },
]
const ComplexButtons = [
  {
    label: "檢查計劃",
    prefix: "SvgVisibility",
  },
  {
    label: "編輯計劃",
    prefix: "SvgPlus",
  },
  {
    label: "刪除計劃",
    prefix: "SvgFan",
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
                      v-model="projectInput"
                    />
                  </Column>
                  <Column :xs="6">
                    <Input
                      type="text"
                      :hasClear="true"
                      placeholder="請輸入公司名稱"
                      size="medium"
                      prefix="SvgSearch"
                      v-model="companyInput"
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
                      v-model="statusInput"
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
                  <!-- 投放計劃名稱 -->
                  <template #head="{item}">
                    <Title themeColor="primary">{{item.head}}</Title>
                  </template>

                  <!-- 發佈狀態 -->
                  <template #column4="{item}">
                    <!-- FIXME: StatusIndicator 的 isShowDot false 時 storybook 不會出現  -->
                    <StatusIndicator themeColor="info" variant="soft" size="small" :isShowDot="false">
                      {{item.column4}}
                    </StatusIndicator>
                  </template>

                  <!-- 審核結果 -->
                  <template #column5="{item}">
                    <div class="flex gap-2">
                      <StatusIndicator
                        :themeColor="item.column5 === '通過' ? 'success' : 'error'"
                        variant="soft"
                        :prefix="item.column5 === '通過' ? 'SvgSuccessCircle' : 'SvgErrorCircle'"
                        size="small"
                        :isShowDot="false"
                        className="w-full"
                      >
                        {{item.column5}}
                      </StatusIndicator>
                      <Button
                        themeColor="neutral"
                        variant="soft"
                        size="small"
                        width="fit"
                      >
                        檢視
                      </Button>
                    </div>
                  </template>

                  <!-- 廣告播放結果 -->
                  <template #column6="{item}">
                    <Button
                      themeColor="neutral"
                      variant="soft"
                      prefix="SvgVisibility"
                      size="small"
                      width="fit"
                    >
                      查看明細
                    </Button>
                  </template>

                  <!-- 按鈕組 -->
                  <template #column7="{item}">
                    <ComplexButton
                      :dataSource="ComplexButtons"
                      themeColor="neutral"
                      variant="soft"
                      prefix="SvgMoreVert"
                    ></ComplexButton>
                  </template>

                </Table>
              </Column>
            </Row>
          </Card>
        </Column>
      </Row>

      <!-- [ Footer ] Pagination區塊 -->
      <Row>
        <Column :xs="12">
          <Pagination
            :totalItems="5"
            :currentPage="1"
            :itemsPerPageOptions="[10,20,50]"
            :defaultItemsPerPage="5"
            :isShowPageInfo="true"
            @onPageChange="handlePageChange()"
          ></Pagination>
        </Column>
      </Row>


    </Grid>

  </Content>


</template>

<style lang="scss">
@use "../../style/theme/default_variable.scss" as *;
.ad-resource-table {
  .ded-table-thead {
    background: #f0f0f0;
  }

  .ded-table-thead-tr-th {
    color: $text-color-secondary;
  }
}
</style>