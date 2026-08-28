__d(
  "AdsMgmtAdObjectTypeNonHierarchicalReducerPlugin",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            o,
            a,
            i = t.get(r("AdsObjectTypes").CAMPAIGN_GROUP).asMutable(),
            l = t.get(r("AdsObjectTypes").CAMPAIGN).asMutable(),
            s = t.get(r("AdsObjectTypes").ADGROUP).asMutable(),
            u =
              (n == null || (e = n.filteredIDs) == null
                ? void 0
                : e.campaignGroupIDs) || [],
            c =
              (n == null || (o = n.filteredIDs) == null
                ? void 0
                : o.campaignIDs) || [],
            d =
              (n == null || (a = n.filteredIDs) == null
                ? void 0
                : a.adgroupIDs) || [];
          return (
            u.forEach(function (e) {
              i.add(e);
            }),
            c.forEach(function (e) {
              l.add(e);
            }),
            d.forEach(function (e) {
              s.add(e);
            }),
            t
              .set(r("AdsObjectTypes").CAMPAIGN_GROUP, i.asImmutable())
              .set(r("AdsObjectTypes").CAMPAIGN, l.asImmutable())
              .set(r("AdsObjectTypes").ADGROUP, s.asImmutable())
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
