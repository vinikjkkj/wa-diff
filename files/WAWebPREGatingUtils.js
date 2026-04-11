__d(
  "WAWebPREGatingUtils",
  ["WAWebABProps", "WAWebEnvironment", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        return !!r("justknobx")._("5005");
      },
      s = function () {
        return r("justknobx")._("3356")
          ? r("WAWebEnvironment").isWindows ||
              o("WAWebABProps").getABPropConfigValue(
                "smoothie_performance_msg_send",
              )
          : !1;
      };
    function u() {
      return r("justknobx")._("1784")
        ? r("WAWebEnvironment").isWindows ||
            o("WAWebABProps").getABPropConfigValue(
              "smoothie_performance_resize_followup",
            )
        : !1;
    }
    function c() {
      return r("justknobx")._("2349")
        ? o("WAWebABProps").getABPropConfigValue("wa_media_image_upload_cache")
        : !1;
    }
    function d(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "web_anr_file_size_threshold_to_use_worker_mb",
      );
      if (t === 0) return !1;
      var n = t * 1024 * 1024;
      return e >= n;
    }
    ((l.isPREChatMovingEnabled = e),
      (l.isPREMessageSendEnabled = s),
      (l.isPREResizeEnabled = u),
      (l.isPREMediaUploadCacheEnabled = c),
      (l.shouldUseWorkerForFileSizeBytes = d));
  },
  98,
);
