__d(
  "AdsPlacementTokenizerUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var o,
        a = e.get(t) || [];
      if (
        a.filter(function (e) {
          return Object.prototype.hasOwnProperty.call(e, n);
        }).length > 0
      )
        return e;
      var i = ((o = {}), (o[n] = r.get(n)), o);
      return e.set(t, a.concat(i));
    }
    function s(t, n) {
      return t.reduce(function (t, r, o) {
        return t.withMutations(function (t) {
          r.forEach(function (r) {
            r != null && e(t, r, o, n);
          });
        });
      }, r("immutable").Map());
    }
    ((l.setCampaignsInfo = e), (l.composeCampaignMap = s));
  },
  98,
);
