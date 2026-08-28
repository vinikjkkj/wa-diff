__d(
  "AdsCampaignGroupTargetFrequencyInAuctionRegeneratePredictionTriggerReducerUtils",
  [
    "AdsDataAtom",
    "AdsDraftFragmentStoreStateUtils",
    "AdsTargetFrequencyInAuctionRegenerateCGPredictionTriggerReducerSharedUtils",
    "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionAction",
    "AdsUEditorCampaignGroupTargetFrequencyInAuctionUtils",
    "AdsUEditorHostIDs",
    "firstx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(["frequency_control_specs", "end_time"]);
    function u(e, t, n) {
      var r = e.get(t);
      if (r == null) return n;
      var o = r.newValue;
      return o != null && typeof o.toJS == "function" ? o.toJS() : o;
    }
    function c(e, t) {
      var n = t.values;
      return babelHelpers.extends({}, e, {
        frequency_control_specs: u(
          n,
          "frequency_control_specs",
          e.frequency_control_specs,
        ),
        lifetime_budget: u(n, "lifetime_budget", e.lifetime_budget),
        objective: u(n, "objective", e.objective),
      });
    }
    function d(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        u,
        c,
        d = o(
          "AdsTargetFrequencyInAuctionRegenerateCGPredictionTriggerReducerSharedUtils",
        ).buildCGDraftFragmentFromPrevParams(e, n),
        m =
          (r = t.values.get("frequency_control_specs")) == null
            ? void 0
            : r.newValue;
      return babelHelpers.extends({}, d, {
        bid_strategy:
          (a =
            (i = t.values.get("bid_strategy")) == null ? void 0 : i.newValue) !=
          null
            ? a
            : null,
        daily_budget:
          (l =
            (s = t.values.get("daily_budget")) == null ? void 0 : s.newValue) !=
          null
            ? l
            : null,
        lifetime_budget:
          (u =
            (c = t.values.get("lifetime_budget")) == null
              ? void 0
              : c.newValue) != null
            ? u
            : null,
        frequency_control_specs: m != null ? m : d.frequency_control_specs,
      });
    }
    function m(e) {
      var t = e.getChangedFields();
      for (var n of t) {
        var r = n.split(".")[0];
        if (s.has(r)) return "cg_direct";
      }
      return "campaign_data";
    }
    function p(t, n, a) {
      var l = a.account,
        s = a.campaignDataGetter,
        u = a.campaignGroupDataGetter,
        p = a.campaignIDsGetter,
        _ = a.frequencyOptions,
        f = t,
        g = new Map(),
        h = Array.from(t.keys()).filter(function (e) {
          var n;
          return ((n = t.get(e)) == null ? void 0 : n.success) != null;
        }),
        y = o("AdsDraftFragmentStoreStateUtils").getAll(n, h);
      for (var C of h) {
        var b = y.get(C);
        if (!(b == null || !b.hasValue())) {
          var v = b.getValueEnforcing(),
            S = r("firstx")(u([C]));
          if (S[1].hasValue()) {
            var R = S[1].getValueEnforcing();
            if (
              o(
                "AdsTargetFrequencyInAuctionRegenerateCGPredictionTriggerReducerSharedUtils",
              ).hasEffectiveTargetFrequencyControlSpec(v, R)
            ) {
              var L = o(
                "AdsTargetFrequencyInAuctionRegenerateCGPredictionTriggerReducerSharedUtils",
              ).shouldSkipCGDraft(C, t, _);
              if (L != null) {
                var E = L.predictionStatus,
                  k = L.prevParams,
                  I = o(
                    "AdsTargetFrequencyInAuctionRegenerateCGPredictionTriggerReducerSharedUtils",
                  ).checkOptimizationGoalMatch(v, k);
                if (I === "mismatch") {
                  f = f.delete(C);
                  continue;
                }
                var T = l.getValue();
                if (T != null) {
                  var D = p(T.account_id, C);
                  if (D.length !== 0) {
                    var x = s(D),
                      $ = new Map();
                    for (var P of x.entries()) {
                      var N = P[0],
                        M = P[1];
                      M.hasValue() && $.set(N, M.getValueEnforcing());
                    }
                    if ($.size !== 0) {
                      var w = d(C, v, k),
                        A = new Map();
                      A.set(C, c(R, v));
                      var F = o(
                        "AdsUEditorCampaignGroupTargetFrequencyInAuctionUtils",
                      ).getNewCampaignGroupPredictionParams(
                        w,
                        E,
                        A,
                        $,
                        T,
                        T.account_id,
                      );
                      if (F != null) {
                        var O = m(v);
                        g.set(C, { params: F, source: O });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      var B = function () {
          var t = q[0];
          W = q[1];
          var n = W.params,
            o = W.source;
          ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            r(
              "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionAction",
            ).dispatch(
              {
                campaignGroupIDs: [t],
                params: n,
                hostID: r("AdsUEditorHostIDs").EDITING,
                source: o,
              },
              {
                line: "277",
                module:
                  "AdsCampaignGroupTargetFrequencyInAuctionRegeneratePredictionTriggerReducerUtils.js",
                moduleID: i.id,
              },
            );
          }),
            (f = f.delete(t)));
        },
        W;
      for (var q of g.entries()) B();
      return f;
    }
    l.handleReduce = p;
  },
  98,
);
