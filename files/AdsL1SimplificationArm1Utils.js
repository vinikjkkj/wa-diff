__d(
  "AdsL1SimplificationArm1Utils",
  ["AdsEditorPostEditMode", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("18790");
    }
    function s() {
      return e() ? !0 : r("qex")._("2942") === !0;
    }
    function u() {
      return e() ? !0 : r("qex")._("2957") === !0;
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
      return p() ? !0 : r("qex")._("1378") === !0;
    }
    ((l.isL1SimplificationArm1QEEnabledWithExposure = s),
      (l.isL1SimplificationArm1QEEnabledWithoutExposure = u),
      (l.isL1SimplificationArm1InScope = c),
      (l.isL1SimplificationArm1EligibleWithExposure = d),
      (l.isL1SimplificationArm1EligibleWithoutExposure = m),
      (l.isL1SimplificationOrderSwapQEEnabledWithExposure = _));
  },
  98,
);
