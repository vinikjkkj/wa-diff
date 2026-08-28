__d(
  "getDuplicatedMMUpsellEligibleCampaignIDs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e == null || t.length === 0) return [];
      var n = e
        .filter(function (e) {
          return e.ad_object_type === "ad_set";
        })
        .filter(function (e) {
          var n;
          return t.includes((n = e.source_ad_object_id) != null ? n : "");
        })
        .map(function (e) {
          return e.ad_object_id;
        });
      return n;
    }
    i.default = e;
  },
  66,
);
