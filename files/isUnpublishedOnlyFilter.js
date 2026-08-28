__d(
  "isUnpublishedOnlyFilter",
  ["AdsGenericFilterSet", "adsMgmtDraftFilterValues"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "CAMPAIGN_GROUP_DELIVERY_INFO",
      "CAMPAIGN_DELIVERY_INFO",
      "ADGROUP_DELIVERY_INFO",
      "CAMPAIGN_GROUP_DELIVERY_STATUS",
      "CAMPAIGN_DELIVERY_STATUS",
      "ADGROUP_DELIVERY_STATUS",
    ]);
    function s(t) {
      var n;
      return t == null
        ? !1
        : (t instanceof r("AdsGenericFilterSet") ? (n = t.toAPI()) : (n = t),
          n.some(function (t) {
            return (
              e.has(t.field) &&
              t.operator === "IN" &&
              Array.isArray(t.value) &&
              t.value.length === 1 &&
              r("adsMgmtDraftFilterValues").has(t.value[0])
            );
          }));
    }
    l.default = s;
  },
  98,
);
