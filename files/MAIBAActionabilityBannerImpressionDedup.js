__d(
  "MAIBAActionabilityBannerImpressionDedup",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 500,
      l = new Set();
    function s(t, n, r, o) {
      var a = n != null && n !== "" ? "r" + n : "i" + (r != null ? r : ""),
        i = (t != null ? t : "") + ":" + a + ":" + o;
      if (l.has(i)) return !1;
      if (l.size >= e) {
        var s = l.values().next();
        s.done !== !0 && l.delete(s.value);
      }
      return (l.add(i), !0);
    }
    function u() {
      l.clear();
    }
    ((i.claimBannerImpression = s), (i.resetBannerImpressionsForTesting = u));
  },
  66,
);
