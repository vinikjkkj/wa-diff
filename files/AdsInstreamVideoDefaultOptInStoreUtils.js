__d(
  "AdsInstreamVideoDefaultOptInStoreUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("immutable")
        .Map()
        .withMutations(function (t) {
          e.forEach(function (e) {
            if (
              e.extraData &&
              e.extraData.campaignIDsToAddInstreamVideoPlacement &&
              e.extraData.campaignIDsToAddInstreamVideoPlacement.length
            ) {
              var n = e.extraData.campaignIDsToAddInstreamVideoPlacement;
              n.forEach(function (e) {
                t.set(e, r("immutable").Set());
              });
            }
          });
        });
    }
    function s(e) {
      return r("immutable")
        .Set()
        .withMutations(function (t) {
          e.forEach(function (e) {
            if (
              e.extraData &&
              e.extraData.campaignIDsToAddInstreamVideoPlacement &&
              e.extraData.campaignIDsToAddInstreamVideoPlacement.length
            ) {
              var n = u(e);
              n && t.union(n);
            }
          });
        });
    }
    function u(e) {
      var t = e.fragments.filter(function (e) {
        return e.ad_object_type === "ad_set";
      });
      return t.length
        ? t.map(function (e) {
            return e.ad_object_id;
          })
        : null;
    }
    function c(e, t) {
      var n = e;
      return (
        t.forEach(function (e, t) {
          var r = e.getValueEnforcing().values.get("source_adset_id");
          if (r) {
            var o = r.get("newValue"),
              a = n.get(o);
            if (a) {
              var i;
              n = n.merge(((i = {}), (i[o] = a.add(t)), i));
            }
          }
        }),
        n
      );
    }
    function d(e) {
      return r("immutable")
        .Set()
        .withMutations(function (t) {
          e.forEach(function (e) {
            if (
              e.extraData &&
              e.extraData.campaignIDsToAddInstreamVideoPlacement &&
              e.extraData.campaignIDsToAddInstreamVideoPlacement.length
            ) {
              var n = m(e);
              n && t.union(n);
            }
          });
        });
    }
    function m(e) {
      var t = e.fragments.filter(function (e) {
        return e.ad_object_type === "campaign";
      });
      return t.length
        ? t.map(function (e) {
            return e.ad_object_id;
          })
        : null;
    }
    ((l.getDefaultOptedInOriginalCampaignIDs = e),
      (l.getCopyCompletedCampaignIDs = s),
      (l.getDefaultOptedInNewCampaignIDs = c),
      (l.getDefaultOptedInCampaignGroupIDs = d));
  },
  98,
);
