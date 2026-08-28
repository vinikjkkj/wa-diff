__d(
  "computeAncestorIDs",
  ["AdsObjectLevelToStore", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = s,
        r = n(e, "ad"),
        o = n(t, "ad_set");
      return r.concat(o);
    }
    function s(e, t) {
      var n = r("immutable").Set().asMutable();
      if (!e.isEmpty()) {
        var o,
          a =
            (o = r("AdsObjectLevelToStore").get(t)) == null
              ? void 0
              : o.getAllObjects(e.toArray());
        a == null ||
          a.forEach(function (e) {
            if (e && !e.isLoading() && e.hasValue()) {
              var r = e.getValueEnforcing();
              switch (t) {
                case "ad":
                  n.add(r.campaign_id).add(r.adset_id);
                  break;
                case "ad_set":
                  n.add(r.campaign_id);
                  break;
              }
            }
          });
      }
      return n.asImmutable();
    }
    l.default = e;
  },
  98,
);
