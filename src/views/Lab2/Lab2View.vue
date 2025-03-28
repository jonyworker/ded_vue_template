<script setup>
import { Content, Grid, Row, Column, Breadcrumb, Title, Button, Card, Input, Dropdown,Radio, Checkbox, DatePicker } from "@ded-wds-vue/ui";
import { ref } from "vue";
import AdResourceCard from "@/components/AdResourceCard.vue";
import { formatToThousand } from "@/utils/number.js"

const projectInput = ref("新增廣告投放計畫")
const companyInput = ref("company1")
const tempAmount = ref(16888000)
const totalAmount = ref(16666000)

const scheduleTimeModel = ref({
  scheduleTime: {
    start:'',
    end:''
  },
  isScheduled: '',
  isLoopPlay:'',
  loopStart: {
    hour: '',
    minute: '',
    second: '',
  },
  loopEnd: {
    hour: '',
    minute: '',
    second: '',
  },
  isloopEveryday:'',
  isloopEveryWeek:'',
  isBreaking:'',
  isBidding:''
})
const deviceModel = ref({
  A1:[],
  A2:[],
  A3:[],
  B1:[],
  B2:[],
  B3:[]
})

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
const radioYesNoData = [
  {
    label: "是",
    value: "1",
    isDisabled: false
  },
  {
    label: "否",
    value: "0",
    isDisabled: false
  },
];
</script>

