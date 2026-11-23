__d(
  "MAIBAEditEntrypointGatingUtil",
  ["MAIBACreationStepsSection", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      r("MAIBACreationStepsSection").AUDIENCE,
      r("MAIBACreationStepsSection").BUDGET,
      r("MAIBACreationStepsSection").CREATIVE,
    ]);
    function s(t) {
      return e.has(t);
    }
    function u(e, t) {
      return e === r("MAIBACreationStepsSection").CREATIVE
        ? t === "ad"
        : e === r("MAIBACreationStepsSection").AUDIENCE
          ? t === "ad_set"
          : e === r("MAIBACreationStepsSection").BUDGET
            ? t === "campaign"
            : !1;
    }
    function c(e, t) {
      return m(e, t, !1);
    }
    function d(e, t) {
      return m(e, t, !0);
    }
    function m(e, t, n) {
      return !s(e) || !u(e, t)
        ? !1
        : n
          ? r("qex")._("2791") === !0
          : r("qex")._("2792") === !0;
    }
    ((l.isSelectedLevelEligibleForMAIBAEditCTA = u),
      (l.isEligibleForMAIBAEditCTAWithoutExposure = c),
      (l.isEligibleForMAIBAEditCTAWithExposure = d));
  },
  98,
);
