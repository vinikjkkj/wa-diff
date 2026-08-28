__d(
  "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusFailureLoggerPlugin",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          if (t.success === !1) {
            var e, n, o, a;
            r("AdsInterfacesLogger").log({
              eventCategory: "reach_frequency_sheet",
              eventName:
                "target_frequency_in_auction_campaign_group_generate_prediction_failure",
              data:
                ((a = {}),
                (a.message = String((e = t.error) != null ? e : "")),
                (a.error_code =
                  (n = (o = t.params) == null ? void 0 : o.campaign_group_id) !=
                  null
                    ? n
                    : ""),
                a),
            });
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
