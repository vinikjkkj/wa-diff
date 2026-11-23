__d(
  "AdsPETypeaheadMAIBAPresetRankingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (t.length !== e.length) return null;
      var n = new Map(
          e.map(function (e) {
            return [String(e.id), e];
          }),
        ),
        r = new Set(),
        o = [];
      for (var a of t) {
        var i = String(a),
          l = n.get(i);
        if (l == null || r.has(i)) return null;
        (r.add(i), o.push(l));
      }
      return o;
    }
    function l(t, n, r) {
      if (t != null) return t;
      var o = e(n, r);
      return { order: o != null ? o : n, rankingResolved: o != null };
    }
    i.resolvePresetOrderForOpen = l;
  },
  66,
);
