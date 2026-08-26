__d(
  "WAWebBizAdCreationExtractPrefillMedia",
  ["compactMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, r;
      return e == null
        ? []
        : (t =
              (n = (r = c(e.images)) != null ? r : d(e.videos)) != null
                ? n
                : m(e.carousel_cards)) != null
          ? t
          : [];
    }
    function s(e) {
      return e.hash != null && e.hash !== ""
        ? { imageHash: e.hash, url: e.url }
        : null;
    }
    function u(e) {
      return e.video_id != null && e.video_id !== ""
        ? {
            thumbnailHash: e.thumbnail_hash,
            thumbnailUrl: e.thumbnail_url,
            videoId: e.video_id,
          }
        : null;
    }
    function c(e) {
      if (e == null) return null;
      var t = r("compactMap")(e, s);
      return t.length > 0 ? t : null;
    }
    function d(e) {
      if (e == null) return null;
      var t = r("compactMap")(e, u);
      return t.length > 0 ? t : null;
    }
    function m(e) {
      if (e == null) return null;
      var t = r("compactMap")(e, p);
      return t.length > 0 ? t : null;
    }
    function p(e) {
      var t = e.images;
      if (t != null && t.length > 0) {
        var n = s(t[0]);
        if (n != null) return n;
      }
      var r = e.videos;
      return r != null && r.length > 0 ? u(r[0]) : null;
    }
    l.default = e;
  },
  98,
);
