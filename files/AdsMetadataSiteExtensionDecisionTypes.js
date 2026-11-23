__d(
  "AdsMetadataSiteExtensionDecisionTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "defaulted_on" || e === "not_defaulted_on" ? "loaded" : e;
    }
    function l(e, t, n) {
      n === void 0 && (n = "not_required");
      var r = { loaded: [], not_required: [], unavailable: [] };
      return (
        r[e].push("account_id"),
        r[t].push("user_settings"),
        r[n].push("pe_defaulting"),
        r
      );
    }
    function s(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.blockingReasonsExhaustive,
        o = r === void 0 ? !1 : r;
      return {
        blockingReasons: [],
        blockingReasonsExhaustive: o,
        inputResolution: e,
        outcome: "allow",
        reason: null,
      };
    }
    function u(e, t, n) {
      var r = n === void 0 ? {} : n,
        o = r.blockingReasons,
        a = o === void 0 ? [e] : o,
        i = r.blockingReasonsExhaustive,
        l = i === void 0 ? !1 : i;
      return {
        blockingReasons: a,
        blockingReasonsExhaustive: l,
        inputResolution: t,
        outcome: "block",
        reason: e,
      };
    }
    ((i.getSEPEDefaultingInputStatus = e),
      (i.createSEDecisionInputResolution = l),
      (i.allowSEDecision = s),
      (i.blockSEDecision = u));
  },
  66,
);
