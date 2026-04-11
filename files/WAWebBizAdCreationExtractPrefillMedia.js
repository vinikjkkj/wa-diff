__d(
  "WAWebBizAdCreationExtractPrefillMedia",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t, n, r;
      return e == null
        ? []
        : (t =
              (n = (r = u(e.images)) != null ? r : c(e.videos)) != null
                ? n
                : d(e.carousel_cards)) != null
          ? t
          : [];
    }
    function l(e) {
      return e.hash != null && e.hash !== ""
        ? { imageHash: e.hash, url: e.url }
        : null;
    }
    function s(e) {
      return e.video_id != null && e.video_id !== ""
        ? { videoId: e.video_id, thumbnailHash: e.thumbnail_hash }
        : null;
    }
    function u(e) {
      if (e == null) return null;
      var t = e.map(l).filter(Boolean);
      return t.length > 0 ? t : null;
    }
    function c(e) {
      if (e == null) return null;
      var t = e.map(s).filter(Boolean);
      return t.length > 0 ? t : null;
    }
    function d(e) {
      if (e == null) return null;
      var t = e.map(m).filter(Boolean);
      return t.length > 0 ? t : null;
    }
    function m(e) {
      var t = e.images;
      if (t != null && t.length > 0) {
        var n = l(t[0]);
        if (n != null) return n;
      }
      var r = e.videos;
      return r != null && r.length > 0 ? s(r[0]) : null;
    }
    i.default = e;
  },
  66,
);
