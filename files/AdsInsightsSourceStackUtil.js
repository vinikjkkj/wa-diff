__d(
  "AdsInsightsSourceStackUtil",
  ["areEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e
        .map(function (e) {
          return e.join(">");
        })
        .join(", ");
    }
    function u(e, t) {
      return e.map(function (e) {
        return [].concat(e, [t]);
      });
    }
    function c(t, n) {
      t.some(function (t) {
        return (e || (e = r("areEqual")))(t, n);
      }) || t.push(n);
    }
    ((l.repr = s), (l.pushOnStacks = u), (l.unionWith = c));
  },
  98,
);
