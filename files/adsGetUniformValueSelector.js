__d(
  "adsGetUniformValueSelector",
  ["AdsBulkValueUtils", "adsCreateSelector", "memoizeWithArgsWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        return r("adsCreateSelector")(
          [t],
          function (t) {
            return o("AdsBulkValueUtils").getUniformValueOrDefault(t, n);
          },
          { name: i.id },
        );
      },
      s = r("memoizeWithArgsWeak")(e);
    function u(e, t) {
      return s(e, t);
    }
    l.default = u;
  },
  98,
);
