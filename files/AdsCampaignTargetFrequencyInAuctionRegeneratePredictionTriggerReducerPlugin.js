__d(
  "AdsCampaignTargetFrequencyInAuctionRegeneratePredictionTriggerReducerPlugin",
  [
    "AdsAccountStore",
    "AdsAuctionFrequencyControlProvider",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignTargetFrequencyInAuctionRegeneratePredictionTriggerReducerUtils",
    "AdsDataAtom",
    "AdsDraftFragmentStoreStateUtils",
    "AdsFrequencyControlEditorConstants",
    "AdsMutators",
    "AdsPECampaignSelectors",
    "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionAction",
    "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
    "AdsUEditorHostIDs",
    "DateTime",
    "Laminar",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("Laminar").withFluxSelectors(
          {
            account: r("AdsAccountStore").getSelectedAccount,
            frequencyOptions: r(
              "AdsAuctionFrequencyControlProvider",
            ).toFluxSelector(),
          },
          function (t, n, a) {
            var l = a.account,
              s = a.frequencyOptions,
              u = o("AdsPECampaignSelectors").getByFieldsSelector(),
              c = t,
              d = new Map(),
              m = Array.from(t.keys()).filter(function (e) {
                var n;
                return ((n = t.get(e)) == null ? void 0 : n.success) != null;
              }),
              p = o("AdsDraftFragmentStoreStateUtils").getAll(n, m);
            o("AdsMutators").mapExistingValues(p, m, function (e, n) {
              var a, i, m;
              if (
                s.get(n) !==
                o("AdsFrequencyControlEditorConstants")
                  .CAP_FREQUENCY_SELECTOR_OPTION_INDEX
              ) {
                var p = t.get(n);
                if (p != null) {
                  var _ = p.params;
                  if (_ != null) {
                    var f =
                        (a = e.values.get("optimization_goal")) == null
                          ? void 0
                          : a.newValue,
                      g = (i = p.params) == null ? void 0 : i.optimization_goal;
                    if (
                      f != null &&
                      !o(
                        "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
                      ).selectedOptimizationMatchesPrediction(f, g)
                    ) {
                      c = c.delete(n);
                      return;
                    }
                    var h = l.getValue();
                    if (h != null) {
                      var y = r("AdsCampaignDraftFragmentStore").isNew(n),
                        C = o(
                          "AdsCampaignTargetFrequencyInAuctionRegeneratePredictionTriggerReducerUtils",
                        ).coerceLifetimeBudget(
                          (m = u(n, { lifetime_budget: null })) == null ||
                            (m = m.getValue()) == null
                            ? void 0
                            : m.lifetime_budget,
                        ),
                        b = o(
                          "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
                        ).getNewPredictionParams(e, p, h, y, C);
                      if (
                        !(b == null || JSON.stringify(b) === JSON.stringify(_))
                      ) {
                        var v = r("DateTime").now(h.timezone_id),
                          S = new (r("DateTime"))(b.start_time, h.timezone_id);
                        (!y &&
                          v.isAfter(S) &&
                          !o(
                            "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
                          ).isPredictionRequiredForMidFlightEdit(e)) ||
                          d.set(n, b);
                      }
                    }
                  }
                }
              }
            });
            var _ = function () {
              var t = f[0],
                n = f[1];
              ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r(
                    "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionAction",
                  ).dispatch(
                    {
                      campaignIDs: [t],
                      params: n,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                    },
                    {
                      line: "148",
                      module:
                        "AdsCampaignTargetFrequencyInAuctionRegeneratePredictionTriggerReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              ),
                (c = c.delete(t)));
            };
            for (var f of d.entries()) _();
            return c;
          },
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
