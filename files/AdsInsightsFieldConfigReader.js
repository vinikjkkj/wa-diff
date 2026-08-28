__d(
  "AdsInsightsFieldConfigReader",
  ["AdsInsightsFieldConfig", "memoizeStringOnly"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    r("AdsInsightsFieldConfig").fields_with_config_index.forEach(
      function (t, n) {
        for (var r of t) e[r] = n;
      },
    );
    var s = r("memoizeStringOnly")(function (t) {
      var n = e[t];
      if (n == null) return null;
      var o = r("AdsInsightsFieldConfig").configs[n];
      return babelHelpers.extends(
        { id: t, beta: !1, formatType: o.valueType },
        o,
      );
    });
    l.getFieldConfig = s;
  },
  98,
);
