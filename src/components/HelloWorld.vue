<script setup>
import { h } from "vue";
import { Toast, Button, useToast } from "@ded-wds-vue/ui";
const { add } = useToast();
const showToast = () => {
  add({
    themeColor: "success",
    position: "top-right",
    title: "Notification Title",
    content: "Content",
    prefix: "SvgSuccessCircle",
    duration: 1000,
    action: () => h ("div", {onClick: () => window.alert("action")}, "Action"),
  });
};
</script>
<template>
  <h1 class="text-3xl font-bold underline text-cyan-500">
    Hello world!
  </h1>
  <Toast />
  <Button themeColor="primary" variant="filled" radius="4px" @click="showToast">
    Toast Trigger
  </Button>
</template>