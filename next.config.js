/** @type {import('@opennext/cloudflare').Config} */
export default {
  // ده الحد الأدنى المطلوب عشان ميبقاش فاضي
  routes: [
    { src: "/.*", dest: "/" }
  ]
}
