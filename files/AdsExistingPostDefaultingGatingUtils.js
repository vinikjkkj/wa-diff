__d(
  "AdsExistingPostDefaultingGatingUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (e == null ? void 0 : e.logExposure) === !0
        ? r("gkx")("12239")
        : r("gkx")("12754");
    }
    function s(e) {
      return (e == null ? void 0 : e.logExposure) === !0
        ? r("gkx")("9316")
        : r("gkx")("9444");
    }
    function u(t) {
      var n = e(t),
        r = s(t);
      return n || r;
    }
    function c(e) {
      return (e == null ? void 0 : e.logExposure) === !0
        ? r("gkx")("10135")
        : r("gkx")("10204");
    }
    ((l.isBoostOnAML1DefaultingV2Enabled = e),
      (l.isBoostOnAML1DefaultingV2MidEnabled = s),
      (l.isBoostOnAML1IGDefaultingEnabled = u),
      (l.isBoostOnAML1FBDefaultingEnabled = c));
  },
  98,
);
