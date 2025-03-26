<script setup>
import { Layout, Header, Content, Side, Navbar, SideNav } from "@ded-wds-vue/ui";
const dataSource = [];
const sideNavData = [
  {
    label: "首頁",
    prefix: "SvgHome",
    path: "/",
    order: 1,
  },
  {
    label: "客戶管理",
    prefix: "SvgUser",
    path: "/users",
    isDisabled: true,
    order: 2,
    children: [
      { label: "Profile", path: "/settings/profile", order: 1 },
      { label: "Account", path: "/settings/account", order: 2 },
    ],
  },
  {
    label: "廣告投放管理",
    prefix: "SvgBarChart",
    path: "/",
    order: 3,
    children: [
      { label: "廣告素材維護", path: "/lab2", order: 1, isDisabled: true, },
      { label: "廣告投放計畫", path: "/lab1", order: 2 },
    ],
  },
  {
    label: "費用明細",
    prefix: "SvgDatabase",
    path: "/Billing",
    isDisabled: true,
    order: 4,
  },
]
</script>
<template>
  <Layout className="h-screen">
    <Header>
      <Navbar
        :dataSource="dataSource"
        logoSrc="https://storage.cloud.google.com/ded-wds-bucket/AD_Logo.svg"
        logoLink="/"
      ></Navbar>
    </Header>

    <Layout className="h-screen">
      <!-- 導覽區塊 -->
      <!-- FIXME: SideNav 的 themeColor 要改成可接收 hexCode -->
      <!-- FIXME: MenuItem 的改 branch Update_to_Typescript update：Menu(非TS) -->
      <!-- FIXME: MenuItem 的 children 要改成可 disabled -->
      <Side className="xs:w-0 lg:w-[275px]">
        <SideNav
          themeColor="blue"
          :hasLogo="false"
          :hasRWD="true"
          userName="Nana"
          caption="ADP"
          userStatus="online"
          desktopLogoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO_W.svg"
          mobileLogoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
          :hasSearch="false"
          :dataSource="sideNavData"
        ></SideNav>
      </Side>
      <!-- 內容區塊 -->
      <Layout className="bg-[#f2f2f2] py-8">
        <!-- TODO: Toast 的 toast 容器加 index:9999 -->
         <slot></slot>
      </Layout>
    </Layout>
  </Layout>
</template>

<style lang="scss">
//.ded-avatar-container,
//.navbar-form-search,
//.navbar-icons {
//  display: none !important;
//}
</style>