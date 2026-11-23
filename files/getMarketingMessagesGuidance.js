__d(
  "getMarketingMessagesGuidance",
  ["fbt", "AdsAPIObjectives"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return (
        t === void 0 && (t = !1),
        t
          ? e.objective === r("AdsAPIObjectives").OUTCOME_LEADS
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "")
      );
    }
    l.default = e;
  },
  226,
);
