__d(
  "AdsThreadsCarouselVideoStoreUtils",
  ["AdsCreationMediaConfigDataStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (
        (e == null ||
        (t = e.threads_stream) == null ||
        (t = t.carousel_video_enabled) == null
          ? void 0
          : t.value) === !0
      );
    }
    function s() {
      return e(
        r("AdsCreationMediaConfigDataStore").getCached("data").getValue(),
      );
    }
    ((l.isThreadsCarouselVideoEnabledInConfig = e),
      (l.isThreadsCarouselVideoEnabled = s));
  },
  98,
);
