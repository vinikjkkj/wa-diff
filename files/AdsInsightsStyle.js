__d(
  "AdsInsightsStyle",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        COST_PER_RESULT: "#eed718",
        COST_PER_RESULT_LIGHT: "#eed718",
        CPM: "#ed953b",
        CPM_LIGHT: "#ed953b",
        FREQUENCY: "#d67ace",
        FREQUENCY_LIGHT: "#d67ace",
        IMPRESSIONS: "#9dbacb",
        IMPRESSIONS_LIGHT: "#9dbacb",
        REACH: "#5dd3b6",
        REACH_LIGHT: "#5dd3b6",
        RESULT_RATE: "#e588a4",
        RESULT_RATE_LIGHT: "#e588a4",
        RESULTS: "#4e69a2",
        RESULTS_LIGHT: "#4e69a2",
        SPEND: "#a2d35d",
        SPEND_LIGHT: "#a2d35d",
      },
      l = {};
    Object.keys(e).forEach(function (t, n) {
      var r = /^(\w+)_LIGHT$/.exec(t);
      r && (l[e[r[1]]] = e[t]);
    });
    var s = babelHelpers.extends({}, e, {
        getLightColor: function (t) {
          return l[t];
        },
      }),
      u = s;
    i.default = u;
  },
  66,
);
