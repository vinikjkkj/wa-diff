__d(
  "AdsInsightsMetricAvailableLevelsNotes",
  ["fbt", "AdsInsightsMetricAvailableLevels", "enumObjectKeys", "intlList"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      campaign: s._(/*BTDS*/ "campaigns"),
      adset: s._(/*BTDS*/ "ad sets"),
      ad: s._(/*BTDS*/ "ads"),
    };
    function u(e) {
      return (
        e === "quality_score_ectr" ||
        e === "quality_score_ecvr" ||
        e === "quality_score_organic"
      );
    }
    function c(t) {
      var n,
        o = Object.keys(e).filter(function (e) {
          return !t.includes(e);
        }),
        a = (n = r("intlList"))(
          t.map(function (t) {
            return e[t];
          }),
          n.CONJUNCTIONS.AND,
        ),
        i = n(
          o.map(function (t) {
            return e[t];
          }),
          n.CONJUNCTIONS.OR,
        );
      return s._(
        /*BTDS*/ "This column does not apply to {unsupported-levels}, only {supported-levels}.",
        [s._param("unsupported-levels", i), s._param("supported-levels", a)],
      );
    }
    function d() {
      return s._(
        /*BTDS*/ "This metric is an ad relevance diagnostic and doesn't apply to campaigns or ad sets, only ads.",
      );
    }
    var m = r("enumObjectKeys")(r("AdsInsightsMetricAvailableLevels")).reduce(
        function (e, t) {
          return (
            (e[t] = u(t) ? d() : c(r("AdsInsightsMetricAvailableLevels")[t])),
            e
          );
        },
        {},
      ),
      p = m;
    l.default = p;
  },
  226,
);
