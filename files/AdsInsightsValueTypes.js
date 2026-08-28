__d(
  "AdsInsightsValueTypes",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
      switch (t) {
        case "CURRENCY":
        case "DATETIME":
        case "FLOAT":
        case "INTEGER":
        case "LONG_INTEGER":
          return "number";
        case "DATE":
        case "STRING":
          return "string";
        default:
          s(0, 42862, t);
      }
    };
    l.getJavaScriptType = e;
  },
  98,
);
