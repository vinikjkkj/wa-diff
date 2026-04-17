__d(
  "FBUnifiedVideoLightweightAttachmentGating",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("gkx")("15193");
      switch (e) {
        case "search_results_page":
        case "homepage_stream":
        case "permalink":
        case "timeline":
          return t;
        default:
          return !1;
      }
    }
    l.shouldRenderLightweightVideoAttachmentForRenderLocation = e;
  },
  98,
);
