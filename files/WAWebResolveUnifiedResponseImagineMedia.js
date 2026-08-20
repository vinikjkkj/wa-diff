__d(
  "WAWebResolveUnifiedResponseImagineMedia",
  ["WAWebUnifiedResponseUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.descriptorByCdnUrl,
        n = e.imagineType,
        r = e.isForwardedMessage,
        a = e.mediaUrl;
      if (!r) return { descriptor: null, isUnsupported: !1, mediaUrl: a };
      if (o("WAWebUnifiedResponseUtils").isAnimateImagineType(n))
        return { descriptor: null, isUnsupported: !0, mediaUrl: null };
      var i = a != null ? t.get(a) : null;
      return {
        descriptor: i != null ? i : null,
        isUnsupported: !1,
        mediaUrl: null,
      };
    }
    l.resolveUnifiedResponseImagineMedia = e;
  },
  98,
);
