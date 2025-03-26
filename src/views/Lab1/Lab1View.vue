<script setup>

import { Content, Grid, Row, Column, Breadcrumb, Title, Button } from "@ded-wds-vue/ui";
import { useRouter } from "vue-router"

const router = useRouter()
const BreadcrumbData = [
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

function goToLab2() {
  router.push("/lab2")
}

</script>
<template>
  <Content>
    <Grid :gap="8">
      <!-- [ header ] 麵包屑 -->
      <Row>
        <Column :xs="12">
          <Breadcrumb :dataSource="BreadcrumbData"></Breadcrumb>
        </Column>
      </Row>

      <!-- [ header ] 標題 -->
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
            Button
          </Button>
        </Column>
      </Row>
    </Grid>

  </Content>
  <h1 class="text-3xl font-bold underline text-cyan-500">
    Hello world!
  </h1>

</template>