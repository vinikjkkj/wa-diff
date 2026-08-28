__d(
  "AdsCFAdgroupCallExtensionUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      if (r("gkx")("13846")) return !1;
      if (r("gkx")("9646")) return !0;
      var o =
          ((t =
            e == null
              ? void 0
              : e.is_eligible_for_call_extension_ml_defaulting) != null
            ? t
            : !1) && (e == null ? void 0 : e.phone_number_prefill) != null,
        a =
          ((n =
            e == null
              ? void 0
              : e.is_eligible_for_call_extension_sticky_defaulting) != null
            ? n
            : !1) && (e == null ? void 0 : e.phone_number_prefill) != null;
      return a !== o && r("gkx")("10448") ? a : o;
    }
    l.isEligibleForDefaultingInCreationFlow = e;
  },
  98,
);
