<template>
  <div class="list">
    <Card title="Button" class="item">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <br><br>
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </Card>
    <Card title="Icon" class="item" style="font-size: 48px;">
      <Icon type="ios-alarm" />
      <Icon type="ios-american-football" />
      <Icon type="ios-aperture" />
    </Card>
  </div>
</template>

<script>
export default {
  name: 'practice',
  data() {
    return {
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang='less' scoped>
.item {
  margin-bottom: 10px;
}

</style>
