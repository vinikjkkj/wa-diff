__d(
  "MAIBAOptimisticPreambleImpressionDedup",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 500,
      l = new Set();
    function s(t) {
      if (t == null || t === "" || l.has(t)) return !1;
      if (l.size >= e) {
        var n = l.values().next();
        n.done !== !0 && l.delete(n.value);
      }
      return (l.add(t), !0);
    }
    function u() {
      l.clear();
    }
    ((i.claimOptimisticPreambleImpression = s),
      (i.resetOptimisticPreambleImpressionsForTesting = u));
  },
  66,
);
