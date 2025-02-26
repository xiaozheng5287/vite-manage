<template>
  <div>
    <!-- home -->
    <a-button type="primary" @click="query()">查询</a-button>
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>

<script setup>
import { getBillList } from "@/api/bill";
import { ref } from "vue";
const query = async () => {
  try {
    const { records, code } = await getBillList({
      page: 1,
      size: 20,
    });
    console.log(records);
    // if (code === 200) {
    dataSource.value = records;
    // }
  } catch (error) {
    console.log(error);
  }
};
const dataSource = ref([]);
const columns = ref([
  {
    title: "序号",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "单价",
    dataIndex: "money",
    key: "money",
  },
  {
    title: "车牌号",
    dataIndex: "carPlate",
    key: "carPlate",
  },
  {
    title: "应缴金额",
    dataIndex: "owe",
    key: "owe",
  },
  {
    title: "应缴金额",
    dataIndex: "owe",
    key: "owe",
  },
  {
    title: "总金额",
    dataIndex: "sum",
    key: "sum",
  },
  {
    title: "欠费月份数",
    dataIndex: "owe",
    key: "owe",
  },
  {
    title: "VIN码",
    dataIndex: "vin",
    key: "vin",
  },
  {
    title: "所属企业",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "原卡号",
    dataIndex: "oldSim",
    key: "owe",
  },
	{
    title: 'Action',
    key: 'action',
  },
]);
</script>

<style lang="scss" scoped></style>
