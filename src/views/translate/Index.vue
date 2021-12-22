<template>
  <div>
    <div
      style="
        padding-top: 60px;
        display: inline-block;
        width: 45%;
        margin-right: 50px;
        word-break: break-all;
        vertical-align: top;
      "
      class="notranslate"
    >
      {{ content }}
    </div>
    <div style="display: inline-block; width: 45%; word-break: break-all">
      <div>
        <v-google-translate
          :languages="languages"
          defaultLanguageCode="zh-CN"
          fetchBrowserLanguage
          @select="googleTranslateSelectedHandler"
        />
      </div>
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  /* components: {
    vGoogleTranslate,
  }, */
  data() {
    return {
      content: "",
      languages: [
        {
          code: "zh-CN",
          name: "Chinese (Simplified)",
          cname: "中文 (简体)",
          ename: "Chinese (Simplified)",
        },
        {
          code: "id",
          name: "Indonesia",
          cname: "印度尼西亚语",
          ename: "Indonesian",
        },
        {
          code: "en",
          name: "English",
          cname: "英语",
          ename: "English",
        },
      ],
    };
  },
  created() {
    this.getdev(
      "https://bluewhale365-test.oss-cn-hangzhou.aliyuncs.com/hz/C1/2021/12/15/1639562526897.txt"
    );
  },
  methods: {
    getdev(href) {
      //  更新数据devInfo.txt文件接口
      let xhr = new XMLHttpRequest();
      // const okStatus = document.location.protocol === "file:" ? 0 : 200;
      xhr.open("GET", href, false); // 文件路径
      xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
      xhr.send(null);
      console.log(xhr.responseText); //打印文件信息
      this.content = xhr.responseText;
    },
    googleTranslateSelectedHandler(language) {
      const { code, name, cname, ename } = language;
      console.log(code, name, cname, ename);
      // todo ...
    },
  },
};
</script>

<style lang="less" scoped></style>
