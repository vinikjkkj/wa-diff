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
    "isTargetFrequency",
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
              var a, i, m, p;
              if (
                s.get(n) !==
                o("AdsFrequencyControlEditorConstants")
                  .CAP_FREQUENCY_SELECTOR_OPTION_INDEX
              ) {
                var _ =
                  (a = u(n, { frequency_control_specs: null })) == null ||
                  (a = a.getValue()) == null ||
                  (a = a.frequency_control_specs) == null
                    ? void 0
                    : a.map(function (e) {
                        return e.type;
                      });
                if (_ == null || _.length === 0 || !r("isTargetFrequency")(_)) {
                  c = c.delete(n);
                  return;
                }
                var f = t.get(n);
                if (f != null) {
                  var g = f.params;
                  if (g != null) {
                    var h =
                        (i = e.values.get("optimization_goal")) == null
                          ? void 0
                          : i.newValue,
                      y = (m = f.params) == null ? void 0 : m.optimization_goal;
                    if (
                      h != null &&
                      !o(
                        "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
                      ).selectedOptimizationMatchesPrediction(h, y)
                    ) {
                      c = c.delete(n);
                      return;
                    }
                    var C = l.getValue();
                    if (C != null) {
                      var b = r("AdsCampaignDraftFragmentStore").isNew(n),
                        v = o(
                          "AdsCampaignTargetFrequencyInAuctionRegeneratePredictionTriggerReducerUtils",
                        ).coerceLifetimeBudget(
                          (p = u(n, { lifetime_budget: null })) == null ||
                            (p = p.getValue()) == null
                            ? void 0
                            : p.lifetime_budget,
                        ),
                        S = o(
                          "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
                        ).getNewPredictionParams(e, f, C, b, v);
                      if (
                        !(S == null || JSON.stringify(S) === JSON.stringify(g))
                      ) {
                        var R = r("DateTime").now(C.timezone_id),
                          L = new (r("DateTime"))(S.start_time, C.timezone_id);
                        (!b &&
                          R.isAfter(L) &&
                          !o(
                            "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
                          ).isPredictionRequiredForMidFlightEdit(e)) ||
                          d.set(n, S);
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
                      line: "167",
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
