__d(
  "WAWebPREGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_media_image_upload_cache",
      );
    }
    function s(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "web_anr_file_size_threshold_to_use_worker_mb",
      );
      if (t === 0) return !1;
      var n = t * 1024 * 1024;
      return e >= n;
    }
    ((l.isPREMediaUploadCacheEnabled = e),
      (l.shouldUseWorkerForFileSizeBytes = s));
  },
  98,
);
