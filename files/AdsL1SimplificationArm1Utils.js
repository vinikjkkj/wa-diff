__d(
  "AdsL1SimplificationArm1Utils",
  ["AdsEditorPostEditMode", "AdsSalesSegmentStoreUtils", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("18790");
    }
    function s() {
      return e() || o("AdsSalesSegmentStoreUtils").isSelectedAdAccountGBG()
        ? !0
        : r("qex")._("2942") === !0;
    }
    function u() {
      return e() || o("AdsSalesSegmentStoreUtils").isSelectedAdAccountGBG()
        ? !0
        : r("qex")._("2957") === !0;
    }
    function c(t, n) {
      return e() ? !0 : t === r("AdsEditorPostEditMode").INLINE && n;
    }
    function d(e, t) {
      return c(e, t) && s();
    }
    function m(e, t) {
      return c(e, t) && u();
    }
    function p() {
      return r("gkx")("9685");
    }
    function _() {
      return p() ||
        (r("gkx")("26473") &&
          r("gkx")("11102") &&
          (r("gkx")("27060"), r("gkx")("26976")))
        ? !0
        : r("qex")._("1378") === !0;
    }
    function f() {
      return p()
        ? "e2e_bypass"
        : r("gkx")("27061") && r("gkx")("8288") && r("gkx")("26989")
          ? "hbt_launch"
          : r("qex")._("5426") === !0
            ? "pretest_qe"
            : "none";
    }
    ((l.isL1SimplificationArm1TreatmentWithExposure = s),
      (l.isL1SimplificationArm1TreatmentWithoutExposure = u),
      (l.isL1SimplificationArm1InScope = c),
      (l.isL1SimplificationArm1EligibleWithExposure = d),
      (l.isL1SimplificationArm1EligibleWithoutExposure = m),
      (l.isL1SimplificationOrderSwapQEEnabledWithExposure = _),
      (l.getL1SimplificationOrderSwapGate = f));
  },
  98,
);
