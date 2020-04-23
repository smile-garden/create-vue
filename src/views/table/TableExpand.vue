<template>
  <div>
    <Row class="expand-row">
      <Col span="8">
        <span class="expand-key">Job:</span>
        <span class="expand-value">{{ weiyi.job }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">Interest:</span>
        <span class="expand-value">{{ weiyi.interest }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">Birthday:</span>
        <span class="expand-value">{{ weiyi.birthday }}</span>
      </Col>
    </Row>
    <Row>
      <Col span="8">
        <span class="expand-key">Favorite book:</span>
        <span class="expand-value">《{{ weiyi.book }}》</span>
      </Col>
      <Col span="8">
        <span class="expand-key">Favorite movie:</span>
        <span class="expand-value">{{ weiyi.movie }}</span>
      </Col>
      <Col span="8">
        <span class="expand-key">Favorite music:</span>
        <span class="expand-value">{{ weiyi.music }}</span>
      </Col>
    </Row>
    <div slot></div>
  </div>
</template>
<script>
export default {
  props: {
    weiyi: Object
  }
};
</script>

<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
