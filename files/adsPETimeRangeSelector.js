__d(
  "adsPETimeRangeSelector",
  [
    "invariant",
    "AdsAccountStore",
    "AdsInsightsTimeRange",
    "AdsPEStatRangeUIStoreSelectors",
    "LocalDateInterval",
    "adsCreateSelector",
    "isFalsey",
    "isTruthy",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccount,
          o("AdsPEStatRangeUIStoreSelectors").getStatRangeStringSelector,
          o("AdsPEStatRangeUIStoreSelectors")
            .getStatRangeWithoutAccountSelector,
          o("AdsPEStatRangeUIStoreSelectors").getRangeTypeSelector,
        ],
        function (t, n, o, a) {
          var e = a(),
            i = null;
          if (r("isFalsey")(e))
            if (t.hasValueWithoutError()) {
              var l = t.getValueEnforcing(),
                s = l.timezone_id;
              i = n(s);
            } else i = o();
          return { rangeType: e, statRange: i };
        },
        { equal: r("shallowEqual"), name: i.id + ".dataSelector" },
      ),
      u = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.rangeType,
            n = t.statRange,
            o;
          if (r("isFalsey")(e) && n) {
            var a = r("LocalDateInterval").fromStrings(n.start, n.end);
            o = r("AdsInsightsTimeRange").interval(a);
          } else
            r("isTruthy")(e)
              ? (o = r("AdsInsightsTimeRange").preset(e))
              : s(0, 3880);
          return o;
        },
        { name: i.id + ".adsPETimeRangeSelector" },
      ),
      c = u;
    l.default = c;
  },
  98,
);
