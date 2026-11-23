__d(
  "AdsWTWAInstantExperienceGatingUtils",
  ["$InternalEnum", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      CONTROL: "control",
      DEFAULTED: "defaulted",
      MANUAL: "manual",
    });
    function s(t) {
      var n = t ? r("qex")._("462") : r("qex")._("561");
      return (function (t) {
        return t === "defaulted"
          ? e.DEFAULTED
          : t === "manual"
            ? e.MANUAL
            : e.CONTROL;
      })(n != null ? n : "control");
    }
    function u() {
      return s(!0);
    }
    function c() {
      return u() !== e.CONTROL;
    }
    function d() {
      return s(!1);
    }
    ((l.WTWAInstantExperienceArm = e),
      (l.getWTWAInstantExperienceArm = u),
      (l.isWTWAInstantExperienceEnabled = c),
      (l.getWTWAInstantExperienceArmWithoutExposure = d));
  },
  98,
);
