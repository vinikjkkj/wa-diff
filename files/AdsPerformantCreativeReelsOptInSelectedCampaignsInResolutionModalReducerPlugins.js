__d(
  "AdsPerformantCreativeReelsOptInSelectedCampaignsInResolutionModalReducerPlugins",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = new Set(
            [].concat(Array.from(t.selectedCampaignIDs), n.campaignIDs),
          );
          return babelHelpers.extends({}, t, { selectedCampaignIDs: e });
        },
      },
      l = {
        reduce: function (t, n) {
          var e = new Set(t.selectedCampaignIDs);
          return (
            n.campaignIDs.forEach(function (t) {
              return e.delete(t);
            }),
            babelHelpers.extends({}, t, { selectedCampaignIDs: e })
          );
        },
      },
      s = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, {
            selectedCampaignIDs: new Set(),
          });
        },
      },
      u = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, {
            selectedCampaignIDs: new Set(n.campaignIDs),
          });
        },
      };
    ((i.AdsPerformantCreativeReelsOptInSelectedCampaignsInResolutionModalActionPlugin =
      e),
      (i.AdsPerformantCreativeReelsOptInUnselectedCampaignsInResolutionModalActionPlugin =
        l),
      (i.AdsPerformantCreativeReelsOptInUnselectAllCampaignsInResolutionModalActionPlugin =
        s),
      (i.AdsPerformantCreativeReelsOptInReselectAllCampaignsInResolutionModalActionPlugin =
        u));
  },
  66,
);
