__d(
  "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionReducerPlugin",
  [
    "AdsAPIBillingEvents",
    "AdsDataAtom",
    "AdsReservationInAuctionCampaignGroupPredictionManager",
    "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusAction",
    "AdsUEditorCampaignDeliveryChangeBillingEventAction",
    "ReservationInAuctionEstimatesClient",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      if (e == null) throw new TypeError("Cannot destructure " + e);
    }
    var u = {
        reduce: function (n, a) {
          var t = n,
            l = function (n) {
              t = t.set(n, {
                error: null,
                params: a.params,
                prediction_id: null,
                success: null,
              });
              var e = function (t) {
                  r(
                    "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusAction",
                  ).dispatch(
                    {
                      campaignGroupID: n,
                      hostID: a.hostID,
                      success: !0,
                      params: a.params,
                      prediction_id: t,
                      error: null,
                    },
                    {
                      line: "43",
                      module:
                        "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
                l = function (t, o) {
                  r(
                    "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusAction",
                  ).dispatch(
                    {
                      campaignGroupID: n,
                      hostID: a.hostID,
                      error: t,
                      params: o,
                      prediction_id: null,
                      success: !1,
                    },
                    {
                      line: "59",
                      module:
                        "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
                u = function (n) {
                  e(n.id);
                },
                c = function (t, n) {
                  l(t, n);
                };
              if (a.skipBillingEventChange === !0) {
                var d = babelHelpers.extends({}, (s(a.params), a.params));
                o("ReservationInAuctionEstimatesClient").callPredictionAPI(
                  d,
                  u,
                  function (e) {
                    l(e, a.params);
                  },
                );
              } else
                r(
                  "AdsReservationInAuctionCampaignGroupPredictionManager",
                ).predictTargetFrequencyInAuction(
                  n,
                  a.params,
                  function (t) {
                    e(t.id);
                  },
                  c,
                  a.source,
                );
            };
          for (var u of a.campaignGroupIDs) l(u);
          return (
            a.skipBillingEventChange !== !0 &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r(
                    "AdsUEditorCampaignDeliveryChangeBillingEventAction",
                  ).dispatch(
                    {
                      campaignIDs: a.campaignGroupIDs,
                      hostID: a.hostID,
                      billingEvent: r("AdsAPIBillingEvents").IMPRESSIONS,
                    },
                    {
                      line: "111",
                      module:
                        "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              ),
            t
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
