<template>
  <div style="margin: 16px">
    <Card title="table编辑">
      <Table :columns="columns" :data="data">
        <template slot-scope="{ row }" slot="name">
          <Select v-model="row.name" style="width: 200px">
            <Option
              v-for="item in cityList"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </template>

        <template slot-scope="{ row, index }" slot="age">
          <Input type="text" v-model="editAge" v-if="editIndex === index" />
          <span v-else>{{ row.age }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="birthday">
          <Input
            type="text"
            v-model="editBirthday"
            v-if="editIndex === index"
          />
          <span v-else>{{ getBirthday(row.birthday) }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="address">
          <Input type="text" v-model="editAddress" v-if="editIndex === index" />
          <span v-else>{{ row.address }}</span>
        </template>

        <template slot-scope="{ row, index }" slot="action">
          <div v-if="editIndex === index">
            <Button @click="handleSave(index)">保存</Button>
            <Button @click="editIndex = -1">取消</Button>
          </div>
          <div v-else>
            <Button @click="handleEdit(row, index)">编辑</Button>
          </div>
        </template>
      </Table>
    </Card>

    <Button style="margin: 16px 0" type="primary" @click="show()">新增</Button>
    <Card title="Modal编辑">
      <Table :columns="columns2" :data="data">
        <template slot-scope="{ row, index }" slot="action">
          <Button @click="show('edit', row, index)">编辑</Button>
        </template>
      </Table>
    </Card>

    <Modal
      v-model="visible"
      :title="editType === 'edit' ? '编辑' : '新增'"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <Form :model="configInfo" label-position="right" :label-width="100">
        <Form-item label="姓名">
          <Input v-model="configInfo.name"></Input>
        </Form-item>
        <Form-item label="年龄">
          <Input v-model="configInfo.age"></Input>
        </Form-item>
        <Form-item label="出生日期">
          <Input v-model="configInfo.birthday"></Input>
        </Form-item>
        <Form-item label="地址">
          <Input v-model="configInfo.address"></Input>
        </Form-item>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "practice",
  data() {
    return {
      visible: false,
      columns: [
        {
          title: "姓名",
          key: "name",
          slot: "name",
        },
        {
          title: "年龄",
          key: "age",
          slot: "age",
        },
        {
          title: "出生日期",
          key: "birthday",
          slot: "birthday",
        },
        {
          title: "地址",
          key: "address",
          slot: "address",
        },
        {
          title: "操作",
          key: "action",
          slot: "action",
        },
      ],
      cityList: [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ],
      columns2: [
        {
          title: "姓名",
          key: "name",
        },
        {
          title: "年龄",
          key: "age",
        },
        {
          title: "出生日期",
          key: "birthday",
        },
        {
          title: "地址",
          key: "address",
        },
        {
          title: "操作",
          key: "action",
          slot: "action",
        },
      ],
      self: this,
      data: [
        {
          id: 1,
          name: "王小明",
          age: 18,
          birthday: "919526400000",
          address: "北京市朝阳区芍药居",
        },
        /* {
          id: 2,
          name: "张小刚",
          age: 25,
          birthday: "696096000000",
          address: "北京市海淀区西二旗",
        },
        {
          id: 3,
          name: "李小红",
          age: 30,
          birthday: "563472000000",
          address: "上海市浦东新区世纪大道",
        },
        {
          id: 4,
          name: "周小伟",
          age: 26,
          birthday: "687024000000",
          address: "深圳市南山区深南大道",
        }, */
      ],
      editIndex: -1, // 当前聚焦的输入框的行数
      editName: "", // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editAge: "", // 第二列输入框
      editBirthday: "", // 第三列输入框
      editAddress: "", // 第四列输入框

      editType: "add",
      configInfo: {}, // 配置信息
      curIndex: -1, //当前编辑行索引
    };
  },
  created() {},
  methods: {
    show(type = "add", row, index) {
      this.curIndex = index;
      this.editType = type;
      this.configInfo = row || {};
      this.visible = true;
    },
    ok() {
      const { editType, configInfo, curIndex } = this;
      if (editType === "add") {
        this.data.unshift(configInfo);
      }
      if (editType === "edit") {
        this.data.splice(curIndex, 1, configInfo);
      }
    },
    cancel() {},
    handleEdit(row, index) {
      this.editName = row.name;
      this.editAge = row.age;
      this.editAddress = row.address;
      this.editBirthday = row.birthday;
      this.editIndex = index;
    },
    handleSave(index) {
      this.data[index].name = this.editName;
      this.data[index].age = this.editAge;
      this.data[index].birthday = this.editBirthday;
      this.data[index].address = this.editAddress;
      this.editIndex = -1;
    },
    getBirthday(birthday) {
      const date = new Date(parseInt(birthday));
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month}-${day}`;
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .ivu-table-wrapper {
  overflow: visible;
}
</style>
