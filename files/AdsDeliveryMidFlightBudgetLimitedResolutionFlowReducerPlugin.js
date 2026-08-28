__d(
  "AdsDeliveryMidFlightBudgetLimitedResolutionFlowReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.campaignGroupIDs,
            r = n.campaignIDs,
            o = n.currentSelectedBudgetInInlineGuidance;
          return babelHelpers.extends({}, t, {
            campaignIDs: r,
            campaignGroupIDs: e != null ? e : [],
            currentSelectedBudgetInInlineGuidance: o != null ? o : null,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
