__d(
  "AdsDLOAssetLookupUtils",
  ["invariant", "AdsDLOFieldToAdlabelsMapping", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, o) {
      var a,
        i = (a = e.creative) == null ? void 0 : a.asset_feed_spec;
      if (i == null) return { fieldValue: null, index: null };
      var l = i.get(t);
      if (l == null) return { fieldValue: null, index: null };
      r("immutable").List.isList(l) || s(0, 13363);
      var u = r("AdsDLOFieldToAdlabelsMapping").get(t),
        c = l.findEntry(function (e) {
          var t = e.get(u);
          return t == null
            ? !1
            : t.some(function (e) {
                return e.get("name") === o;
              });
        });
      if (c == null) return { index: null, fieldValue: null };
      var d = c[0],
        m = c[1],
        p = m && m.get(n) != null ? m.get(n) : null;
      return { fieldValue: p, index: d };
    }
    function u(e, t, n) {
      var o,
        a = (o = e.creative) == null ? void 0 : o.asset_feed_spec;
      if (a == null) return [];
      var i = a.get(t);
      if (i == null) return [];
      r("immutable").List.isList(i) || s(0, 13363);
      var l = [],
        u = r("AdsDLOFieldToAdlabelsMapping").get(t);
      return (
        i.forEach(function (e, t) {
          var r;
          ((n == null && e.get(u) == null) ||
            ((r = e.get(u)) != null &&
              r.some(function (e) {
                return e.get("name") === n;
              }))) &&
            l.push(t);
        }),
        l
      );
    }
    ((l.getAssetEntryForLabel = e), (l.getAssetsIndicesForLabel = u));
  },
  98,
);
