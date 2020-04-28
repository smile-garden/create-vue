export default function MP(key) {
  return new Promise((resolve, reject) => {
    window.init = () => {
      resolve(AMap);
    };
    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = `//webapi.amap.com/maps?v=1.4.6&key=${key}&callback=init`;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
