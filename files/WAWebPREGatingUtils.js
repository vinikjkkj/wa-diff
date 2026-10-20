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
    var s = 10 * 1024 * 1024;
    function u(e) {
      return e >= s;
    }
    ((l.isPREMediaUploadCacheEnabled = e),
      (l.shouldUseWorkerForFileSizeBytes = u));
  },
  98,
);
