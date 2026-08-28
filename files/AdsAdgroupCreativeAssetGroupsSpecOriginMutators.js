__d(
  "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
  ["AdsAdgroupRecordAccessors", "AdsMutators", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r =
          e == null || (n = e.creative_asset_groups_spec) == null
            ? void 0
            : n.origins;
      return r ? r.includes(t) : !1;
    }
    function s(t, n) {
      return n.some(function (n) {
        return e(t, n);
      });
    }
    function u(e) {
      var t,
        n =
          e == null || (t = e.creative_asset_groups_spec) == null
            ? void 0
            : t.origins;
      if (n == null) return !1;
      var r = Array.isArray(n) ? n.length : n.size;
      return r === 0;
    }
    function c(e) {
      var t,
        n =
          e == null || (t = e.creative_asset_groups_spec) == null
            ? void 0
            : t.origins;
      return n ? (Array.isArray(n) ? n : n.toArray()) : [];
    }
    function d(e, t) {
      var n = [
        r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.origins.set(
          r("immutable").List(t),
        ),
      ];
      return o("AdsMutators").chain.apply(o("AdsMutators"), n)(e);
    }
    function m(e) {
      return d(e, []);
    }
    ((l.hasSpecificOrigin = e),
      (l.hasAnyOrigins = s),
      (l.hasDeletedOrigin = u),
      (l.getOrigins = c),
      (l.setOrigins = d),
      (l.deleteAllOrigins = m));
  },
  98,
);