<template>
  <Content>
    <Grid :gap="16">
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
        <Column :xs="12">
          <Card className="overflow-auto">
            <Grid :gap="8">
              <!-- [ Content ] 卡片區塊-計劃訊息(標題) ok -->
              <Row>
                <Column :xs="12" align="start">
                  <Title :level="4" className="bg-neutral-200 px-2 py-1">計劃訊息</Title>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-計劃訊息(投放計劃名稱) ok -->
              <Row>
                <Column :xs="2">
                  <div class="flex">
                    <Title>投放計劃名稱</Title>
                    <div class="text-red-600">*</div>
                  </div>
                </Column>
                <Column :xs="4">
                  <Input
                    type="text"
                    :hasClear="true"
                    size="small"
                    v-model="projectInput"
                  />
                </Column>
                <Column :xs="6"><div></div></Column>
              </Row>
              <!-- [ Content ] 卡片區塊-計劃訊息(公司名稱) ok -->
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
              <!-- [ Content ] 卡片區塊-計劃訊息(廣告素材) ok -->
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
                    <Row v-for="index in 2" >
                      <Column :xs="12">
                        <AdResourceCard
                          :resourceName="`素材 ${index}`"
                          :imgSrc="`https://picsum.photos/800/600?random=${index}`"
                          :actionMinutes="index"
                          :actionSeconds="30"
                        ></AdResourceCard>
                      </Column>
                    </Row>
                  </Grid>
                </Column>
              </Row>


              <!-- [ Content ] 卡片區塊-投放時段(標題) ok -->
              <Row>
                <Column :xs="12">
                  <Title :level="4" className="bg-neutral-200 px-2 py-1">投放時段</Title>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放時段(投放起迄日期) ok -->
              <Row>
                <Column :xs="2">
                  <div class="flex">
                    <Title className="leading-8">投放起迄日期</Title>
                    <div class="text-red-600">*</div>
                  </div>
                </Column>
                <Column :xs="8">
                  <Row :hasGap="true">
                    <Column :xs="6">
                      <div class="flex gap-1 items-center">
                        <div class="whitespace-nowrap text-[#004C87]">
                          起始日期
                        </div>
                        <DatePicker
                          format="yyyy/mm/dd"
                          placeholder="YYYY/MM/DD"
                          v-model="scheduleTimeModel.scheduleTime.start"
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
                          v-model="scheduleTimeModel.scheduleTime.end"
                        />
                      </div>
                    </Column>
                  </Row>
                </Column>
                <Column :xs="2">
                  <div></div>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放時段(是否指定時段) ok -->
              <Row>
                <Column :xs="2">
                  <div class="flex">
                    <Title className="leading-8">是否指定時段</Title>
                    <div class="text-red-600">*</div>
                  </div>
                </Column>
                <Column :xs="3">
                  <Radio
                    :dataSource="radioYesNoData"
                    direction="row"
                    size="medium"
                    v-model="scheduleTimeModel.isScheduled"
                  ></Radio>
                </Column>
                <Column :xs="7">
                  <div></div>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放時段(循環模式) ok -->
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
                      <Radio
                        :dataSource="[{ label: '連續播放', value: '1', isDisabled: false }]"
                        direction="row"
                        size="medium"
                        v-model="scheduleTimeModel.isLoopPlay"
                      ></Radio>
                      <Grid :gap="4">
                        <Row :hasGap="true">
                          <Column :xs="10">
                            <div class="flex items-center gap-2">
                              <Title class="leading-8 ml-3 whitespace-nowrap">開始時間 : </Title>
                              <div class="flex items-center gap-3">
                                <Input
                                  type="number"
                                  :hasClear="false"
                                  size="small"
                                  maxLimit="2"
                                  placeholder=""
                                  v-model="scheduleTimeModel.loopStart.hour"
                                />
                                <span class="whitespace-nowrap">小時</span>
                                <Input
                                  type="number"
                                  :hasClear="false"
                                  size="small"
                                  maxLimit="2"
                                  placeholder=""
                                  v-model="scheduleTimeModel.loopStart.minute"
                                />
                                <span class="whitespace-nowrap">分</span>
                                <Input
                                  type="number"
                                  :hasClear="false"
                                  size="small"
                                  maxLimit="2"
                                  placeholder=""
                                  v-model="scheduleTimeModel.loopStart.second"
                                />
                                <span class="whitespace-nowrap">秒</span>
                              </div>
                            </div>
                          </Column>
                        </Row>
                        <Row :hasGap="true">
                          <Column :xs="10">
                            <div class="flex items-center gap-2">
                              <Title class="leading-8 ml-3 whitespace-nowrap">結束時間 : </Title>
                              <div class="flex items-center gap-3">
                                <Input
                                  type="number"
                                  :hasClear="false"
                                  size="small"
                                  maxLimit="2"
                                  placeholder=""
                                  v-model="scheduleTimeModel.loopEnd.hour"
                                />
                                <span class="whitespace-nowrap">小時</span>
                                <Input
                                  type="number"
                                  :hasClear="false"
                                  size="small"
                                  maxLimit="2"
                                  placeholder=""
                                  v-model="scheduleTimeModel.loopEnd.minute"
                                />
                                <span class="whitespace-nowrap">分</span>
                                <Input
                                  type="number"
                                  :hasClear="false"
                                  size="small"
                                  maxLimit="2"
                                  placeholder=""
                                  v-model="scheduleTimeModel.loopEnd.second"
                                />
                                <span class="whitespace-nowrap">秒</span>
                              </div>
                            </div>
                          </Column>
                        </Row>
                      </Grid>
                    </Column>
                    <Column :xs="12">
                      <Radio
                        :dataSource="[{ label: '每日', value: '1', isDisabled: false }]"
                        direction="row"
                        size="medium"
                        v-model="scheduleTimeModel.isloopEveryday"
                      ></Radio>
                    </Column>
                    <Column :xs="12">
                      <Radio
                        :dataSource="[{ label: '每週', value: '1', isDisabled: false }]"
                        direction="row"
                        size="medium"
                        v-model="scheduleTimeModel.isloopEveryWeek"
                      ></Radio>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放時段(是否插播) ok -->
              <Row>
                <Column :xs="2">
                  <div class="flex">
                    <Title className="leading-8">是否插播</Title>
                    <div class="text-red-600">*</div>
                  </div>
                </Column>
                <Column :xs="3">
                  <Radio
                    :dataSource="radioYesNoData"
                    direction="row"
                    size="medium"
                    v-model="scheduleTimeModel.isBreaking"
                  ></Radio>
                </Column>
                <Column :xs="7">
                  <div></div>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放時段(是否出價) ok -->
              <Row>
                <Column :xs="2">
                  <div class="flex">
                    <Title className="leading-8">是否出價</Title>
                    <div class="text-red-600">*</div>
                  </div>
                </Column>
                <Column :xs="3">
                  <Radio
                    :dataSource="radioYesNoData"
                    direction="row"
                    size="medium"
                    v-model="scheduleTimeModel.isBidding"
                  ></Radio>
                </Column>
                <Column :xs="7">
                  <div></div>
                </Column>
              </Row>


              <!-- [ Content ] 卡片區塊-投放設備(標題) ok  -->
              <Row>
                <Column :xs="12">
                  <Title :level="4" className="bg-neutral-200 px-2 py-1">投放設備</Title>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放設備(說明) ok  -->
              <Row>
                <Column :xs="12">
                  <Title>請點擊「查看設備」按鈕，確認可以預約的設備。</Title>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放設備(按鈕) ok  -->
              <Row>
                <Column :xs="2">
                  <Button
                    themeColor="primary"
                    variant="filled"
                    size="small"
                    width="fit"
                    className="w-[96px]"
                  >
                    查看設備
                  </Button>
                </Column>
                <Column :xs="10">
                  <div></div>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-投放設備(投放設備表單) ok -->
              <Row>
                <Column :xs="2">
                  <div class="flex">
                    <Title>投放設備</Title>
                    <div class="text-red-600">*</div>
                  </div>
                </Column>
                <Column :xs="10">
                  <Row>
                    <Column :xs="4">
                      <Checkbox
                        :dataSource="[
                          { label: 'Device Group A (3)', value: 'A1-all', isDisabled: false },
                          { label: 'Device A1', value: 'A1-1', isDisabled: false },
                          { label: 'Device A2', value: 'A1-2', isDisabled: false },
                          { label: 'Device A3', value: 'A1-3', isDisabled: false }
                        ]"
                        direction="column"
                        size="medium"
                        v-model="deviceModel.A1"
                        className="ad-resource-checkbox"
                      />
                    </Column>

                    <Column :xs="4">
                      <Checkbox
                        :dataSource="[
                          { label: 'Device Group A (3)', value: 'A2-all', isDisabled: false },
                          { label: 'Device A1', value: 'A2-1', isDisabled: false },
                          { label: 'Device A2', value: 'A2-2', isDisabled: false },
                          { label: 'Device A3', value: 'A2-3', isDisabled: false }
                        ]"
                        direction="column"
                        size="medium"
                        v-model="deviceModel.A2"
                        className="ad-resource-checkbox"
                      />
                    </Column>

                    <Column :xs="4">
                      <Checkbox
                        :dataSource="[
                          { label: 'Device Group A (3)', value: 'A3-all', isDisabled: false },
                          { label: 'Device A1', value: 'A3-1', isDisabled: false },
                          { label: 'Device A2', value: 'A3-2', isDisabled: false },
                          { label: 'Device A3', value: 'A3-3', isDisabled: false }
                        ]"
                        direction="column"
                        size="medium"
                        v-model="deviceModel.A3"
                        className="ad-resource-checkbox"
                      />
                    </Column>

                    <Column :xs="4">
                      <Checkbox
                        :dataSource="[
                          { label: 'Device Group B (2)', value: 'B1-all', isDisabled: false },
                          { label: 'Device A4', value: 'B1-1', isDisabled: false }
                        ]"
                        direction="column"
                        size="medium"
                        v-model="deviceModel.B1"
                        className="ad-resource-checkbox"
                      />
                    </Column>

                    <Column :xs="4">
                      <Checkbox
                        :dataSource="[
                          { label: 'Device Group B (2)', value: 'B2-all', isDisabled: false },
                          { label: 'Device A4', value: 'B2-1', isDisabled: false }
                        ]"
                        direction="column"
                        size="medium"
                        v-model="deviceModel.B2"
                        className="ad-resource-checkbox"
                      />
                    </Column>

                    <Column :xs="4">
                      <Checkbox
                        :dataSource="[
                          { label: 'Device Group B (2)', value: 'B3-all', isDisabled: false },
                          { label: 'Device A4', value: 'B3-1', isDisabled: false }
                        ]"
                        direction="column"
                        size="medium"
                        v-model="deviceModel.B3"
                        className="ad-resource-checkbox"
                      />
                    </Column>
                  </Row>

                </Column>
              </Row>


              <!-- [ Content ] 卡片區塊-費用試算(標題) ok -->
              <Row>
                <Column :xs="12">
                  <Title :level="4" className="bg-neutral-200 px-2 py-1">費用試算</Title>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-費用試算(說明) ok  -->
              <Row>
                <Column :xs="12">
                  <Title>請點擊「費用試算」按鈕，試算總金額。</Title>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-費用試算(按鈕) ok  -->
              <Row>
                <Column :xs="2">
                  <Button
                    themeColor="primary"
                    variant="filled"
                    size="small"
                    width="fit"
                    className="w-[96px]"
                  >
                    費用試算
                  </Button>
                </Column>
                <Column :xs="10">
                  <div></div>
                </Column>
              </Row>
              <!-- [ Content ] 卡片區塊-費用試算(金額區塊) ok -->
              <Row>
                <Column :xs="6">
                  <Title>試算總金額</Title>
                  <div class="text-blue-900 text-2xl">$ {{formatToThousand(tempAmount,',')}}</div>
                </Column>
                <Column :xs="6">
                  <Input
                    label="出價金額"
                    type="number"
                    prefix=""
                    v-model="totalAmount"
                  ></Input>
                </Column>
              </Row>
            </Grid>
          </Card>
        </Column>
      </Row>

      <!-- [ Footer ] Button Group 區塊 -->
      <Row :hasGap="true">
        <Column :xs="3">
          <div></div>
        </Column>
        <Column :xs="2">
          <Button
            themeColor="neutral"
            variant="filled"
            width="fluid"
          >
            取消
          </Button>
        </Column>
        <Column :xs="2">
          <Button
            themeColor="neutral"
            variant="filled"
            width="fluid"
          >
            暫存
          </Button>
        </Column>
        <Column :xs="2">
          <Button
            themeColor="secondary"
            variant="filled"
            width="fluid"
          >
            重新送審
          </Button>
        </Column>
        <Column :xs="3">
          <div></div>
        </Column>
      </Row>

    </Grid>
  </Content>
</template>
