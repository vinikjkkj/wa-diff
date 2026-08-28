__d(
  "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionReducerPlugin",
  [
    "AdsAPIBillingEvents",
    "AdsDataAtom",
    "AdsReservationInAuctionPredictionManager",
    "AdsTargetFrequencyBulkEditDeletePredictionIdAction",
    "AdsTargetFrequencyBulkEditSetPredictionIdAction",
    "AdsTargetFrequencyInAuctionPredictionStatusAction",
    "AdsUEditorCampaignDeliveryChangeBillingEventAction",
    "AdsUEditorCampaignTargetFrequencyInAuctionSetPredictionIdAction",
    "ReservationInAuctionEstimatesClient",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, a) {
          var t = n,
            l = function (n) {
              t = t.set(n, { error: null, params: a.params, success: null });
              var e = function () {
                  r(
                    "AdsTargetFrequencyInAuctionPredictionStatusAction",
                  ).dispatch(
                    {
                      campaignID: n,
                      hostID: a.hostID,
                      success: !0,
                      params: a.params,
                      error: null,
                    },
                    {
                      line: "45",
                      module:
                        "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
                l = function (t, o) {
                  r(
                    "AdsTargetFrequencyInAuctionPredictionStatusAction",
                  ).dispatch(
                    {
                      campaignID: n,
                      hostID: a.hostID,
                      error: t,
                      params: o,
                      success: !1,
                    },
                    {
                      line: "58",
                      module:
                        "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
                s = function (t) {
                  r("AdsTargetFrequencyBulkEditSetPredictionIdAction").dispatch(
                    { campaignID: n, predictionID: t },
                    {
                      line: "68",
                      module:
                        "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
                u = function (t) {
                  r(
                    "AdsUEditorCampaignTargetFrequencyInAuctionSetPredictionIdAction",
                  ).dispatch(
                    {
                      adgroupIDs: [],
                      campaignIDs: [n],
                      predictionID: t,
                      hostID: a.hostID,
                      expectedOptimizationGoal: a.params.optimization_goal,
                    },
                    {
                      line: "75",
                      module:
                        "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
                c = function () {
                  r(
                    "AdsTargetFrequencyBulkEditDeletePredictionIdAction",
                  ).dispatch(
                    { campaignID: n },
                    {
                      line: "87",
                      module:
                        "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
                d = function (n) {
                  (a.skipBillingEventChange === !0 ? s(n.id) : u(n.id), e());
                },
                m = function (t, n) {
                  (a.skipBillingEventChange === !0 && c(), l(t, n));
                };
              a.skipBillingEventChange === !0
                ? o("ReservationInAuctionEstimatesClient").callPredictionAPI(
                    a.params,
                    d,
                    m,
                  )
                : r(
                    "AdsReservationInAuctionPredictionManager",
                  ).predictTargetFrequencyInAuction(n, a.params, d, m);
            };
          for (var s of a.campaignIDs) l(s);
          return (
            a.skipBillingEventChange !== !0 &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r(
                    "AdsUEditorCampaignDeliveryChangeBillingEventAction",
                  ).dispatch(
                    {
                      campaignIDs: a.campaignIDs,
                      hostID: a.hostID,
                      billingEvent: r("AdsAPIBillingEvents").IMPRESSIONS,
                    },
                    {
                      line: "132",
                      module:
                        "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              ),
            t
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
