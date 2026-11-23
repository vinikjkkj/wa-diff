__d(
  "AdsNonEcommDlpLandingPagePreviewGating",
  ["AdsSalesSegmentStoreUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsSalesSegmentStoreUtils").isSelectedAdAccountSBG()
        ? (e == null ? void 0 : e.silent) === !0
          ? r("gkx")("9925") === !0
          : r("gkx")("10115") === !0
        : !1;
    }
    function s(e) {
      return (e == null ? void 0 : e.silent) === !0
        ? r("gkx")("15578") === !0
        : r("gkx")("20246") === !0;
    }
    function u(t) {
      return s(t) || e(t);
    }
    ((l.isLandingPagePreviewSBGEnabled = e),
      (l.isLandingPagePreviewSurfaceEnabled = u));
  },
  98,
);
