__d(
  "AdsDeliveryMidFlightScaleGoodCtxCampaignFlowReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.campaignGroupIDs,
            r = n.campaignIDs;
          return babelHelpers.extends({}, t, {
            campaignIDs: r,
            campaignGroupIDs: e != null ? e : [],
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
