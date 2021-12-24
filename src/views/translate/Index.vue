<template>
  <a-spin :spinning="loading">
    <div class="translate-box">
      <div class="translate-inner">
        <div class="translate-item notranslate">
          <div class="translate-item__head"></div>
          <div class="translate-item__body">
            <pre>{{ content }}</pre>
          </div>
        </div>
        <div class="translate-item result">
          <div class="translate-item__head">
            <div id="google_translate_element"></div>
          </div>
          <div class="translate-item__body">
            <pre>{{ content }}</pre>
          </div>
        </div>
      </div>
    </div>
  </a-spin>
</template>

<script>
import loadGoogleTranslate from '@/utils/translate';

export default {
  name: 'TranslatePage',
  data() {
    return {
      loading: true,
      content: '',
    };
  },
  created() {
    const { txtUrl } = this.$route.query;
    this.loadTranslate();
    this.parseTxt(txtUrl || 'https://bluewhale365-test.oss-cn-hangzhou.aliyuncs.com/hz/C1/2021/12/23/1640235017303.txt');
  },
  methods: {
    async loadTranslate() {
      const google = await loadGoogleTranslate();
      setTimeout(() => {
        this.createTranslate(google);
      }, 600);
    },
    createTranslate(google) {
      // eslint-disable-next-line no-new
      new google.translate.TranslateElement(
        {
          // 这个是你需要翻译的语言，比如你只需要翻译成越南和英语，这里就只写en,vi
          includedLanguages: 'en,zh-CN,id',
          // 选择语言的样式，这个是面板，还有下拉框的样式，具体的记不到了，找不到api~~
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          // 自动显示翻译横幅，就是翻译后顶部出现的那个，有点丑，这个属性没有用的话，请看文章底部的其他方法
          autoDisplay: false,
        },
        'google_translate_element', // 触发按钮的id
      );
      this.loading = false;
    },
    parseTxt(url) {
      if (!url) return;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, false); // 文件路径
      xhr.overrideMimeType('text/html;charset=utf-8'); // 默认为utf-8
      xhr.send(null);
      this.content = xhr.responseText;
    },
  },
};
</script>

<style lang="less">
body {
  top: 0 !important;
  min-height: 0 !important;
}

.goog-te-banner-frame {
  display: none;
}

.goog-text-highlight {
  background-color: transparent !important;
  -webkit-box-shadow: 0 0px 0px rgba(0, 0, 0, 0) !important;
  -moz-box-shadow: 0 0px 0px rgba(0, 0, 0, 0) !important;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0) !important;
}
</style>

<style lang="less" scoped>
.translate {
  &-box {
    margin: 30px;
    padding-bottom: 60px;
  }

  &-inner {
    display: flex;
    justify-content: center;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  &-item {
    padding: 20px 30px;
    width: 50%;

    &.result {
      background-color: #efefef;
    }

    &__head {
      height: 40px;
    }
    &__body {
      & > pre {
        white-space: pre-line;
        word-break: keep-all;
      }
    }
  }
}
</style>
