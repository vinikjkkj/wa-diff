__d(
  "AdsUEditorCampaignDeliveryChangeBillingEventReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeBillingEventActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r("AdsCampaignRecordAccessors").billing_event.set(
                t.billingEvent,
                e,
              );
            });
          },
          o("AdsUEditorCampaignDeliveryChangeBillingEventActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
