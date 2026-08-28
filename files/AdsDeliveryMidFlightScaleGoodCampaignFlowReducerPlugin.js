__d(
  "AdsDeliveryMidFlightScaleGoodCampaignFlowReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.campaignGroupIDs,
            r = n.campaignIDs,
            o = n.currentSelectedBudgetInInlineGuidance,
            a = n.selectedAdditionalDurationInDays,
            i = n.sgcPopoverLever;
          return babelHelpers.extends({}, t, {
            campaignIDs: r,
            campaignGroupIDs: e != null ? e : [],
            currentSelectedBudgetInInlineGuidance: o != null ? o : null,
            selectedAdditionalDurationInDays: a != null ? a : null,
            sgcPopoverLever: i != null ? i : null,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
