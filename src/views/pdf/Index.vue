<template>
  <div>
    <pre-pdf
      ref="pdf"
      v-for="i in numPages"
      :key="i"
      :page="i"
      :src="url"
    />
  </div>
</template>

<script>
import prePdf from 'vue-pdf';

export default {
  name: 'pdf',
  components: {
    prePdf,
  },
  data () {
    return {
      pdfUrl: 'https://t16img.yangkeduo.com/mms_static/e7139c1fc29b6c870a186c3787168c3b.pdf',
      url: '',
      numPages: 1,
    }
  },
	mounted() {
		this.getNumPages("http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf");
	},
  methods: {
		getNumPages(url) {
      var loadingTask = prePdf.createLoadingTask(url)
      console.log(loadingTask);
			loadingTask.then(pdf => {
				this.url = loadingTask
				this.numPages = pdf.numPages
			}).catch((err) => {
				console.error(err, 'pdf加载失败')
			})
		},
  }
}
</script>
