__d(
  "WAWebPREGatingUtils",
  ["WAWebABProps", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return !!r("justknobx")._("5005");
    }
    function s() {
      return !!r("justknobx")._("1784");
    }
    function u() {
      return r("justknobx")._("2349")
        ? o("WAWebABProps").getABPropConfigValue("wa_media_image_upload_cache")
        : !1;
    }
    function c(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "web_anr_file_size_threshold_to_use_worker_mb",
      );
      if (t === 0) return !1;
      var n = t * 1024 * 1024;
      return e >= n;
    }
    ((l.isPREChatMovingEnabled = e),
      (l.isPREResizeEnabled = s),
      (l.isPREMediaUploadCacheEnabled = u),
      (l.shouldUseWorkerForFileSizeBytes = c));
  },
  98,
);
