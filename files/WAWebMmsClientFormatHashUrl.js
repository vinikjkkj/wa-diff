__d(
  "WAWebMmsClientFormatHashUrl",
  [
    "WABase64UrlSafe",
    "WANullthrows",
    "WAWebMmsMediaTypes",
    "WAWebPonyfillsUrlSearchParams",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        ((e = {
          audio: "/mms/audio",
          document: "/mms/document",
          gif: "/mms/gif",
          image: "/mms/image",
          ppic: "/pps/photo",
          product: "/mms/image",
          ptt: "/mms/ptt",
          sticker: "/mms/sticker",
          "thumbnail-document": "/mms/thumbnail-document",
          "thumbnail-link": "/mms/thumbnail-link",
          video: "/mms/video",
          "md-app-state": "/mms/md-app-state",
          "md-msg-hist": "/mms/md-msg-hist",
          "product-catalog-image": "/product/image",
          "biz-cover-photo": "/pps/biz-cover-photo",
          "thumbnail-image": "/mms/thumbnail-image",
          "thumbnail-video": "/mms/thumbnail-video",
        }),
        (e[(s = o("WAWebMmsMediaTypes")).MEDIA_TYPES.NEWSLETTER_AUDIO] =
          "/newsletter/newsletter-audio"),
        (e[s.MEDIA_TYPES.NEWSLETTER_IMAGE] = "/newsletter/newsletter-image"),
        (e[s.MEDIA_TYPES.NEWSLETTER_DOCUMENT] =
          "/newsletter/newsletter-document"),
        (e[s.MEDIA_TYPES.NEWSLETTER_IMAGE] = "/newsletter/newsletter-image"),
        (e[s.MEDIA_TYPES.NEWSLETTER_GIF] = "/newsletter/newsletter-gif"),
        (e[s.MEDIA_TYPES.NEWSLETTER_PTT] = "/newsletter/newsletter-ptt"),
        (e[s.MEDIA_TYPES.NEWSLETTER_PTV] = "/newsletter/newsletter-ptv"),
        (e[s.MEDIA_TYPES.NEWSLETTER_STICKER] =
          "/newsletter/newsletter-sticker"),
        (e[s.MEDIA_TYPES.NEWSLETTER_STICKER_PACK] =
          "/newsletter/newsletter-sticker-pack"),
        (e[s.MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK] =
          "/newsletter/newsletter-thumbnail-link"),
        (e[s.MEDIA_TYPES.NEWSLETTER_VIDEO] = "/newsletter/newsletter-video"),
        (e[s.MEDIA_TYPES.NATIVE_AD_IMAGE] = "/mms/ads-image"),
        (e[s.MEDIA_TYPES.NATIVE_AD_VIDEO] = "/mms/ads-video"),
        (e[s.MEDIA_TYPES.STICKER_PACK] = "/mms/sticker-pack"),
        (e[s.MEDIA_TYPES.THUMBNAIL_STICKER_PACK] =
          "/mms/thumbnail-sticker-pack"),
        (e[s.MEDIA_TYPES.MUSIC_ARTWORK] = "/mms/music-artwork"),
        (e[s.MEDIA_TYPES.NEWSLETTER_MUSIC_ARTWORK] =
          "/mms/newsletter-music-artwork"),
        (e[s.MEDIA_TYPES.GROUP_HISTORY] = "/mms/group-history"),
        (e[s.MEDIA_TYPES.WAFFLE_VIDEO] = "/mms/waffle-video"),
        (e[s.MEDIA_TYPES.WAFFLE_IMAGE] = "/mms/waffle-image"),
        e);
    function c(e) {
      var t = e.encFilehash,
        n = e.hostname,
        a = e.query,
        i = e.type,
        l = r("WANullthrows")(u[i]),
        s = new URL(
          "https://" + n + l + "/" + o("WABase64UrlSafe").urlSafeBase64(t),
        ),
        c = {};
      a &&
        Object.keys(a).forEach(function (e) {
          a[e] != null && (c[e] = a[e]);
        });
      var d = new (r("WAWebPonyfillsUrlSearchParams"))(c).toString();
      return (d && (d = "?" + d), "https://" + s.host + s.pathname + d);
    }
    l.default = c;
  },
  98,
);
