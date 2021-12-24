// 加载 script 脚本
const translateUrl = 'https://translate.google.com/translate_a/element.js';
const loadScript = (onload, onerror, url) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = url;
  script.onload = onload;
  script.onerror = onerror;
  document.head.appendChild(script);
};


// 加载谷歌翻译
export default function loadGoogleTranslate() {
  return new Promise((resolve, reject) => {
    if (window.google) {
      resolve(window.google);
    } else {
      loadScript(
        () => {
          resolve(window.google);
        },
        reject,
        translateUrl,
      );
    }
  });
}
