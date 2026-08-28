__d(
  "CTMValueOptimizationStoreUtils",
  ["AdsInterfacesLogger", "AdsPageStore", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      t === void 0 && (t = !1);
      var o =
        e != null
          ? (n = r("AdsPageStore").getLoadObject(e)) == null
            ? void 0
            : n.getValue()
          : null;
      return p(o, "STANDARD")
        ? s(t)
        : p(o, "RELAXED")
          ? u()
          : p(o, "DETECTED_VALUE_GT1")
            ? c(t)
            : p(o, "AEE_GT1")
              ? d(t)
              : (_(!1, "NONE"), !1);
    }
    function s(e) {
      return (
        e === void 0 && (e = !1),
        _(!0, "STANDARD"),
        e ? r("gkx")("4508") : r("gkx")("9854")
      );
    }
    function u() {
      _(!0, "RELAXED");
      var e = r("gkx")("6968");
      return e ? r("gkx")("13453") : !1;
    }
    function c(e) {
      (e === void 0 && (e = !1), _(!0, "DETECTED_VALUE_GT1"));
      var t = r("gkx")("20194");
      return t ? (e === !0 ? r("gkx")("20195") : r("gkx")("20196")) : !1;
    }
    function d(e) {
      return (
        e === void 0 && (e = !1),
        _(!0, "AEE_GT1"),
        e === !0 ? r("qex")._("2631") === !0 : r("qex")._("2639") === !0
      );
    }
    function m(e) {
      var t;
      return (t =
        e == null ? void 0 : e.ctm_value_optimization_eligibility_config) !=
        null
        ? t
        : [];
    }
    function p(e, t) {
      var n,
        r = m(e),
        o = r.find(function (e) {
          return e.segment === t;
        });
      return (n = o == null ? void 0 : o.is_eligible) != null ? n : !1;
    }
    function _(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "ctm_vo_config_eligibility_check",
        data:
          ((n = {}),
          (n.message = e ? "is_eligible_for_vo_" + t : "is_ineligible_for_vo"),
          n),
      });
    }
    l.getIsValueOptimizationGoalEligible = e;
  },
  98,
);
